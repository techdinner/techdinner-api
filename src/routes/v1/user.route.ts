import { RouteBuilder } from "@/app/builders/route.builder";
import { GET, POST, PATCH, DELETE } from "@/app/enums/methods.enum";

import { makeFindAllUserController } from "@/app/factories/users/find-all-user.factory";
import { makeCreateUserController } from "@/app/factories/users/create-user.factory";
import { makeFindUserByIdController } from "@/app/factories/users/find-user-by-id.factory";
import { makeUpdateUserController } from "@/app/factories/users/update-user.factory";
import { makeDeleteUserController } from "@/app/factories/users/delete-user.factory";

import { Authorization } from "@/infra/http/middlewares/auth.middleware";

RouteBuilder.route(GET, "/users", makeFindAllUserController(), [
  new Authorization(),
]).build();
RouteBuilder.route(POST, "/users", makeCreateUserController(), [
  new Authorization(),
]).build();
RouteBuilder.route(GET, "/users/:id", makeFindUserByIdController(), [
  new Authorization(),
]).build();
RouteBuilder.route(PATCH, "/users/:id", makeUpdateUserController(), [
  new Authorization(),
]).build();
RouteBuilder.route(DELETE, "/users/:id", makeDeleteUserController(), [
  new Authorization(),
]).build();
