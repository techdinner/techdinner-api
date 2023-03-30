import { type Controller } from "@/app/interfaces/controller.interface";
import { type FindAllUser } from "@/domain/use-cases/users/find-all-user";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";
import { UsersViewModel } from "../../view-models/users.view-model";

export class FindAllUserController extends JsonResponse implements Controller {
  constructor(private readonly _findAllUser: FindAllUser) {
    super();
  }

  async handle(): Promise<HttpResponse> {
    const response = await this._findAllUser.execute();

    return this.ok(
      "Data received success!",
      response?.map(UsersViewModel.toHTTP),
    );
  }
}
