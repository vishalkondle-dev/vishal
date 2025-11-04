import { ENV } from "@vishal/config";
import type { Config } from "drizzle-kit";

const rawNodeEnv = process.env.NODE_ENV ?? "DEV";

if (!(rawNodeEnv in ENV)) {
  throw new Error(`Unknown NODE_ENV value: ${rawNodeEnv}`);
}

const envKey = rawNodeEnv as keyof typeof ENV;
const { DATABASE_ID, ACCOUNT_ID, AUTH_TOKEN } = ENV[envKey];

export default {
  schema: "./src/schema.ts",
  out: "./migrations",
  driver: "d1-http",
  dialect: "sqlite",
  dbCredentials: {
    accountId: ACCOUNT_ID,
    databaseId: DATABASE_ID,
    token: AUTH_TOKEN,
  },
} satisfies Config;
