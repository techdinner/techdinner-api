import { AppServer } from "@/app/config/AppServer";
import { Methods } from "@/app/enums/Methods";

import { makeFindAllUserController } from "@/app/factories/users/FindAllUserFactory";
import { makeCreateUserController } from "@/app/factories/users/CreateUserFactory";
import { makeFindUserByIdController } from "@/app/factories/users/FindUserByIdFactory";
import { makeUpdateUserController } from "@/app/factories/users/UpdateUserFactory";
import { makeDeleteUserController } from "@/app/factories/users/DeleteUserFactory";

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
