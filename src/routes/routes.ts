import express from "express";
const routes = express();

import UsersRoutes from "./api/UsersRoutes";

routes.use("/users", UsersRoutes);

export default routes;
