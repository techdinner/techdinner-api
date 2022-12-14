import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { VerifyCode } from "@/domain/usecases/auth/VerifyCode";
import { VerifyCodeDTO } from "@/app/dtos/auth/VerifyCodeDTO";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class VerifyCodeController implements Controller {
  constructor(private readonly _verifyCode: VerifyCode) {}

  async handle(request: VerifyCodeDTO): Promise<HttpResponse> {
    await this._verifyCode.execute({ ...request });

    return HttpResponseBuilder.statusCode(201)
      .body({ message: "Registered account!" })
      .build();
  }
}
