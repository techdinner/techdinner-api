import express from "express";
import migrate from "./database/migrations/sql";

const app = express();

const server = app.listen(3000, async () => {
	const result = await migrate();
	console.log(result);

	server.close();
	process.exit();
});
