import express from "express";
const routes = express();

import UsersRoutes from "./api/UsersRoutes";

routes.use("/", (req, res) => {
	res.json("Hello World");
});

routes.use("/users", UsersRoutes);

export default routes;
