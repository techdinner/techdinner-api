import type { HttpServerRoute } from "@/app/interfaces/http-server-route.interface";
import type { Methods } from "@/app/enums/methods.enum";
import type { Controller } from "@/app/interfaces/controller.interface";
import type { Middleware } from "@/app/interfaces/middleware.interface";
import { AppServer } from "@/app/config/app-server";

export class RouteBuilder {
  private readonly _httpServerRoute: HttpServerRoute;

  constructor(
    httpMethod: Methods,
    endpoint: string,
    controller: Controller,
    middlewares: Middleware[] = [],
  ) {
    this._httpServerRoute = {
      httpMethod,
      endpoint,
      controller,
      middlewares,
    };
  }

  static route(
    httpMethod: Methods,
    endpoint: string,
    controller: Controller,
    middlewares?: Middleware[],
  ): RouteBuilder {
    return new RouteBuilder(httpMethod, endpoint, controller, middlewares);
  }

  build(): void {
    AppServer.server.addRoute(this._httpServerRoute);
  }
}
