import type { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import type { DeleteUser } from "@/domain/use-cases/users/delete-user";
import type { HttpResponse } from "@/app/interfaces/http-response.interface";
import type { DeleteUserDTO } from "@/app/dtos/users/delete-user.dto";

export class DeleteUserController implements Controller {
  constructor(private readonly _deleteUser: DeleteUser) {}

  async handle(request: DeleteUserDTO): Promise<HttpResponse> {
    await this._deleteUser.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User deleted!" })
      .build();
  }
}
