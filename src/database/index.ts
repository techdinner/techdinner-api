import { createPool, PoolConfig, Pool } from "mysql";
import { environments } from "@/config/dotenv";

const dbParams: PoolConfig = {
  host: environments.DBHost,
  port: environments.DBPort,
  database: environments.DBName,
  user: environments.DBUser,
  password: environments.DBPass,
  multipleStatements: true,
};

export const getPool = (): Pool => createPool(dbParams);
