import { HttpServerFactory } from "@/app/factories/server/http-server.factory";
import { ExpressHttpServerAdapter } from "@/infra/server/express-http-server.adapter";

export const AppServer = new HttpServerFactory(new ExpressHttpServerAdapter());
