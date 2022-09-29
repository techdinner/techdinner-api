import { HttpServerRoute } from "@interfaces/HttpServerRoute";
import { Methods } from "@interfaces/HttpServerRoute";
import { Controller } from "@interfaces/Controller";

export class AddRoutesBuilder {
	private httpServerRoute: HttpServerRoute;

	public httpMethod(httpMethod: Methods) {
		this.httpServerRoute.httpMethod = httpMethod;
		return this;
	}

	public endpoint(endpoint: string) {
		this.httpServerRoute.endpoint = endpoint;
		return this;
	}

	public controller(controller: Controller) {
		this.httpServerRoute.controller = controller;
		return this;
	}

	public build() {
		return this.httpServerRoute;
	}
}
