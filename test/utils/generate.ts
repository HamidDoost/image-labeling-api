import faker from "faker";
import { User, Image } from "../../src/models";
import { IImagePayload } from "../../src/repositories/image.repository";

export function generateUserData(overide = {}) {
  return {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    images: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    role: faker.lorem.word(),
    hashPassword: function () {},
    checkIfUnencryptedPasswordIsValid: function () {
      return true;
    },
    ...overide,
  };
}

export function generateUsersData(n: number = 1) {
  return Array.from(
    {
      length: n,
    },
    (_, i) => {
      return generateUserData();
    }
  );
}

export function generateUserPayload() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    createdAt: new Date(),
    updatedAt: new Date(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    role: faker.lorem.word(),
  };
}

export function generateImageData(overide = {}): Image {
  return {
    id: faker.datatype.number(),
    content: faker.lorem.paragraph(),
    imageLabel: faker.lorem.word(),
    imageName: faker.lorem.sentence(),
    imagePath: faker.lorem.sentence(),
    userId: faker.datatype.number(),
    user: new User(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide,
  };
}

export function generateImagesData(n: number = 1, overide = {}) {
  return Array.from(
    {
      length: n,
    },
    (_, i) => {
      return generateImageData(overide);
    }
  );
}

export function generateImagePayload(): IImagePayload {
  return {
    imageName: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    userId: faker.datatype.number(),
    imagePath: faker.lorem.sentence(),
  };
}
