import dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "./data-source";
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

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
