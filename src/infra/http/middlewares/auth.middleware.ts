import { verify } from "jsonwebtoken";
import { auth } from "@/config/auth";
import {
  type Middleware,
  type NextFunction,
} from "@/app/interfaces/middleware.interface";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";

interface AuthRequest {
  authorization: string;
}

type JwtPayload = Record<string, unknown>;

interface AuthResponse extends HttpResponse {
  locals: {
    jwtPayload: string | JwtPayload;
  };
}

export class Authorization extends JsonResponse implements Middleware {
  handle(
    request: AuthRequest,
    response: AuthResponse,
    next: NextFunction,
  ): HttpResponse | undefined | any {
    const { authorization } = request;

    if (!authorization) {
      return this.unauthorized();
    }

    const [, token] = authorization.split(" ");

    try {
      const jwtPayload = verify(token, auth.secret);

      response.locals.jwtPayload = jwtPayload;

      next();
    } catch (error) {
      return this.unauthorized();
    }
  }
}
