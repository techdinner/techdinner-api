import { RouteBuilder } from "@/app/builders/RouteBuilder";
import { POST } from "@/app/enums/Methods";

import { makeAuthController } from "@/app/factories/auth/AuthFactory";

RouteBuilder.route(POST, "/", makeAuthController()).build();
