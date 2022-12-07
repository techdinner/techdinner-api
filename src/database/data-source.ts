import "reflect-metadata";
import { DataSource } from "typeorm";
import { join } from "path";
import { environments } from "@/config/dotenv";

const { DBHost, DBPort, DBUser, DBPass, DBName } = environments;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DBHost,
  port: DBPort,
  username: DBUser,
  password: DBPass,
  database: DBName,
  synchronize: true,
  logging: false,
  entities: [
    join(__dirname, "..", "infra", "typeorm", "entities", "*.{ts,js}"),
  ],
  migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log("> Data Source has been initialized!"))
  .catch(err =>
    console.error("> Error during Data Source initialization: ", err),
  );

export { AppDataSource };
