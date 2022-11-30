import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { FindAllUser } from "@/domain/usecases/users/FindAllUser";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class FindAllUserController implements Controller {
  constructor(private readonly _findAllUser: FindAllUser) {}

  async handle(): Promise<HttpResponse> {
    const response = await this._findAllUser.execute();

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
