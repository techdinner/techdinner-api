import express from "express";
import migrate from "./database/migrations/sql";

const app = express();

const server = app.listen(5000, async () => {
	try {
		const result = await migrate();
		console.log(result);
	} finally {
		server.close();
		process.exit();
	}
});
