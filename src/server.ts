import express from "express";
import cors from "cors";
import { CatchErrors } from "./app/errors/CatchErrors";
import "./database/typeorm/data-source";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.use(CatchErrors);

app.listen(3000, () => console.log("Server running on port 3000"));
