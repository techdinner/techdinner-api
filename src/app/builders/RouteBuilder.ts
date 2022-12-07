import { HttpServerRoute } from "@/app/interfaces/HttpServerRoute";
import { Methods } from "@/app/enums/Methods";
import { Controller } from "@/app/interfaces/Controller";
import { Middleware } from "@/app/interfaces/Middleware";
import { AppServer } from "@/app/config/AppServer";

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
