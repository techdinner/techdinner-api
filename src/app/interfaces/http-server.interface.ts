import { type HttpServerRoute } from "./http-server-route.interface";

export interface HttpServer {
  startServer(port: number): void;
  addRoute(route: HttpServerRoute): void;
}
