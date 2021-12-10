import express from "express";
import HealthRouter from "./health.router";

const router = express.Router();

router.use("/health", HealthRouter);

export default router;
