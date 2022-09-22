import { AppServer } from "../app/config/AppServer";

import AuthRoutes from "./api/AuthRoutes";
import UsersRoutes from "./api/UsersRoutes";

AppServer.route("/login", AuthRoutes);

routes.use("get", "/users", UsersRoutes);

routes.use("/", (req, res) => res.json("Techdinner API"));

export default routes;
