import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { CreateUser } from "@/domain/usecases/users/create-user";
import { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { HttpResponse } from "@/app/interfaces/http-response.interface";
import { validate } from "../../requests/users/create-user.request";

export class CreateUserController implements Controller {
  constructor(private readonly _createUser: CreateUser) {}

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    validate(request);

    await this._createUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(201)
      .body({ message: "User created!" })
      .build();
  }
}
