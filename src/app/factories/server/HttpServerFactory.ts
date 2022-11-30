import { HttpServer } from "@/app/interfaces/HttpServer";

export class HttpServerFactory {
  constructor(private readonly _httpServer: HttpServer) {}

  get server(): HttpServer {
    return this._httpServer;
  }
}
