import { HttpResponse } from "@interfaces/HttpResponse";

export class HttpResponseBuilder {
	private httpResponse: HttpResponse;

	constructor(statusCode: number) {
		this.httpResponse = {
			statusCode,
		};
	}

	public static statusCode(statusCode: number) {
		return new HttpResponseBuilder(statusCode);
	}

	public body(body: any) {
		this.httpResponse.body = body;
		return this;
	}

	public build() {
		return this.httpResponse;
	}
}
