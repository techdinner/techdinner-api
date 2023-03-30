import "reflect-metadata";
import { DataSource } from "typeorm";
import { join } from "path";
import { environments } from "@/config/dotenv";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = environments;

const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    join(__dirname, "..", "infra", "typeorm", "entities", "*.{ts,js}"),
  ],
  migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  subscribers: [],
});

(async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Data Source has been initialized!");
  } catch (error) {
    console.error("❌ Error during Data Source initialization: ", error);
  }
})();

export { AppDataSource };
