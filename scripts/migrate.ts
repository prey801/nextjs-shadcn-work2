import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import * as schema from "../lib/db/schema";

async function main() {
  const client = createClient({
    url: process.env.DATABASE_URL || "file:local.db",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  });

  const db = drizzle(client, { schema });

  console.log("Running migrations...");

  await migrate(db, {
    migrationsFolder: "./drizzle",
  });

  console.log("Migrations completed!");

  await client.close();
}

main().catch((err) => {
  console.error("Migration failed!");
  console.error(err);
  process.exit(1);
});