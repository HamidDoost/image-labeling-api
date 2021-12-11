import express from "express";
import { NotFoundError } from "../errors/not.found.error";
import ImageController from "../controllers/image.controller";
import fileUpload from "express-fileupload";
import { checkJwt } from "../middlewares/checkJwt";
import { InternalServerError } from "../errors/internal.server.error";

const router = express.Router();

//Get list of images by pagination with limit of 9 per page
router.get("/", checkJwt, async (_req, res) => {
  const controller = new ImageController();
  const response = await controller.getImages();
  return res.send(response);
});

//Assign a label to an image by ID
router.put("/label/:id", checkJwt, async (req, res) => {
  const controller = new ImageController();
  const response = await controller.updateImage(
    req.params.id,
    req.body.imageLabel
  );
  return res.send(response);
});

//Get an image by ID
router.get("/:id", checkJwt, async (req, res) => {
  const controller = new ImageController();
  const response = await controller.getImage(req.params.id);
  if (!response) {
    throw new NotFoundError();
  }
  return res.send(response);
});

//Upload an image
router.post("/upload", checkJwt, async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (imageFile) to retrieve the uploaded file
      let imageFile = req.files.imageFile as fileUpload.UploadedFile;
      const id = res.locals.jwtPayload.userId;

      //Use the mv() method to place the file in upload directory
      const path = __dirname + "/uploads/" + imageFile.name;
      imageFile.mv(path);

      const controller = new ImageController();
      await controller.createImage({
        ...req.body,
        imagePath: path,
        userId: id,
      });
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: imageFile.name,
          mimetype: imageFile.mimetype,
          size: imageFile.size,
        },
      });
    }
  } catch (err) {
    throw new InternalServerError();
  }
});

export default router;
