import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { UpdateUser } from "@/domain/usecases/users/UpdateUser";
import { HttpResponse } from "@/app/interfaces/HttpResponse";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

export class UpdateUserController implements Controller {
  constructor(private readonly _updateUser: UpdateUser) {}

  async handle(request: UpdateUserDTO): Promise<HttpResponse> {
    await this._updateUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User updated!" })
      .build();
  }
}
