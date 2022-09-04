import { Router } from "express";

const UsersRoutes = Router();

import { GetAllUserController } from "../../app/controllers/users/GetAllUserController";
import { CreateUserController } from "../../app/controllers/users/CreateUserController";
import { FindUserByIdController } from "../../app/controllers/users/FindUserByIdController";
import { UpdateUserController } from "../../app/controllers/users/UpdateUserController";
import { DeleteUserController } from "../../app/controllers/users/DeleteUserController";

UsersRoutes.get("/", new GetAllUserController().handle);
UsersRoutes.post("/", new CreateUserController().handle);
UsersRoutes.get("/:id", new FindUserByIdController().handle);
UsersRoutes.put("/:id", new UpdateUserController().handle);
UsersRoutes.delete("/:id", new DeleteUserController().handle);

export default UsersRoutes;
