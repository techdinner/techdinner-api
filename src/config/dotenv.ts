import { config } from "dotenv";
import path from "path";

config({
  path: path.join(__dirname, "..", "..", ".env"),
});

export const environments = {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT as number | undefined,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT as number | undefined,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  MAIL_EMAIL: process.env.MAIL_EMAIL as string,
  MAIL_USERNAME: process.env.MAIL_USERNAME as string,
};
