import { AppServer } from "@/app/config/app-server";

import "@/routes/v1/auth.route";
import "@/routes/v1/user.route";

AppServer.server.startServer(5000);
