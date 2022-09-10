import { Router } from "express";

import { makeGetAllUserController } from "../../app/factories/users/GetAllUserFactory";
import { makeCreateUserController } from "../../app/factories/users/CreateUserFactory";
import { makeFindUserByIdController } from "../../app/factories/users/FindUserByIdFactory";
import { makeUpdateUserController } from "../../app/factories/users/UpdateUserFactory";
import { makeDeleteUserController } from "../../app/factories/users/DeleteUserFactory";

const UsersRoutes = Router();

UsersRoutes.get(
	"/",
	async (req, res) => await makeGetAllUserController().handle(req, res),
);
UsersRoutes.post(
	"/",
	async (req, res) => await makeCreateUserController().handle(req, res),
);
UsersRoutes.get(
	"/:id",
	async (req, res) => await makeFindUserByIdController().handle(req, res),
);
UsersRoutes.put(
	"/:id",
	async (req, res) => await makeUpdateUserController().handle(req, res),
);
UsersRoutes.delete(
	"/:id",
	async (req, res) => await makeDeleteUserController().handle(req, res),
);

export default UsersRoutes;
