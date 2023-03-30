import { type Controller } from "@/app/interfaces/controller.interface";
import { type FindUserById } from "@/domain/use-cases/users/find-user-by-id";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { type FindUserByIdDTO } from "@/app/dtos/users/find-user-by-id.dto";
import { JsonResponse } from "@/app/helpers/json-response";
import { UsersViewModel } from "../../view-models/users.view-model";

export class FindUserByIdController extends JsonResponse implements Controller {
  constructor(private readonly _findUserById: FindUserById) {
    super();
  }

  async handle(request: FindUserByIdDTO): Promise<HttpResponse> {
    const response = await this._findUserById.execute({ ...request });

    return this.ok("Data received success!", UsersViewModel.toHTTP(response));
  }
}
