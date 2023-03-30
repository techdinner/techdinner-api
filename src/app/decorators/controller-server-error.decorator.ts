import { type Controller } from "@/app/interfaces/controller.interface";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";
import { JsonResponse } from "../helpers/json-response";
import { type HttpError } from "../helpers/http-error";

export class ControllerServerErrorDecorator
  extends JsonResponse
  implements Controller
{
  constructor(private readonly _controller: Controller) {
    super();
  }

  async handle(request: any): Promise<HttpResponse> {
    try {
      return await this._controller.handle(request);
    } catch (error: unknown) {
      return this.fail(error as HttpError);
    }
  }
}
