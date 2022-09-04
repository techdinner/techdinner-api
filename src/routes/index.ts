import express from "express";

const routes = express();

import AuthRoutes from "./api/AuthRoutes";
import UsersRoutes from "./api/UsersRoutes";

routes.use("/login", AuthRoutes);

routes.use("/users", UsersRoutes);

routes.use("/", (req, res) => res.json("Techdinner API"));

export default routes;
