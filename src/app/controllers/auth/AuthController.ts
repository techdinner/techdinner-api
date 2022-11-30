import { Controller } from "@/app/interfaces/Controller";
import { HttpResponseBuilder } from "@/app/builders/HttpResponseBuilder";
import { AuthService } from "@/app/services/auth/AuthService";
import { HttpResponse } from "@/app/interfaces/HttpResponse";

export class AuthController implements Controller {
  constructor(private readonly _authService: AuthService) {}

  async handle(req: any): Promise<HttpResponse> {
    const { email, password } = req.body;

    const response = await this._authService.execute({
      email,
      password,
    });

    return HttpResponseBuilder.statusCode(200).body(response).build();
  }
}
