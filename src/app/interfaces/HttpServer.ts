import { HttpServerRoute } from "./HttpServerRoute";

export interface HttpServer {
  startServer(port: number): void;
  addRoute(route: HttpServerRoute): void;
}
