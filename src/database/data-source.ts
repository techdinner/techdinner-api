import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "test",
	password: "test",
	database: "test",
	synchronize: true,
	logging: false,
	entities: ["src/entities/*.ts"],
	migrations: ["src/database/migrations/*.ts"],
	subscribers: [],
});

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch(err => {
		console.error("Error during Data Source initialization: ", err);
	});

export default AppDataSource;
