import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { DeleteUser } from "@/domain/usecases/users/DeleteUser";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

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
