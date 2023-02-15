import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { FindAllUser } from "@/domain/usecases/users/find-all-user";
import { HttpResponse } from "@/app/interfaces/http-response.interface";

export class FindAllUserController implements Controller {
  constructor(private readonly _findAllUser: FindAllUser) {}

  async handle(): Promise<HttpResponse> {
    const response = await this._findAllUser.execute();

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
