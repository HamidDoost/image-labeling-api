import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";
import dbConfig from "./config/database";

//Adding server on port 3000
const PORT = process.env.PORT || 3000;
const app: Application = express();

//Adding body parser middleware
app.use(express.json());
app.use(express.urlencoded());
//Adding request logging middleware
app.use(morgan("dev"));

app.use(Router);

//Adding database connection
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
