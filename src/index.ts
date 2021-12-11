import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import Router from "./routes";
import dbConfig from "./config/database";
import fileUpload from "express-fileupload";
import _ from "lodash";
import { errorHandler } from "./middlewares/errorHandler";
import { NotFoundError } from "./errors/not.found.error";

const PORT = process.env.PORT || 3000;
const app: Application = express();

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

app.use(Router);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

// set port, listen for requests
createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
