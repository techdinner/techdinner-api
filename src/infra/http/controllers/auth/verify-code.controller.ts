import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { VerifyCode } from "@/domain/usecases/auth/verify-code";
import { VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";
import { HttpResponse } from "@/app/interfaces/http-response.interface";

export class VerifyCodeController implements Controller {
  constructor(private readonly _verifyCode: VerifyCode) {}

  async handle(request: VerifyCodeDTO): Promise<HttpResponse> {
    await this._verifyCode.execute({ ...request });

    return HttpResponseBuilder.statusCode(201)
      .body({ message: "Registered account!" })
      .build();
  }
}
