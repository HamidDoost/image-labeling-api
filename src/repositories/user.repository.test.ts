import * as UserRepository from "./user.repository";
import { getRepository } from "typeorm";
import { mocked } from "jest-mock";
import { generateUserData } from "../../test/utils/generate";

jest.mock("typeorm");

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}));
beforeEach(() => {
  mockedGetRepo.find.mockClear();
  mockedGetRepo.findOne.mockClear();
  mockedGetRepo.save.mockClear();
});

describe("UserRepository", () => {
  describe("getUsers", () => {
    test("should return empty array", async () => {
      const users = await UserRepository.getUsers();
      expect(users).toEqual([]);
      expect(mockedGetRepo.createQueryBuilder).toHaveBeenCalledTimes(1);
    });
  });

  describe("getUser", () => {
    test("should return user from the database", async () => {
      const id = 1;
      const userData = generateUserData({ id });
      mockedGetRepo.findOne.mockResolvedValue(userData);
      const user = await UserRepository.getUser(id);
      expect(user).toEqual(userData);
      expect(user?.id).toBe(id);
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id });
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1);
    });

    test("should return null if user not found", async () => {
      const id = 1;
      mockedGetRepo.findOne.mockResolvedValue(null);
      const user = await UserRepository.getUser(id);
      expect(user).toBeNull();
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({ id });
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1);
    });
  });
});
