import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { Controller } from "@/app/interfaces/Controller";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

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
