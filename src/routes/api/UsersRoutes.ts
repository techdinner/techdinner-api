import { Router } from "express";
const UsersRoutes = Router();

import { GetAllUsersController } from "../../controllers/users/GetAllUsersController";

UsersRoutes.get("/", new GetAllUsersController().handle);

export default UsersRoutes;
