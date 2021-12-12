import express, { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request.validation.error";
import { NotFoundError } from "../errors/not.found.error";
import UserController from "../controllers/user.controller";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = express.Router();

//Get list of users by pagination with limit of 9 per page
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUsers(req.query.page as any);
    return res.send(response);
  }
);

//Create a new user
router.post(
  "/",
  [
    checkJwt,
    checkRole(["ADMIN"]),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const controller = new UserController();
    const response = await controller.createUser(req.body);
    return res.send(response);
  }
);

//Get a user by ID
router.get(
  "/:id",
  [checkJwt, checkRole(["ADMIN"])],
  async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUser(req.params.id);
    if (!response) {
      throw new NotFoundError();
    }

    return res.send(response);
  }
);

export default router;
