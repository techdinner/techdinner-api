import { Router } from "express";
const UsersRoutes = Router();

import { getAllUserController } from "../../useCases/users/GetAllUser";
import { createUserController } from "../../useCases/users/CreateUser";

UsersRoutes.get("/", getAllUserController.handle);
UsersRoutes.post("/", createUserController.handle);

export default UsersRoutes;
