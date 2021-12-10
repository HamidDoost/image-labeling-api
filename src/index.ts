import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";

//Adding server on port 3000
const PORT = process.env.PORT || 3000;
const app: Application = express();

//Adding body parser middleware
app.use(express.json());
app.use(express.urlencoded());
//Adding request logging middleware
app.use(morgan("dev"));

app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
