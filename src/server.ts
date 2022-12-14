import { AppServer } from "@/app/config/AppServer";

import "@/routes/v1/UserRoutes";
import "@/routes/v1/AuthRoutes";

AppServer.server.startServer(5000);
