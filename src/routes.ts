import { Router } from "express";
import { UserController } from "./controllers/UsersController";

const routes = Router();

routes.get("/users", new UserController().getAll);

export default routes;
