import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { FindUserById } from "@/domain/usecases/users/FindUserById";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

interface FindUserByIdRequest {
  id: string;
}

export class FindUserByIdController implements Controller {
  constructor(private readonly _findUserById: FindUserById) {}

  async handle(request: FindUserByIdRequest): Promise<HttpResponse> {
    const { id } = request;

    const response = await this._findUserById.execute(id);

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
