declare namespace NodeJS {
  interface ProcessEnv {
    SECRET: string;
    APP_HOST: string;
    APP_PORT: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
    MAIL_HOST: string;
    MAIL_PORT: number;
    MAIL_USER: string;
    MAIL_PASS: string;
    MAIL_EMAIL: string;
    MAIL_USERNAME: string;
  }
}
