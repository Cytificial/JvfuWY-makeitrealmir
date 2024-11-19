import { Typography, Card, Button, Space, Grid, Spin, message } from 'antd'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
const { useBreakpoint } = Grid
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ImageDetailsPage() {
  const { imageId } = useParams()
  const navigate = useNavigate()
  const screens = useBreakpoint()
  const [regenerating, setRegenerating] = useState(false)

  const {
    data: image,
    isLoading,
    refetch,
  } = Api.image.findFirst.useQuery({
    where: { id: imageId },
    include: {
      parameters: true,
      imageVariationsAsOriginalImage: true,
      user: true,
      model: true,
    },
  })

  const regenerateImage = Api.image.create.useMutation()
  const updateImage = Api.image.update.useMutation()

  const handleRegenerate = async () => {
    if (!image) return

    try {
      setRegenerating(true)
      const createData: Prisma.ImageCreateInput = {
        prompt: image.prompt || undefined,
        width: image.width || undefined,
        height: image.height || undefined,
        quality: image.quality || undefined,
        downloadCount: 0,
        status: 'PENDING',
        model: image.modelId
          ? {
              connect: { id: image.modelId },
            }
          : undefined,
        user: image.userId
          ? {
              connect: { id: image.userId },
            }
          : undefined,
      }

      const newImage = await regenerateImage.mutateAsync({
        data: createData,
      })

      message.success('Image regenerated successfully!')
      navigate(`/images/${newImage.id}`)
    } catch (error) {
      message.error('Failed to regenerate image')
    } finally {
      setRegenerating(false)
    }
  }

  const handleShare = async () => {
    try {
      const shareUrl = `${window.location.origin}/images/${image?.id}`
      await navigator.clipboard.writeText(shareUrl)
      message.success('Share link copied to clipboard!')
    } catch (error) {
      message.error('Failed to copy share link')
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <i className="las la-image" /> Image Details
        </Title>

        <Card>
          <img
            src={image?.imageUrl}
            alt={image?.prompt || 'Generated image'}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />

          <Space style={{ marginTop: '1rem' }}>
            <Button
              type="primary"
              icon={<i className="las la-sync" />}
              onClick={handleRegenerate}
              loading={regenerating}
            >
              Regenerate
            </Button>
            <Button icon={<i className="las la-share" />} onClick={handleShare}>
              Share
            </Button>
          </Space>
        </Card>

        <Card
          title={
            <>
              <i className="las la-info-circle" /> Image Information
            </>
          }
        >
          <Space direction="vertical" style={{ width: '100%' }}>
            <Paragraph>
              <Text strong>Prompt: </Text>
              {image?.prompt || 'No prompt provided'}
            </Paragraph>
            <Paragraph>
              <Text strong>Model: </Text>
              {image?.model?.name || 'Unknown model'}
            </Paragraph>
            <Paragraph>
              <Text strong>Dimensions: </Text>
              {image?.width
                ? `${image.width}x${image.height}`
                : 'Not specified'}
            </Paragraph>
            <Paragraph>
              <Text strong>Quality: </Text>
              {image?.quality || 'Standard'}
            </Paragraph>
          </Space>
        </Card>

        {image?.imageVariationsAsOriginalImage &&
          image.imageVariationsAsOriginalImage.length > 0 && (
            <Card
              title={
                <>
                  <i className="las la-images" /> Variations
                </>
              }
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: screens.md
                    ? 'repeat(3, 1fr)'
                    : 'repeat(2, 1fr)',
                  gap: '1rem',
                }}
              >
                {image.imageVariationsAsOriginalImage?.map(variation => (
                  <img
                    key={variation.id}
                    src={variation.variantImageUrl || ''}
                    alt="Variation"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      variation.variantImageUrl &&
                      window.open(variation.variantImageUrl, '_blank')
                    }
                  />
                ))}
              </div>
            </Card>
          )}
      </Space>
    </PageLayout>
  )
}
