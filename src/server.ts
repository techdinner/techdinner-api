import dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./database/data-source";
import { routes } from "./routes";

dotenv.config();

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch(err => {
		console.error("Error during Data Source initialization: ", err);
	});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log("Server running on port 5000"));
