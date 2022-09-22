import express, { Request, Response } from "express";
import cors from "cors";
import { Controller } from "../../app/interfaces/Controller";
import { HttpServer } from "../../app/interfaces/HttpServer";
import { HttpServerRoute } from "../../app/interfaces/HttpServerRoute";

export class ExpressHttpServerAdapter implements HttpServer {
	private readonly app = express();

	private adapterController(controller: Controller) {
		return async (req: Request, res: Response) => {
			const request = {
				...(req.body || {}),
				...(req.params || {}),
			};

			const httpResponse = await controller.handle(request);

			if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
				res.status(httpResponse.statusCode).json(httpResponse.body);
			} else {
				res.status(httpResponse.statusCode).json({
					error: httpResponse.body.message,
				});
			}
		};
	}

	async startServer(port: number): Promise<void> {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.listen(port, () =>
			console.log(`✅ Server is running on port ${port}.`),
		);
	}

	async addRoute(route: HttpServerRoute): Promise<void> {
		this.app[route.httpMethod](
			route.endpoint,
			this.adapterController(route.controller),
		);
	}
}
