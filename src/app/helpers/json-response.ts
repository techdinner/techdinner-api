import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { HttpResponseBuilder } from "../builders/http-response.builder";
import { HttpError } from "./http-error";

export class JsonResponse {
  ok(message: string | null = null, data: any = null): HttpResponse {
    return HttpResponseBuilder.statusCode(200).body({ message, data }).build();
  }

  created(message: string | null = null, data: any = null): HttpResponse {
    return HttpResponseBuilder.statusCode(201).body({ message, data }).build();
  }

  fail(error: HttpError): HttpResponse {
    let message = "Internal server error.";
    let code = 500;

    if (error instanceof HttpError) {
      message = error.message;
      if (error.status) code = error.status;
    } else {
      message = error;
    }

    return HttpResponseBuilder.statusCode(code).body({ message }).build();
  }
}
