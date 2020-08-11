import express from "express";
import multer from "multer";
import storageOptions from "./config/upload";
import * as UserController from "./controllers/UserController";
import * as FoundController from "./controllers/FoundController";
import * as LostController from "./controllers/LostController";
const routes = express.Router();
const upload = multer(storageOptions);

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);
routes.get("/users/:userId/show", UserController.show);

routes.post("/items/founds", upload.single("filename"), FoundController.store);
routes.get("/items/founds", FoundController.index);
routes.get("/items/founds/:itemId/show", FoundController.show);

routes.post("/items/losts", upload.single("filename"), LostController.store);
routes.get("/items/losts", LostController.index);
routes.get("/items/losts/:itemId/show", LostController.show);

export default routes;
