import { verify } from "jsonwebtoken";
import { auth } from "@/config/auth";
import {
  Middleware,
  NextFunction,
} from "@/app/interfaces/middleware.interface";
import { HttpResponse } from "@/app/interfaces/http-response.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";

interface AuthRequest {
  authorization: string;
}

interface JwtPayload {
  [key: string]: any;
}

interface AuthResponse extends HttpResponse {
  locals: {
    jwtPayload: string | JwtPayload;
  };
}

export class Authorization implements Middleware {
  handle(
    request: AuthRequest,
    response: AuthResponse,
    next: NextFunction,
  ): HttpResponse | undefined | any {
    const { authorization } = request;

    if (!authorization) {
      return HttpResponseBuilder.statusCode(401)
        .body({ message: "Unauthorized!" })
        .build();
    }

    const [, token] = authorization.split(" ");

    try {
      const jwtPayload = verify(token, auth.secret);

      response.locals.jwtPayload = jwtPayload;

      next();
    } catch (error) {
      return HttpResponseBuilder.statusCode(401)
        .body({ message: "Unauthorized!" })
        .build();
    }
  }
}
