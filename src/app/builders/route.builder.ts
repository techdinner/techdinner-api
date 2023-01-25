import { HttpServerRoute } from "@/app/interfaces/http-server-route.interface";
import { Methods } from "@/app/enums/methods.enum";
import { Controller } from "@/app/interfaces/controller.interface";
import { Middleware } from "@/app/interfaces/middleware.interface";
import { AppServer } from "@/app/config/app-server";

export class RouteBuilder {
  private readonly _httpServerRoute: HttpServerRoute;

  constructor(
    httpMethod: Methods,
    endpoint: string,
    controller: Controller,
    middlewares?: Middleware[],
  ) {
    this._httpServerRoute = {
      httpMethod,
      endpoint,
      controller,
      middlewares,
    };
  }

  public static route(
    httpMethod: Methods,
    endpoint: string,
    controller: Controller,
    middlewares?: Middleware[],
  ): RouteBuilder {
    return new RouteBuilder(httpMethod, endpoint, controller, middlewares);
  }

  public build(): void {
    return AppServer.server.addRoute(this._httpServerRoute);
  }
}
