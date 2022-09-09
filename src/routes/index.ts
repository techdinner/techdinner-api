import express from "express";

import AuthRoutes from "./api/AuthRoutes";
import UsersRoutes from "./api/UsersRoutes";

const routes = express();

routes.use("/login", AuthRoutes);

routes.use("/users", UsersRoutes);

routes.use("/", (req, res) => res.json("Techdinner API"));

export default routes;
