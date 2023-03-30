import { type Controller } from "@/app/interfaces/controller.interface";
import { type VerifyCode } from "@/domain/use-cases/auth/verify-code";
import { type VerifyCodeDTO } from "@/app/dtos/auth/verify-code.dto";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "@/app/helpers/json-response";
import { validate } from "../../requests/auth/verify-code.request";

export class VerifyCodeController extends JsonResponse implements Controller {
  constructor(private readonly _verifyCode: VerifyCode) {
    super();
  }

  async handle(request: VerifyCodeDTO): Promise<HttpResponse> {
    validate(request);

    const response = await this._verifyCode.execute({ ...request });

    return this.ok(null, response);
  }
}
