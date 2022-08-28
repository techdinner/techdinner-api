import express from "express";
import cors from "cors";
import "./database/TypeORM/data-source";
import "express-async-errors";
import { CatchErrors } from "./errors/CatchErrors";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.use(CatchErrors);

app.listen(5000, () => console.log("Server running on port 5000"));
