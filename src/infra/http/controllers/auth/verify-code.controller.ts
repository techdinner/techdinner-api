import { type Controller } from "@/app/interfaces/controller.interface";
import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { type VerifyCode } from "@/domain/use-cases/auth/verify-code";
import { type VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { validate } from "../../requests/auth/verify-code.request";

export class VerifyCodeController implements Controller {
  constructor(private readonly _verifyCode: VerifyCode) {}

  async handle(request: VerifyCodeDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._verifyCode.execute({ ...request });

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
