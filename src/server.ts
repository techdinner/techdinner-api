import { AppServer } from "@config/AppServer";

import "@routes/v1/UserRoutes";

AppServer.server.startServer(5000);
