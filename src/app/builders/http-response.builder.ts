import type { HttpResponse } from "@/app/interfaces/http-response.interface";

export class HttpResponseBuilder {
  private readonly _httpResponse: HttpResponse;

  constructor(statusCode: number) {
    this._httpResponse = {
      statusCode,
    };
  }

  public static statusCode(statusCode: number): HttpResponseBuilder {
    return new HttpResponseBuilder(statusCode);
  }

  public body(body: any): this {
    this._httpResponse.body = body;
    return this;
  }

  public build(): HttpResponse {
    return this._httpResponse;
  }
}
