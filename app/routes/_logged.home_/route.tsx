import {
  Typography,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  message,
  InputNumber,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // States
  const [prompt, setPrompt] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [width, setWidth] = useState(512)
  const [height, setHeight] = useState(512)
  const [quality, setQuality] = useState('standard')

  // Queries
  const { data: models } = Api.model.findMany.useQuery({
    where: { isActive: true },
  })

  const { data: recentImages } = Api.image.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
    take: 6,
    include: { model: true },
  })

  // Mutations
  const { mutateAsync: generateImage, isLoading: isGenerating } =
    Api.ai.generateImage.useMutation()
  const { mutateAsync: createImage } = Api.image.create.useMutation()

  const handleGenerate = async () => {
    if (!prompt || !selectedModel) {
      message.error('Please fill in all required fields')
      return
    }

    try {
      const generated = await generateImage({ prompt })

      if (generated.url) {
        await createImage({
          data: {
            prompt,
            imageUrl: generated.url,
            width,
            height,
            quality,
            status: 'COMPLETED',
            downloadCount: 0,
            userId: user?.id,
            modelId: selectedModel,
          },
        })

        message.success('Image generated successfully!')
        navigate('/gallery')
      }
    } catch (error) {
      message.error('Failed to generate image')
    }
  }

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = 'generated-image.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={2}>AI Image Generator</Title>
        <Text>Create stunning images from your text descriptions using AI</Text>
      </div>

      <Card>
        <div style={{ marginBottom: 24 }}>
          <Text strong>Image Description</Text>
          <Input.TextArea
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            rows={4}
            style={{ marginTop: 8 }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <Text strong>Model Selection</Text>
          <Select
            style={{ width: '100%', marginTop: 8 }}
            placeholder="Select a model"
            value={selectedModel}
            onChange={setSelectedModel}
          >
            {models?.map(model => (
              <Select.Option key={model.id} value={model.id}>
                {model.name} - {model.description}
              </Select.Option>
            ))}
          </Select>
        </div>

        <Row gutter={16}>
          <Col span={8}>
            <Text strong>Width</Text>
            <InputNumber
              style={{ width: '100%', marginTop: 8 }}
              min={256}
              max={1024}
              step={64}
              value={width}
              onChange={value => setWidth(value || 512)}
            />
          </Col>
          <Col span={8}>
            <Text strong>Height</Text>
            <InputNumber
              style={{ width: '100%', marginTop: 8 }}
              min={256}
              max={1024}
              step={64}
              value={height}
              onChange={value => setHeight(value || 512)}
            />
          </Col>
          <Col span={8}>
            <Text strong>Quality</Text>
            <Select
              style={{ width: '100%', marginTop: 8 }}
              value={quality}
              onChange={setQuality}
            >
              <Select.Option value="standard">Standard</Select.Option>
              <Select.Option value="hd">HD</Select.Option>
            </Select>
          </Col>
        </Row>

        <Button
          type="primary"
          block
          style={{ marginTop: 24 }}
          onClick={handleGenerate}
          loading={isGenerating}
        >
          <i className="las la-magic" /> Generate Image
        </Button>
      </Card>

      {recentImages && recentImages.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <Title level={4}>Recent Generations</Title>
          <Row gutter={[16, 16]}>
            {recentImages.map(image => (
              <Col xs={24} sm={12} md={8} key={image.id}>
                <Card
                  cover={
                    <img
                      alt={image.prompt || 'Generated image'}
                      src={image.imageUrl || ''}
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                  actions={[
                    <Button
                      type="text"
                      icon={<i className="las la-download" />}
                      onClick={() => handleDownload(image.imageUrl || '')}
                    >
                      Download
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={image.model?.name}
                    description={
                      <Text ellipsis={{ tooltip: image.prompt }}>
                        {image.prompt}
                      </Text>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </PageLayout>
  )
}
