import { Controller } from "./Controller";

enum methods {
	post,
	get,
	put,
	delete,
}

export interface HttpServerRoute {
	endpoint: string;
	controller: Controller;
	httpMethod: methods;
	middlewares: Middlewares[];
}
