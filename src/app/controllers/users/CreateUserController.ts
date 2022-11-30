import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { CreateUser } from "@/domain/usecases/users/CreateUser";
import { CreateUserDTO } from "@/app/dtos/users/CreateUserDTO";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class CreateUserController implements Controller {
  constructor(private readonly _createUser: CreateUser) {}

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    await this._createUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(201)
      .body({ message: "User created" })
      .build();
  }
}
