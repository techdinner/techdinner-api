import type { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import type { CreateUser } from "@/domain/use-cases/users/create-user";
import type { CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import type { HttpResponse } from "@/app/interfaces/http-response.interface";
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
