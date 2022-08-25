import express from "express";
import "./database/data-source";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000, () => console.log("Server running on port 5000"));
