import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { FindUserById } from "@/domain/usecases/users/FindUserById";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class FindUserByIdController implements Controller {
  constructor(private readonly _findUserById: FindUserById) {}

  async handle(request: any): Promise<HttpResponse> {
    const { id } = request.params;

    const response = await this._findUserById.execute(id as string);

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
