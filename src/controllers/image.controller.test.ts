import ImageController from "./image.controller";
import * as ImageRepository from "../repositories/image.repository";
import {
  generateImagePayload,
  generateImageData,
} from "../../test/utils/generate";

afterEach(() => {
  jest.resetAllMocks();
});

describe("ImageController", () => {
  describe("createComment", () => {
    test("should add comment to the database", async () => {
      const payload = generateImagePayload();
      const imageData = generateImageData(payload);
      const spy = jest
        .spyOn(ImageRepository, "createImage")
        .mockResolvedValueOnce(imageData);
      const controller = new ImageController();
      const image = await controller.createImage(payload);
      expect(image).toMatchObject(payload);
      expect(image).toEqual(imageData);
      expect(spy).toHaveBeenCalledWith(payload);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe("getImage", () => {
    test("should return image from the database", async () => {
      const id = 1;
      const imageData = generateImageData({ id });
      const spy = jest
        .spyOn(ImageRepository, "getImage")
        .mockResolvedValueOnce(imageData);
      const controller = new ImageController();
      const image = await controller.getImage(id.toString());
      expect(image).toEqual(imageData);
      expect(image?.id).toBe(id);
      expect(spy).toHaveBeenCalledWith(id);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test("should return null if comment not found", async () => {
      const id = 1;
      const spy = jest
        .spyOn(ImageRepository, "getImage")
        .mockResolvedValueOnce(null);
      const controller = new ImageController();
      const image = await controller.getImage(id.toString());
      expect(image).toBeNull();
      expect(spy).toHaveBeenCalledWith(id);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
