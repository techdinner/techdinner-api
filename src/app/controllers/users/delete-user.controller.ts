import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { DeleteUser } from "@/domain/usecases/users/delete-user";
import { HttpResponse } from "@/app/interfaces/http-response.interface";

interface DeleteUserRequest {
  id: string;
}

export class DeleteUserController implements Controller {
  constructor(private readonly _deleteUser: DeleteUser) {}

  async handle(request: DeleteUserRequest): Promise<HttpResponse> {
    const { id } = request;

    await this._deleteUser.execute(id);

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User deleted!" })
      .build();
  }
}
