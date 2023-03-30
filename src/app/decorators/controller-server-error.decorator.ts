import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { type Controller } from "@/app/interfaces/controller.interface";
import { type HttpResponse } from "@/app/interfaces/http-response.interface";

export class ControllerServerErrorDecorator implements Controller {
  constructor(private readonly _controller: Controller) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      return await this._controller.handle(request);
    } catch (error: any) {
      return HttpResponseBuilder.statusCode((error.status as number) || 500)
        .body({ message: error.message || "Internal server error." })
        .build();
    }
  }
}
