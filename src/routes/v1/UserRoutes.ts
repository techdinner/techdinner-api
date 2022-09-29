import { AppServer } from "@config/AppServer";
import { Methods } from "@interfaces/HttpServerRoute";

import { makeFindAllUserController } from "@factories/users/FindAllUserFactory";
import { makeCreateUserController } from "@factories/users/CreateUserFactory";
import { makeFindUserByIdController } from "@factories/users/FindUserByIdFactory";
import { makeUpdateUserController } from "@factories/users/UpdateUserFactory";
import { makeDeleteUserController } from "@factories/users/DeleteUserFactory";

AppServer.server.addRoute({
	httpMethod: Methods.GET,
	endpoint: "/api/v1/users",
	controller: makeFindAllUserController(),
});
