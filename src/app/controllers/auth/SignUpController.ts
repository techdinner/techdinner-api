import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { SignUp } from "@/domain/usecases/auth/SignUp";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class SignUpController implements Controller {
  constructor(private readonly _signUp: SignUp) {}

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    const response = await this._signUp.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "Code sended!", userId: response })
      .build();
  }
}
