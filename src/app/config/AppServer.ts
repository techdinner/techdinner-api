import { HttpServerFactory } from "../server/HttpServerFactory";
import { ExpressHttpServerAdapter } from "../../infra/server/ExpressHttpServerAdapter";

export const AppServer = new HttpServerFactory(new ExpressHttpServerAdapter());
