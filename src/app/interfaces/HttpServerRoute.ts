import { Methods } from "@/app/enums/Methods";
import { Controller } from "./Controller";
import { Middleware } from "./Middleware";

export interface HttpServerRoute {
  endpoint: string;
  controller: Controller;
  httpMethod: Methods;
  middlewares?: Middleware[];
}
