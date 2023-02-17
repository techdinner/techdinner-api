import { Methods } from "@/app/enums/methods.enum";
import { Controller } from "./controller.interface";
import { Middleware } from "./middleware.interface";

export interface HttpServerRoute {
  endpoint: string;
  controller: Controller;
  httpMethod: Methods;
  middlewares: Middleware[];
}
