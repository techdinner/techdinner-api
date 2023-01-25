import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { FindUserById } from "@/domain/usecases/users/find-user-by-id";
import { HttpResponse } from "@/app/interfaces/http-response.interface";

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
