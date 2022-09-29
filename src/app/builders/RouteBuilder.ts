import { HttpServerRoute } from "@interfaces/HttpServerRoute";
import { Methods } from "@interfaces/HttpServerRoute";
import { Controller } from "@interfaces/Controller";
import { Middleware } from "@interfaces/Middleware";

export class RouteBuilder {
	private httpServerRoute: HttpServerRoute;

	constructor(endpoint: string, httpMethod: Methods, controller: Controller) {
		this.httpServerRoute = {
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

	public middlewares(middlewares: Middleware[]) {
		this.httpServerRoute.middlewares = middlewares;
		return this;
	}

	public build() {
		return this.httpServerRoute;
	}
}
