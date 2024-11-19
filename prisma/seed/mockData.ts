import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d841ddc4-ad0e-4eb2-85a8-444ec8870c15', '1Curt99@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'invitationToken101', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('89f45d33-31e8-4cd8-ae78-f4d0896ca8ce', '9Claudia.Volkman86@gmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=11', 'invitationToken456', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('47a0feed-3b02-471c-b64b-ea1df18264d4', '17Benedict.Mayer11@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'invitationToken101', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('83ad4507-8c2f-4845-bb5a-7bfa8d55c7e4', '25Mckayla.Shields58@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=27', 'invitationToken789', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c1e50a2f-6530-4e0c-9a7e-13a87b451a68', '33Holden31@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=35', 'invitationToken112', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('749924a1-a8c0-43ef-b495-588f31719253', '49Kavon.Muller@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=51', 'invitationToken101', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('94272ae3-6089-4902-af5d-018a06192e35', '57Lupe_Brekke74@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=59', 'invitationToken123', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('e7883478-2c03-4f8b-b5b4-2d87e3e052fd', '65Candace_Durgan-Jenkins28@yahoo.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'invitationToken789', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('c71994f8-f7e9-470c-ace0-099ff39318de', '73Elza6@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', 'invitationToken112', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('d17677b9-4b06-42f9-acd5-d2e2271ac0b4', 'VisionaryGen', 'GAN', 'A stateoftheart model that transforms text into vivid imagery.', true);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('f3a68077-64ea-41aa-90a2-25547921aa14', 'ImageCrafter', 'Diffusion', 'A cuttingedge model that creates detailed images based on user input.', true);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('63123359-50b4-44a4-bba9-4e390146113b', 'VisionaryGen', 'VQVAE', 'A cuttingedge model that creates detailed images based on user input.', true);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('c594d47d-0ef8-4a95-b067-2f3c92a5e927', 'VisionaryGen', 'Transformer', 'A cuttingedge model that creates detailed images based on user input.', true);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('3a94b754-9bea-44df-95f9-9c4604acd8f4', 'DreamVision', 'Neural Network', 'A powerful model that converts descriptive text into highquality images.', false);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('21b39a7a-0ab1-4d7f-aac1-b3b802d7abd9', 'PixelPerfect', 'VQVAE', 'An innovative AI that produces stunning visuals from text prompts.', false);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('0943f20e-8c06-474c-9126-832183d848ea', 'DreamVision', 'Diffusion', 'An advanced AI designed to generate highresolution images from textual descriptions.', false);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('19883e8f-4667-43f1-953b-4580ec029afe', 'DreamVision', 'GAN', 'An innovative AI that produces stunning visuals from text prompts.', false);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('d7c9bd97-adf2-45ea-939b-16a4f2f1eb86', 'PixelPerfect', 'Neural Network', 'A powerful model that converts descriptive text into highquality images.', false);
INSERT INTO "Model" ("id", "name", "type", "description", "isActive") VALUES ('43b16a6c-d655-4439-8254-8f7931ad1ee1', 'PixelPerfect', 'GAN', 'A stateoftheart model that transforms text into vivid imagery.', true);

INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('7b26eded-157c-46b0-9e88-2d9dcd771c43', 'An abstract painting with vibrant colors', 'https://i.imgur.com/YfJQV5z.png?id=132', 42, 72, 'ultra', 'generated', 588, 'https://i.imgur.com/YfJQV5z.png?id=138', '94272ae3-6089-4902-af5d-018a06192e35', '19883e8f-4667-43f1-953b-4580ec029afe');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('0208074e-062d-4230-aaaf-01ed381b4644', 'A serene landscape with mountains and a river', 'https://i.imgur.com/YfJQV5z.png?id=141', 825, 341, 'ultra', 'failed', 446, 'https://i.imgur.com/YfJQV5z.png?id=147', 'c71994f8-f7e9-470c-ace0-099ff39318de', '3a94b754-9bea-44df-95f9-9c4604acd8f4');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('4951d1b9-d862-49c2-9ed1-9a28fac2cd79', 'A serene landscape with mountains and a river', 'https://i.imgur.com/YfJQV5z.png?id=150', 954, 34, 'ultra', 'generated', 23, 'https://i.imgur.com/YfJQV5z.png?id=156', '749924a1-a8c0-43ef-b495-588f31719253', '43b16a6c-d655-4439-8254-8f7931ad1ee1');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('f2b848d4-1350-4992-bfa2-143b3b53bc9a', 'An abstract painting with vibrant colors', 'https://i.imgur.com/YfJQV5z.png?id=159', 10, 406, 'high', 'failed', 20, 'https://i.imgur.com/YfJQV5z.png?id=165', 'c1e50a2f-6530-4e0c-9a7e-13a87b451a68', 'c594d47d-0ef8-4a95-b067-2f3c92a5e927');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('4a90f394-f187-4aca-a1af-70ff30b78913', 'A futuristic cityscape at night', 'https://i.imgur.com/YfJQV5z.png?id=168', 56, 393, 'standard', 'generated', 178, 'https://i.imgur.com/YfJQV5z.png?id=174', '83ad4507-8c2f-4845-bb5a-7bfa8d55c7e4', '0943f20e-8c06-474c-9126-832183d848ea');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('f19bae55-a77b-4801-9b2d-c265b4407df9', 'A closeup portrait of a lion', 'https://i.imgur.com/YfJQV5z.png?id=177', 662, 183, 'medium', 'pending', 719, 'https://i.imgur.com/YfJQV5z.png?id=183', '749924a1-a8c0-43ef-b495-588f31719253', '63123359-50b4-44a4-bba9-4e390146113b');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('7aa05354-57bb-476c-8cd9-92b768b8b0bb', 'A futuristic cityscape at night', 'https://i.imgur.com/YfJQV5z.png?id=186', 921, 333, 'medium', 'in_progress', 577, 'https://i.imgur.com/YfJQV5z.png?id=192', '89f45d33-31e8-4cd8-ae78-f4d0896ca8ce', '21b39a7a-0ab1-4d7f-aac1-b3b802d7abd9');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('80606eb7-d45b-4586-a2ca-32c8791517de', 'A serene landscape with mountains and a river', 'https://i.imgur.com/YfJQV5z.png?id=195', 224, 641, 'high', 'completed', 862, 'https://i.imgur.com/YfJQV5z.png?id=201', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '19883e8f-4667-43f1-953b-4580ec029afe');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('624cf6d8-30ce-42e1-a76b-c7abaae2860b', 'An abstract painting with vibrant colors', 'https://i.imgur.com/YfJQV5z.png?id=204', 312, 15, 'standard', 'in_progress', 277, 'https://i.imgur.com/YfJQV5z.png?id=210', 'd841ddc4-ad0e-4eb2-85a8-444ec8870c15', '0943f20e-8c06-474c-9126-832183d848ea');
INSERT INTO "Image" ("id", "prompt", "imageUrl", "width", "height", "quality", "status", "downloadCount", "shareUrl", "userId", "modelId") VALUES ('1236ddb8-c82a-4918-a9d9-1500457e1dfe', 'A serene landscape with mountains and a river', 'https://i.imgur.com/YfJQV5z.png?id=213', 602, 312, 'low', 'in_progress', 587, 'https://i.imgur.com/YfJQV5z.png?id=219', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c594d47d-0ef8-4a95-b067-2f3c92a5e927');

INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('cb948cf4-f84c-42e3-86a8-a5355fb0b409', 'https://i.imgur.com/YfJQV5z.png?id=221', 'completed', '4951d1b9-d862-49c2-9ed1-9a28fac2cd79');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('6a76571d-dad0-4b29-9d38-4d541316347e', 'https://i.imgur.com/YfJQV5z.png?id=224', 'queued', 'f2b848d4-1350-4992-bfa2-143b3b53bc9a');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('46d02eb2-78bc-4d53-a25b-df9c5b5b94de', 'https://i.imgur.com/YfJQV5z.png?id=227', 'queued', '4951d1b9-d862-49c2-9ed1-9a28fac2cd79');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('e8ec930f-d6c4-4deb-af9a-f22e5979006c', 'https://i.imgur.com/YfJQV5z.png?id=230', 'queued', 'f19bae55-a77b-4801-9b2d-c265b4407df9');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('4457f838-35a9-4fd6-9621-4f5544713c0f', 'https://i.imgur.com/YfJQV5z.png?id=233', 'in_progress', '80606eb7-d45b-4586-a2ca-32c8791517de');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('371b0bac-33d3-4307-9735-47ecc23c966e', 'https://i.imgur.com/YfJQV5z.png?id=236', 'failed', '624cf6d8-30ce-42e1-a76b-c7abaae2860b');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('952ede45-1a64-4d67-9d9e-8469fbbe11e4', 'https://i.imgur.com/YfJQV5z.png?id=239', 'completed', '0208074e-062d-4230-aaaf-01ed381b4644');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('9b98e629-3efe-4da6-b953-8e9896ede079', 'https://i.imgur.com/YfJQV5z.png?id=242', 'failed', 'f19bae55-a77b-4801-9b2d-c265b4407df9');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('b8e4b652-b863-448f-8558-a6dbf52006c2', 'https://i.imgur.com/YfJQV5z.png?id=245', 'queued', '7b26eded-157c-46b0-9e88-2d9dcd771c43');
INSERT INTO "ImageVariation" ("id", "variantImageUrl", "status", "originalImageId") VALUES ('07c52492-a9ee-439f-9bda-1e4302efc02b', 'https://i.imgur.com/YfJQV5z.png?id=248', 'in_progress', '80606eb7-d45b-4586-a2ca-32c8791517de');

INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('36736a91-1ef7-4cff-94a9-db08116ffd24', 'Resolution', '169', '80606eb7-d45b-4586-a2ca-32c8791517de');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('700a7d7f-52a3-4728-9475-9f161f73b024', 'Lighting', '169', '0208074e-062d-4230-aaaf-01ed381b4644');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('de37a2b6-8ccc-472c-9785-3d1af4b40bb5', 'Color Palette', 'Vibrant', '0208074e-062d-4230-aaaf-01ed381b4644');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('2c6a916d-a9b5-4ba7-b079-79015ffb0621', 'Color Palette', '169', '0208074e-062d-4230-aaaf-01ed381b4644');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('056d634f-5266-4b58-a95f-aff4786e67d3', 'Aspect Ratio', 'Soft Shadows', 'f19bae55-a77b-4801-9b2d-c265b4407df9');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('bf2b0a7e-286d-4fa1-a767-ac56686c5ef2', 'Lighting', 'Photorealistic', '4951d1b9-d862-49c2-9ed1-9a28fac2cd79');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('27e6bee3-4c36-40dc-bb78-faef08abc29b', 'Aspect Ratio', '169', 'f19bae55-a77b-4801-9b2d-c265b4407df9');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('0d7efed4-1769-4a79-bca2-b38044720b45', 'Lighting', '1920x1080', '7b26eded-157c-46b0-9e88-2d9dcd771c43');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('2686fd01-5497-458b-a549-c78a0bf9e9ab', 'Style', '169', '624cf6d8-30ce-42e1-a76b-c7abaae2860b');
INSERT INTO "Parameter" ("id", "name", "value", "imageId") VALUES ('4a690001-1960-492d-bc14-66de95b60762', 'Aspect Ratio', '1920x1080', '4a90f394-f187-4aca-a1af-70ff30b78913');

INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('137e9bbd-bc3a-44d3-98db-14d2469f3e80', 'Dreamscape Creations', 'Natureinspired images that bring the outdoors to life.', '47a0feed-3b02-471c-b64b-ea1df18264d4');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('4062fedf-952d-496f-8c33-f71c9b5560b3', 'Pixel Perfect Gallery', 'Natureinspired images that bring the outdoors to life.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('a98f66e6-636f-465a-bce7-dae1c0c132b5', 'Pixel Perfect Gallery', 'Natureinspired images that bring the outdoors to life.', '47a0feed-3b02-471c-b64b-ea1df18264d4');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('65f7870e-78b7-4980-839a-d2cf0ec9d9bd', 'Visionary Artworks', 'Highresolution portraits capturing the essence of humanity.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('232a9d2e-b4ab-4a7c-9640-49b844735187', 'Artistic Expressions', 'Abstract art pieces that challenge perception and reality.', 'c1e50a2f-6530-4e0c-9a7e-13a87b451a68');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('30465e04-1cbb-477f-9f11-962cb7cc4cb1', 'Visionary Artworks', 'Futuristic designs that explore the possibilities of tomorrow.', '89f45d33-31e8-4cd8-ae78-f4d0896ca8ce');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('d10c4d61-2e48-45f0-8f66-0ea5369d299c', 'Pixel Perfect Gallery', 'Natureinspired images that bring the outdoors to life.', 'c1e50a2f-6530-4e0c-9a7e-13a87b451a68');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('e90eabbf-fa22-4eaa-a457-e63cfcffe5f6', 'Dreamscape Creations', 'Futuristic designs that explore the possibilities of tomorrow.', '749924a1-a8c0-43ef-b495-588f31719253');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('7953b763-7e0d-4cfa-8bae-5a0064055e69', 'Imaginative Realms', 'Futuristic designs that explore the possibilities of tomorrow.', 'e7883478-2c03-4f8b-b5b4-2d87e3e052fd');
INSERT INTO "Collection" ("id", "name", "description", "userId") VALUES ('3e215ca2-4d23-447e-b8f8-8c3d2e83e92a', 'Visionary Artworks', 'Abstract art pieces that challenge perception and reality.', '749924a1-a8c0-43ef-b495-588f31719253');

INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('fc74850a-4e03-4a0f-ba61-b6855af19e24', '3e215ca2-4d23-447e-b8f8-8c3d2e83e92a', 'f19bae55-a77b-4801-9b2d-c265b4407df9');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('f075309d-25a7-49c4-abc1-b9828f56861e', '7953b763-7e0d-4cfa-8bae-5a0064055e69', '7b26eded-157c-46b0-9e88-2d9dcd771c43');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('b9926015-bfe6-4322-96ee-342417f8369e', '30465e04-1cbb-477f-9f11-962cb7cc4cb1', '7aa05354-57bb-476c-8cd9-92b768b8b0bb');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('f3e6b246-bac7-4cfb-9520-507fcad61d87', '3e215ca2-4d23-447e-b8f8-8c3d2e83e92a', '4a90f394-f187-4aca-a1af-70ff30b78913');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('1be2c6e6-cded-4439-a111-add89c4de227', '30465e04-1cbb-477f-9f11-962cb7cc4cb1', '1236ddb8-c82a-4918-a9d9-1500457e1dfe');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('4d3921aa-9e94-4df2-adc6-3d397d3f008c', '30465e04-1cbb-477f-9f11-962cb7cc4cb1', 'f2b848d4-1350-4992-bfa2-143b3b53bc9a');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('21d7116d-97ab-4836-ba0e-fc875b7055e0', '137e9bbd-bc3a-44d3-98db-14d2469f3e80', '4951d1b9-d862-49c2-9ed1-9a28fac2cd79');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('1df57053-a890-441a-8cc5-609b1e8a6d71', '30465e04-1cbb-477f-9f11-962cb7cc4cb1', '80606eb7-d45b-4586-a2ca-32c8791517de');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('c7d015d8-85f9-4d9f-927d-13df77ad8f05', 'e90eabbf-fa22-4eaa-a457-e63cfcffe5f6', '4a90f394-f187-4aca-a1af-70ff30b78913');
INSERT INTO "CollectionImage" ("id", "collectionId", "imageId") VALUES ('3e07a1ea-ba96-45ee-92f3-474e255b74a1', 'e90eabbf-fa22-4eaa-a457-e63cfcffe5f6', 'f2b848d4-1350-4992-bfa2-143b3b53bc9a');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
