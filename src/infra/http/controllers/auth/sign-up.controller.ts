import { type Controller } from "@/app/interfaces/controller.interface";
import { type SignUp } from "@/domain/use-cases/auth/sign-up";
import { type CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";
import { validate } from "../../requests/users/create-user.request";

export class SignUpController extends JsonResponse implements Controller {
  constructor(private readonly _signUp: SignUp) {
    super();
  }

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._signUp.execute({ ...request });

    return this.ok("Code sended!", response);
  }
}
