import { getRepository } from "typeorm";
import { User } from "../models";

export interface IUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

//Get all users. Shows only 9 results per page.
export const getUsers = async (page?: number): Promise<Array<User>> => {
  const perPage = 9;
  const userRepository = getRepository(User);
  const builder = userRepository.createQueryBuilder("user");
  builder.offset((page ? page : 1 - 1) * perPage).limit(perPage);
  return builder.getMany();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  user.password = payload.password;
  user.hashPassword();
  return userRepository.save({
    ...user,
    ...payload,
    password: user.password,
  });
};

export const getUser = async (id: number): Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ id: id });
  if (!user) return null;
  return user;
};
