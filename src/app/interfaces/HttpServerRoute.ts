import { Controller } from "./Controller";
import { Middleware } from "./Middleware";

export enum Methods {
	POST = "post",
	GET = "get",
	PUT = "put",
  PATCH = "patch",
	DELETE = "delete",
}

export interface HttpServerRoute {
	endpoint: string;
	controller: Controller;
	httpMethod: Methods;
	middlewares?: Middleware[];
}
