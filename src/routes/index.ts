import express from "express";
import HealthRouter from "./health.router";
import UserRouter from "./user.router";
import ImageRouter from "./image.router";
import AuthRouter from "./auth.router";

const router = express.Router();

router.use("/health", HealthRouter);
router.use("/users", UserRouter);
router.use("/images", ImageRouter);
router.use("/auth", AuthRouter);

export default router;
