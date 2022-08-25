import { Router } from "express";
const UsersRoutes = Router();

import { GetAllUserController } from "../../controllers/users/GetAllUserController";

UsersRoutes.get("/", new GetAllUserController().handle);

export default UsersRoutes;
