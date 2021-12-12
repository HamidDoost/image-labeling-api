import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { checkJwt } from "../middlewares/checkJwt";

const router = Router();

//Login route
router.post("/login", AuthController.login);

//Change user's password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
