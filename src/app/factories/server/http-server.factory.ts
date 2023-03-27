import type { HttpServer } from "@/app/interfaces/http-server.interface";

export class HttpServerFactory {
  constructor(private readonly _httpServer: HttpServer) {}

  get server(): HttpServer {
    return this._httpServer;
  }
}
