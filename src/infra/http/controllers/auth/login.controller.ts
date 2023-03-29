import type { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import type { Login } from "@/domain/use-cases/auth/login";
import type { LoginDTO } from "@/app/dtos/auth/login.dto";
import type { HttpResponse } from "@/app/interfaces/http-response.interface";
import { validate } from "../../requests/auth/login.request";

export class LoginController implements Controller {
  constructor(private readonly _login: Login) {}

  async handle(request: LoginDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._login.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "Code sended!", userId: response })
      .build();
  }
}
