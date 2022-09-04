import { Router } from "express";

const UsersRoutes = Router();

import { getAllUserController } from "../../app/usecases/users/GetAllUser";
import { createUserController } from "../../app/usecases/users/CreateUser";
import { findUserByIdController } from "../../app/usecases/users/FindUserById";
import { updateUserController } from "../../app/usecases/users/UpdateUser";
import { deleteUserController } from "../../app/usecases/users/DeleteUser";

UsersRoutes.get("/", (req, res) => getAllUserController.handle(req, res));
UsersRoutes.post("/", (req, res) => createUserController.handle(req, res));
UsersRoutes.get("/:id", (req, res) => findUserByIdController.handle(req, res));
UsersRoutes.put("/:id", (req, res) => updateUserController.handle(req, res));
UsersRoutes.delete("/:id", (req, res) => deleteUserController.handle(req, res));

export default UsersRoutes;
