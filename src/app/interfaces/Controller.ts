import { HttpResponse } from "./HttpResponse";

export interface Controller {
	handle(request: any): Promise<HttpResponse>;
}
