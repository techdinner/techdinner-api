import { config } from "dotenv";
import path from "path";

config({
	path: path.join(__dirname, "..", "..", ".env"),
});

export const environments = {
	Port: process.env.APP_PORT as unknown as number | 5000,
	DBHost: process.env.DB_HOST,
	DBPort: process.env.DB_PORT,
	DBUser: process.env.DB_USER,
	DBPass: process.env.DB_PASS,
	DBName: process.env.DB_NAME,
};
