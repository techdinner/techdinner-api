import { type Controller } from "@/app/interfaces/controller.interface";
import { type CreateUser } from "@/domain/use-cases/users/create-user";
import { type CreateUserDTO } from "@/app/dtos/users/create-user.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";
import { validate } from "../../requests/users/create-user.request";

export class CreateUserController extends JsonResponse implements Controller {
  constructor(private readonly _createUser: CreateUser) {
    super();
  }

  async handle(request: CreateUserDTO): Promise<HttpResponse> {
    validate(request);

    await this._createUser.execute({ ...request });

    return this.created("User created!");
  }
}
