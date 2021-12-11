import { getRepository } from "typeorm";
import { Image } from "../models";

export interface IImagePayload {
  imageName: string;
  content: string;
  userId: number;
  imagePath: string;
}

//Read all images from image table. Shows only 9 results per page.
export const getImages = async (page?: number): Promise<Array<Image>> => {
  const perPage = 9;
  const imageRepository = getRepository(Image);
  const builder = imageRepository.createQueryBuilder("image");
  builder.offset((page ? page : 1 - 1) * perPage).limit(perPage);
  return builder.getMany();
};

// Create a new image in image table
export const createImage = async (payload: IImagePayload): Promise<Image> => {
  const postRepository = getRepository(Image);
  const post = new Image();
  return postRepository.save({
    ...post,
    ...payload,
  });
};

// Read an image from image table
export const getImage = async (id: number): Promise<Image | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({ id: id });
  if (!image) return null;
  return image;
};

// Update an image in Image table
export const updateImage = async (
  id: number,
  imageLabel: string
): Promise<Image | null> => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({ id: id });
  if (!image) return null;
  imageRepository.merge(image, { imageLabel });
  return await imageRepository.save(image);
};
