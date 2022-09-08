import { config } from "dotenv";
import path from "path";

config({
	path: path.join(__dirname, "..", "..", ".env"),
});

const PORT = process.env.DB_PORT as number | undefined;

export const environments = {
	DBHost: process.env.DB_HOST,
	DBPort: PORT,
	DBUser: process.env.DB_USER,
	DBPass: process.env.DB_PASS,
	DBName: process.env.DB_NAME,
};
