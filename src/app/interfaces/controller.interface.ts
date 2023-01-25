import { HttpResponse } from "./http-response.interface";

export interface Controller {
  handle(request: any): Promise<HttpResponse>;
}
