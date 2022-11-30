import { AppServer } from "@/app/config/AppServer";

import "@/routes/v1/UserRoutes";

AppServer.server.startServer(5000);
