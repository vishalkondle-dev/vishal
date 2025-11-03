import { ENV } from "@vishal/config";
import type { Config } from "drizzle-kit";

const { DATABASE_ID, ACCOUNT_ID, AUTH_TOKEN } = ENV["DEV"];

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "sqlite",
  dbCredentials: {
    accountId: ACCOUNT_ID,
    databaseId: DATABASE_ID,
    token: AUTH_TOKEN,
  },
} satisfies Config;
