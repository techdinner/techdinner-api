import { Router } from "express";
const UsersRoutes = Router();

import { GetAllUserController } from "../../controllers/users/GetAllUserController";
import { CreatUserController } from "../../controllers/users/CreateUserController";

UsersRoutes.get("/", new GetAllUserController().handle);
UsersRoutes.post("/", new CreatUserController().handle);

export default UsersRoutes;
