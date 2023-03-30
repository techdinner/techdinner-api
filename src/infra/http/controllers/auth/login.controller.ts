import { type Controller } from "@/app/interfaces/controller.interface";
import { type Login } from "@/domain/use-cases/auth/login";
import { type LoginDTO } from "@/app/dtos/auth/login.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";
import { validate } from "../../requests/auth/login.request";

export class LoginController extends JsonResponse implements Controller {
  constructor(private readonly _login: Login) {
    super();
  }

  async handle(request: LoginDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._login.execute({ ...request });

    return this.ok("Code sended!", response);
  }
}
