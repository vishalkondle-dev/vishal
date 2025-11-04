export const ENV = {
  DEV: {
    API_URL: process.env.API_URL ?? "",
    ACCOUNT_ID: process.env.ACCOUNT_ID ?? "",
    DATABASE_ID: process.env.DATABASE_ID ?? "",
    AUTH_TOKEN: process.env.AUTH_TOKEN ?? "",
  },
  PROD: {
    API_URL: process.env.PROD_API_URL ?? "",
    ACCOUNT_ID: process.env.PROD_ACCOUNT_ID ?? "",
    DATABASE_ID: process.env.PROD_DATABASE_ID ?? "",
    AUTH_TOKEN: process.env.PROD_AUTH_TOKEN ?? "",
  },
};
