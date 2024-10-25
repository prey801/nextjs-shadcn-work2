import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const items = sqliteTable("items", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  manufacturer: text("manufacturer").notNull(),
  rrp: real("rrp").notNull(),
  costPrice: real("cost_price").notNull(),
  slotsRequired: integer("slots_required").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const vendingMachines = sqliteTable("vending_machines", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  layout: text("layout", { enum: ["basic", "composite"] }).notNull(),
  rows: integer("rows").notNull(),
  columns: integer("columns").notNull(),
  depth: integer("depth").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const slots = sqliteTable("slots", {
  id: text("id").primaryKey(),
  machineId: text("machine_id")
    .notNull()
    .references(() => vendingMachines.id),
  itemId: text("item_id")
    .notNull()
    .references(() => items.id),
  row: integer("row").notNull(),
  column: integer("column").notNull(),
  quantity: integer("quantity").notNull(),
  salePrice: real("sale_price").notNull(),
  lastStocked: integer("last_stocked", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  machineId: text("machine_id")
    .notNull()
    .references(() => vendingMachines.id),
  total: real("total").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const orderItems = sqliteTable("order_items", {
  id: text("id").primaryKey(),
  orderId: text("order_id")
    .notNull()
    .references(() => orders.id),
  itemId: text("item_id")
    .notNull()
    .references(() => items.id),
  quantity: integer("quantity").notNull(),
  price: real("price").notNull(),
});