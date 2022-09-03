import { environments } from "../config/env";
import "reflect-metadata";
import { DataSource } from "typeorm";

const { DBHost, DBPort, DBUser, DBPass, DBName } = environments;

const AppDataSource = new DataSource({
	type: "mysql",
	host: DBHost,
	port: DBPort,
	username: DBUser,
	password: DBPass,
	database: DBName,
	synchronize: true,
	logging: false,
	entities: [`${__dirname}/../app/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
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
