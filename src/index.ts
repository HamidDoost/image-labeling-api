import "reflect-metadata";
import express, { Application } from "express";

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
