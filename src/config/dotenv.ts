import { config } from "dotenv";
import { join } from "path";

config({
  path: join(__dirname, "..", "..", ".env"),
});

export const environments = {
  SECRET: process.env.SECRET,
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  MAIL_EMAIL: process.env.MAIL_EMAIL,
  MAIL_USERNAME: process.env.MAIL_USERNAME,
};
