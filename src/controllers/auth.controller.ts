import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../models/user";
import config from "../config/auth.config";

export default class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if username and password are set

    let { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send();
    }

    //Get user from database
    const userRepository = getRepository(User);
    let user: User = new User();
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      res.status(401).send();
    }

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    //Sign JWT, valid for 2 hours
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      config.jwtSecret,
      { expiresIn: "2h" }
    );

    //Send the jwt in the response
    res.send(token);
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    const userRepository = getRepository(User);
    let user: User = new User();
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    // Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send({ message: "Old password is not correct." });
      return;
    }

    //Hash the new password and save
    user.password = newPassword;
    user.hashPassword();
    userRepository.save(user);

    res.status(200).send({
      message: "Password changed successfully.",
    });
  };
}
