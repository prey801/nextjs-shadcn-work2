import { db } from "./index";
import { items, vendingMachines, slots, orders, orderItems } from "./schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function getItems() {
  return await db.select().from(items);
}

export async function getItem(id: string) {
  const results = await db
    .select()
    .from(items)
    .where(eq(items.id, id));
  return results[0];
}

export async function createItem(data: Omit<typeof items.$inferInsert, "id" | "createdAt">) {
  const id = nanoid();
  await db.insert(items).values({
    id,
    ...data,
  });
  return id;
}

export async function getVendingMachines() {
  return await db.select().from(vendingMachines);
}

export async function getVendingMachine(id: string) {
  const results = await db
    .select()
    .from(vendingMachines)
    .where(eq(vendingMachines.id, id));
  return results[0];
}

export async function getMachineSlots(machineId: string) {
  return await db
    .select()
    .from(slots)
    .where(eq(slots.machineId, machineId));
}

export async function createOrder(
  machineId: string,
  orderItems: Array<{ itemId: string; quantity: number; price: number }>,
) {
  const orderId = nanoid();
  const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  await db.transaction(async (tx) => {
    // Create order
    await tx.insert(orders).values({
      id: orderId,
      machineId,
      total,
    });

    // Create order items
    await tx.insert(orderItems).values(
      orderItems.map((item) => ({
        id: nanoid(),
        orderId,
        itemId: item.itemId,
        quantity: item.quantity,
        price: item.price,
      })),
    );

    // Update slot quantities
    for (const item of orderItems) {
      await tx
        .update(slots)
        .set({
          quantity: sql`quantity - ${item.quantity}`,
        })
        .where(
          and(
            eq(slots.machineId, machineId),
            eq(slots.itemId, item.itemId),
          ),
        );
    }
  });

  return orderId;
}