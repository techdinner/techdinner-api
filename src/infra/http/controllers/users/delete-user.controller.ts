import { type Controller } from "@/app/interfaces/controller.interface";
import { type DeleteUser } from "@/domain/use-cases/users/delete-user";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { type DeleteUserDTO } from "@/app/dtos/users/delete-user.dto";
import { JsonResponse } from "@/app/helpers/json-response";

export class DeleteUserController extends JsonResponse implements Controller {
  constructor(private readonly _deleteUser: DeleteUser) {
    super();
  }

  async handle(request: DeleteUserDTO): Promise<HttpResponse> {
    await this._deleteUser.execute({ ...request });

    return this.ok("User deleted!");
  }
}
