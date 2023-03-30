import { type HttpResponse } from "./http-response.interface";

export interface NextFunction {
  (err?: any): void;
  (deferToNext: "router"): void;
  (deferToNext: "route"): void;
}

export interface Middleware {
  handle(
    request: any,
    response?: any,
    next?: NextFunction,
  ): HttpResponse | undefined;
}
