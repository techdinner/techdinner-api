import express, { NextFunction, Request, Response } from "express";
import "./database/data-source";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use("/api", routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
	if (err instanceof AppError) {
		return res
			.status(err.status)
			.json({ status: "error", message: err.message });
	}
	return res
		.status(500)
		.json({ status: "error", message: "Internal server error." });
});

app.listen(5000, () => console.log("Server running on port 5000"));
