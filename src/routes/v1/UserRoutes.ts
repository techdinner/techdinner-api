import { AppServer } from "@config/AppServer";
import { Methods } from "@interfaces/HttpServerRoute";

import { makeFindAllUserController } from "@factories/users/FindAllUserFactory";
import { makeCreateUserController } from "@factories/users/CreateUserFactory";
import { makeFindUserByIdController } from "@factories/users/FindUserByIdFactory";
import { makeUpdateUserController } from "@factories/users/UpdateUserFactory";
import { makeDeleteUserController } from "@factories/users/DeleteUserFactory";

AppServer.server.addRoute({
	httpMethod: Methods.GET,
	endpoint: "/users",
	controller: makeFindAllUserController(),
});

AppServer.server.addRoute({
	httpMethod: Methods.POST,
	endpoint: "/users",
	controller: makeCreateUserController(),
});

AppServer.server.addRoute({
	httpMethod: Methods.GET,
	endpoint: "/users/:id",
	controller: makeFindUserByIdController(),
});

AppServer.server.addRoute({
	httpMethod: Methods.PUT,
	endpoint: "/users/:id",
	controller: makeUpdateUserController(),
});

AppServer.server.addRoute({
	httpMethod: Methods.DELETE,
	endpoint: "/users/:id",
	controller: makeDeleteUserController(),
});
