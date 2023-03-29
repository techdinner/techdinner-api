import type { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import type { UpdateUser } from "@/domain/use-cases/users/update-user";
import type { HttpResponse } from "@/app/interfaces/http-response.interface";
import type { UpdateUserDTO } from "@/app/dtos/users/update-user.dto";
import { validate } from "../../requests/users/update-user.request";

export class UpdateUserController implements Controller {
  constructor(private readonly _updateUser: UpdateUser) {}

  async handle(request: UpdateUserDTO): Promise<HttpResponse> {
    validate(request);

    await this._updateUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User updated!", data: null })
      .build();
  }
}
