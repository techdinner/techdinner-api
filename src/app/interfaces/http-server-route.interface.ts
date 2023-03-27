import type { Methods } from "@/app/enums/methods.enum";
import type { Controller } from "./controller.interface";
import type { Middleware } from "./middleware.interface";

export interface HttpServerRoute {
  endpoint: string;
  controller: Controller;
  httpMethod: Methods;
  middlewares: Middleware[];
}
