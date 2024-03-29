import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { Login } from "@/domain/usecases/auth/login";
import { LoginDTO } from "@/app/dtos/auth/login.dto";
import { HttpResponse } from "@/app/interfaces/http-response.interface";
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
