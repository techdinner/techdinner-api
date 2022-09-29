import { HttpResponseBuilder } from "@builders/HttpResponseBuilder";
import { Controller } from "@interfaces/Controller";
import { HttpResponse } from "@interfaces/HttpResponse";

export class ControllerServerErrorDecorator implements Controller {
	constructor(private readonly controller: Controller) {}

	async handle(request: any): Promise<HttpResponse> {
		try {
			const response = await this.controller.handle(request);

			return response;
		} catch (error) {
			return HttpResponseBuilder.statusCode(500).body(error).build();
		}
	}
}
