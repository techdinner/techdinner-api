import { RouteBuilder } from "@/app/builders/RouteBuilder";
import { GET, POST, PATCH, DELETE } from "@/app/enums/Methods";

import { makeFindAllUserController } from "@/app/factories/users/FindAllUserFactory";
import { makeCreateUserController } from "@/app/factories/users/CreateUserFactory";
import { makeFindUserByIdController } from "@/app/factories/users/FindUserByIdFactory";
import { makeUpdateUserController } from "@/app/factories/users/UpdateUserFactory";
import { makeDeleteUserController } from "@/app/factories/users/DeleteUserFactory";

RouteBuilder.route(GET, "/users", makeFindAllUserController()).build();
RouteBuilder.route(POST, "/users", makeCreateUserController()).build();
RouteBuilder.route(GET, "/users/:id", makeFindUserByIdController()).build();
RouteBuilder.route(PATCH, "/users/:id", makeUpdateUserController()).build();
RouteBuilder.route(DELETE, "/users/:id", makeDeleteUserController()).build();
