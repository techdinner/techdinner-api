import express, {
  json,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import { type Controller } from "@/app/interfaces/controller.interface";
import { type HttpServer } from "@/app/interfaces/http-server.interface";
import { type HttpServerRoute } from "@/app/interfaces/http-server-route.interface";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";

import "@/database/data-source";

type MiddlewaresParam = Array<
  (
    request: any,
    response?: any,
    next?: NextFunction | undefined,
  ) => HttpResponse | undefined
>;

export class ExpressHttpServerAdapter implements HttpServer {
  private readonly _app = express();
  private readonly _prefix = "/api/v1";

  constructor() {
    this._app.use(json());
    this._app.use(cors());
  }

  private _adapterController(controller: Controller) {
    return async (req: Request, res: Response) => {
      const request = {
        ...(req.body || {}),
        ...(req.params || {}),
      };

      const httpResponse: HttpResponse = await controller.handle(request);

      res.status(httpResponse.statusCode).json(httpResponse.body);
    };
  }

  private _adapterMiddleware(...middleware: MiddlewaresParam) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (middleware.length) {
        const request = {
          ...(req.body || {}),
          ...(req.params || {}),
          ...(req.headers || {}),
        };

        const httpResponse: HttpResponse | undefined = middleware[0](
          request,
          res,
          next,
        );

        !!httpResponse &&
          res.status(httpResponse.statusCode).json(httpResponse.body);
      } else {
        next();
      }
    };
  }

  startServer(port: number): void {
    this._app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}.`);
    });
  }

  addRoute(route: HttpServerRoute): void {
    const middlewaresHandles = route.middlewares.map(({ handle }) => handle);

    this._app[route.httpMethod](
      `${this._prefix}${route.endpoint}`,
      this._adapterMiddleware(...middlewaresHandles),
      this._adapterController(route.controller),
    );
  }
}
