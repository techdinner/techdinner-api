import { type Controller } from "@/app/interfaces/controller.interface";
import { type UpdateUser } from "@/domain/use-cases/users/update-user";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { type UpdateUserDTO } from "@/app/dtos/users/update-user.dto";
import { JsonResponse } from "@/app/helpers/json-response";
import { validate } from "../../requests/users/update-user.request";

export class UpdateUserController extends JsonResponse implements Controller {
  constructor(private readonly _updateUser: UpdateUser) {
    super();
  }

  async handle(request: UpdateUserDTO): Promise<HttpResponse> {
    validate(request);

    await this._updateUser.execute({ ...request });

    return this.ok("User updated!");
  }
}
