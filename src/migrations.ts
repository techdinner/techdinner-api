import express from "express";
import cors from "cors";
import routes from "./routes";
import migrate from "./database/migrations/sql";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(3000, async () => {
	try {
		await migrate();
		console.log("Migrations OK");
		process.exit(0);
	} catch (err) {
		console.error("Migrations Error");
		process.exit(0);
	}
});
