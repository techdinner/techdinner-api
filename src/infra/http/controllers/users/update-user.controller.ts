import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { UpdateUser } from "@/domain/usecases/users/update-user";
import { HttpResponse } from "@/app/interfaces/http-response.interface";
import { UpdateUserDTO } from "@/app/dtos/users/update-user.dto";

export class UpdateUserController implements Controller {
  constructor(private readonly _updateUser: UpdateUser) {}

  async handle(request: UpdateUserDTO): Promise<HttpResponse> {
    await this._updateUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User updated!" })
      .build();
  }
}
