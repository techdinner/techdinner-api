import { HttpResponseBuilder } from "@/app/builders/http-response.builder";
import { Controller } from "@/app/interfaces/controller.interface";
import { HttpResponse } from "@/app/interfaces/http-response.interface";

export class ControllerServerErrorDecorator implements Controller {
  constructor(private readonly _controller: Controller) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      return await this._controller.handle(request);
    } catch (error) {
      return HttpResponseBuilder.statusCode(500).body(error).build();
    }
  }
}
