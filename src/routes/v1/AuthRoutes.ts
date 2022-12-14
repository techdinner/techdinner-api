import { RouteBuilder } from "@/app/builders/RouteBuilder";
import { POST } from "@/app/enums/Methods";

import { makeSignController } from "@/app/factories/auth/SignUpFactory";
import { makeVerifyCodeController } from "@/app/factories/auth/VerifyCodeFactory";

RouteBuilder.route(POST, "/sign-up", makeSignController()).build();
RouteBuilder.route(POST, "/verify-code", makeVerifyCodeController()).build();
