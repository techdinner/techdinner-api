import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { DeleteUser } from "@/domain/usecases/users/DeleteUser";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class DeleteUserController implements Controller {
  constructor(private readonly _deleteUser: DeleteUser) {}

  async handle(request: any): Promise<HttpResponse> {
    const { id } = request.params;

    const response = await this._deleteUser.execute(id as string);

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
