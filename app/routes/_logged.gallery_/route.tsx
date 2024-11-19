import {
  Typography,
  Card,
  Row,
  Col,
  Input,
  DatePicker,
  Button,
  Modal,
  Select,
  Space,
  Empty,
} from 'antd'
import { useState } from 'react'
import type { Prisma } from '@prisma/client'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GalleryPage() {
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [searchPrompt, setSearchPrompt] = useState('')
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null)
  const [selectedCollection, setSelectedCollection] = useState<string>('')

  // Fetch user's images with parameters and collections included
  const { data: images, refetch } = Api.image.findMany.useQuery({
    where: {
      userId: user?.id,
      prompt: { contains: searchPrompt, mode: 'insensitive' },
      ...(selectedDate && {
        createdAt: {
          gte: selectedDate.startOf('day').toDate(),
          lte: selectedDate.endOf('day').toDate(),
        },
      }),
    },
    include: {
      parameters: true,
      collectionImages: { include: { collection: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  // Fetch user's collections
  const { data: collections } = Api.collection.findMany.useQuery({
    where: { userId: user?.id },
  })

  // Delete mutation
  const { mutateAsync: deleteImage } = Api.image.delete.useMutation()

  // Add to collection mutation
  const { mutateAsync: addToCollection } =
    Api.collectionImage.create.useMutation()

  const handleDelete = async (imageId: string) => {
    Modal.confirm({
      title: 'Delete Image',
      content: 'Are you sure you want to delete this image?',
      icon: <i className="las la-exclamation-circle" />,
      onOk: async () => {
        await deleteImage({ where: { id: imageId } })
        refetch()
      },
    })
  }

  const handleAddToCollection = async (
    imageId: string,
    collectionId: string,
  ) => {
    await addToCollection({
      data: {
        imageId,
        collectionId,
      },
    })
    refetch()
  }

  const filterImages = selectedCollection
    ? images?.filter(img =>
        img.collectionImages.some(ci => ci.collectionId === selectedCollection),
      )
    : images

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-images" /> My Gallery
        </Title>
        <Text>Browse and manage your generated images</Text>

        <Space
          direction="vertical"
          style={{ width: '100%', marginTop: '24px' }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={8}>
              <Input
                prefix={<i className="las la-search" />}
                placeholder="Search by prompt"
                value={searchPrompt}
                onChange={e => setSearchPrompt(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={8}>
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Filter by date"
                onChange={date => setSelectedDate(date)}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Filter by collection"
                allowClear
                value={selectedCollection}
                onChange={value => setSelectedCollection(value)}
              >
                {collections?.map(collection => (
                  <Select.Option key={collection.id} value={collection.id}>
                    {collection.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
          </Row>

          {filterImages?.length === 0 ? (
            <Empty description="No images found" />
          ) : (
            <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
              {filterImages?.map(image => (
                <Col xs={24} sm={12} md={8} lg={6} key={image.id}>
                  <Card
                    cover={
                      <img
                        alt={image.prompt || 'Generated image'}
                        src={image.imageUrl || ''}
                        style={{
                          height: 200,
                          objectFit: 'cover',
                          cursor: 'pointer',
                        }}
                        onClick={() => navigate(`/images/${image.id}`)}
                      />
                    }
                    actions={[
                      <Button
                        type="text"
                        icon={<i className="las la-trash-alt" />}
                        onClick={() => handleDelete(image.id)}
                      />,
                      <Select
                        style={{ width: '120px' }}
                        placeholder="Add to collection"
                        onChange={value =>
                          handleAddToCollection(image.id, value)
                        }
                      >
                        {collections?.map(collection => (
                          <Select.Option
                            key={collection.id}
                            value={collection.id}
                          >
                            {collection.name}
                          </Select.Option>
                        ))}
                      </Select>,
                    ]}
                  >
                    <Card.Meta
                      title={image.prompt}
                      description={dayjs(image.createdAt).format(
                        'MMMM D, YYYY',
                      )}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
