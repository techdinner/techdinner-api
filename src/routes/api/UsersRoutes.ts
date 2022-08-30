import { Router } from "express";
const UsersRoutes = Router();

import { getAllUserController } from "../../app/useCases/users/GetAllUser";
import { createUserController } from "../../app/useCases/users/CreateUser";

UsersRoutes.get("/", getAllUserController.handle);
UsersRoutes.post("/", createUserController.handle);

export default UsersRoutes;
