import { Image } from "../models";
import {
  getImages,
  IImagePayload,
  createImage,
  getImage,
  updateImage,
} from "../repositories/image.repository";

export default class ImageController {
  //Define getImages function for ImageController class
  public async getImages(): Promise<Array<Image>> {
    return getImages();
  }

  //Define createImages function for ImageController class
  public async createImage(body: IImagePayload): Promise<Image> {
    return createImage(body);
  }

  //Define getImages function for ImageController class
  public async getImage(id: string): Promise<Image | null> {
    return getImage(Number(id));
  }

  //Define updateImage functions for ImageController class
  public async updateImage(
    id: string,
    imageLabel: string
  ): Promise<Image | null> {
    return updateImage(Number(id), imageLabel);
  }
}
