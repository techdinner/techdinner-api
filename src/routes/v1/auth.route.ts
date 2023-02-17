import { RouteBuilder } from "@/app/builders/route.builder";
import { POST } from "@/app/enums/methods.enum";

import { makeSignController } from "@/app/factories/auth/sign-up.factory";
import { makeVerifyCodeController } from "@/app/factories/auth/verify-code.factory";
import { makeLoginController } from "@/app/factories/auth/login.factory";

RouteBuilder.route(POST, "/sign-up", makeSignController()).build();
RouteBuilder.route(POST, "/verify-code", makeVerifyCodeController()).build();
RouteBuilder.route(POST, "/login", makeLoginController()).build();
