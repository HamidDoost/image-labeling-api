import * as ImageRepository from "./image.repository";
import { getRepository } from "typeorm";
import { mocked } from "ts-jest/utils";
import { generateImageData } from "../../test/utils/generate";

jest.mock("typeorm");

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}));
beforeEach(() => {
  mockedGetRepo.find.mockClear();
  mockedGetRepo.findOne.mockClear();
  mockedGetRepo.save.mockClear();
});

describe("ImageRepository", () => {
  describe("getImage", () => {
    test("should return image from the database", async () => {
      const id = 1;
      const imageData = generateImageData({ id });
      mockedGetRepo.findOne.mockResolvedValue(imageData);
      const image = await ImageRepository.getImage(id);
      expect(image).toEqual(imageData);
      expect(image?.id).toBe(id);
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id });
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1);
    });

    test("should return null if image not found", async () => {
      const id = 1;
      mockedGetRepo.findOne.mockResolvedValue(null);
      const image = await ImageRepository.getImage(id);
      expect(image).toBeNull();
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id });
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
