import { AppServer } from "@/app/config/AppServer";
import { Methods } from "@/app/enums/Methods";

import { makeAuthController } from "@/app/factories/auth/AuthFactory";

AppServer.server.addRoute({
  httpMethod: Methods.POST,
  endpoint: "/",
  controller: makeAuthController(),
});
