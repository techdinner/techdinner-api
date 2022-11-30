import express, { Request, Response, json } from "express";
import cors from "cors";
import { Controller } from "@/app/interfaces/Controller";
import { HttpServer } from "@/app/interfaces/HttpServer";
import { HttpServerRoute } from "@/app/interfaces/HttpServerRoute";

export class ExpressHttpServerAdapter implements HttpServer {
  private readonly _app = express();
  private readonly _prefix = "/api/v1";

  private _adapterController(controller: Controller) {
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

  startServer(port: number): void {
    this._app.use(json());
    this._app.use(cors());
    this._app.listen(port, () =>
      console.log(`✅ Server is running on port ${port}.`),
    );
  }

  addRoute(route: HttpServerRoute): void {
    this._app[route.httpMethod](
      `${this._prefix}${route.endpoint}`,
      this._adapterController(route.controller),
    );
  }
}
