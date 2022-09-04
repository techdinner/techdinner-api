import { createPool, PoolConfig } from "mysql";
import { environments } from "../config/dotenv";

const dbParams: PoolConfig = {
	host: environments.DBHost,
	port: environments.DBPort,
	database: environments.DBName,
	user: environments.DBUser,
	password: environments.DBPass,
};

const mysqlPool = createPool(dbParams);

export const mysqlConnection = mysqlPool.getConnection((err, connection) => {
	if (err) {
		console.error("Failed to connect to database.");
	} else {
		console.log(connection);
	}
});
