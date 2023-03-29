import type { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import type { FindUserById } from "@/domain/use-cases/users/find-user-by-id";
import type { HttpResponse } from "@/app/interfaces/http-response.interface";
import type { FindUserByIdDTO } from "@/app/dtos/users/find-user-by-id.dto";
import { UsersViewModel } from "../../view-models/users.view-model";

export class FindUserByIdController implements Controller {
  constructor(private readonly _findUserById: FindUserById) {}

  async handle(request: FindUserByIdDTO): Promise<HttpResponse> {
    const response = await this._findUserById.execute({ ...request });

    return HttpResponseBuilder.statusCode(200)
      .body({
        message: "Data received success!",
        data: UsersViewModel.toHTTP(response),
      })
      .build();
  }
}
