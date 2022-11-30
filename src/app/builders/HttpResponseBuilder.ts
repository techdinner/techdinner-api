import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class HttpResponseBuilder {
  private _httpResponse: HttpResponse;

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
