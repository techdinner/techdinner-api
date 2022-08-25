import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const PORT = process.env.DB_PORT as number | undefined;

const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: PORT,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
	subscribers: [],
});

// AppDataSource.initialize()
// 	.then(() => {
// 		console.log("Data Source has been initialized!");
// 	})
// 	.catch(err => {
// 		console.error("Error during Data Source initialization: ", err);
// 	});

export default AppDataSource;
