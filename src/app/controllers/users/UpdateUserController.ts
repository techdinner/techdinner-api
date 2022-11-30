import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { UpdateUser } from "@/domain/usecases/users/UpdateUser";
import { HttpResponse } from "@/app/interfaces/HttpResponse";
import { UpdateUserDTO } from "@/app/dtos/users/UpdateUserDTO";

interface UpdateUserRequest {
  body: UpdateUserDTO;
  params: {
    id: string;
  };
}

export class UpdateUserController implements Controller {
  constructor(private readonly _updateUser: UpdateUser) {}

  async handle(request: UpdateUserRequest): Promise<HttpResponse> {
    const data = request.body;
    const { id } = request.params;

    await this._updateUser.execute(id, data);

    return HttpResponseBuilder.statusCode(200)
      .body({ message: "User updated" })
      .build();
  }
}
