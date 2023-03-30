import { type Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { type SignUp } from "@/domain/use-cases/auth/sign-up";
import { type CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { validate } from "../../requests/users/create-user.request";

export class SignUpController implements Controller {
  constructor(private readonly _signUp: SignUp) {}

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._signUp.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "Code sended!", data: response })
      .build();
  }
}
