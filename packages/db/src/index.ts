import type { D1Database } from "@cloudflare/workers-types";
import { DrizzleD1Database, drizzle } from "drizzle-orm/d1";

export type DB = DrizzleD1Database;

export function createDb(d1: D1Database) {
  return drizzle(d1);
}
