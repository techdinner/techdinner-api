import { HttpServerRoute } from "@/app/interfaces/HttpServerRoute";
import { Methods } from "@/app/enums/Methods";
import { Controller } from "@/app/interfaces/Controller";
// import { Middleware } from "@/app/interfaces/Middleware";

export class RouteBuilder {
  private readonly _httpServerRoute: HttpServerRoute;

  constructor(endpoint: string, httpMethod: Methods, controller: Controller) {
    this._httpServerRoute = {
      endpoint,
      httpMethod,
      controller,
    };
  }

  // public httpMethod(httpMethod: Methods) {
  // 	this.httpServerRoute.httpMethod = httpMethod;
  // 	return this;
  // }

  // public endpoint(endpoint: string) {
  // 	this.httpServerRoute.endpoint = endpoint;
  // 	return this;
  // }

  // public controller(controller: Controller) {
  // 	this.httpServerRoute.controller = controller;
  // 	return this;
  // }

  // public middlewares(middlewares: Middleware[]) {
  //   this.httpServerRoute.middlewares = middlewares;
  //   return this;
  // }

  // public build() {
  //   return this.httpServerRoute;
  // }
}
