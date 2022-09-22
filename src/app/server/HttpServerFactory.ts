import { HttpServer } from "../interfaces/HttpServer";

export class HttpServerFactory {
	constructor(private readonly httpServer: HttpServer) {}

	get server() {
		return this.httpServer;
	}
}
