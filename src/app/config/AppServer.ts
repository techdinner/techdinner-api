import { HttpServerFactory } from "@/app/factories/server/HttpServerFactory";
import { ExpressHttpServerAdapter } from "@/infra/server/ExpressHttpServerAdapter";

export const AppServer = new HttpServerFactory(new ExpressHttpServerAdapter());
