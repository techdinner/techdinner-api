import express from "express";
const routes = express();

import AuthRoutes from "./api/AuthRoutes";
import UsersRoutes from "./api/UsersRoutes";

routes.use("/", (req, res) => {
	res.json("Hello World");
});

routes.use("/auth", AuthRoutes);
routes.use("/users", UsersRoutes);

export default routes;
