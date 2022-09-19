import { HttpServerRoute } from "./HttpServerRoute";

export interface HttpServer {
	startServer(port: number): Promise<void>;
	addRoute(route: HttpServerRoute): Promise<void>;
}
