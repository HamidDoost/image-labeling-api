import express from "express";
import HealthController from "../controllers/health.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new HealthController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;
