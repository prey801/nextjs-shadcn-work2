CREATE TABLE `items` (
  `id` text PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `description` text,
  `manufacturer` text NOT NULL,
  `rrp` real NOT NULL,
  `cost_price` real NOT NULL,
  `slots_required` integer NOT NULL,
  `category` text NOT NULL,
  `image_url` text,
  `created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE `vending_machines` (
  `id` text PRIMARY KEY NOT NULL,
  `name` text NOT NULL,
  `description` text,
  `layout` text NOT NULL,
  `rows` integer NOT NULL,
  `columns` integer NOT NULL,
  `depth` integer NOT NULL,
  `created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE `slots` (
  `id` text PRIMARY KEY NOT NULL,
  `machine_id` text NOT NULL,
  `item_id` text NOT NULL,
  `row` integer NOT NULL,
  `column` integer NOT NULL,
  `quantity` integer NOT NULL,
  `sale_price` real NOT NULL,
  `last_stocked` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (`machine_id`) REFERENCES `vending_machines`(`id`),
  FOREIGN KEY (`item_id`) REFERENCES `items`(`id`)
);

CREATE TABLE `orders` (
  `id` text PRIMARY KEY NOT NULL,
  `machine_id` text NOT NULL,
  `total` real NOT NULL,
  `created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (`machine_id`) REFERENCES `vending_machines`(`id`)
);

CREATE TABLE `order_items` (
  `id` text PRIMARY KEY NOT NULL,
  `order_id` text NOT NULL,
  `item_id` text NOT NULL,
  `quantity` integer NOT NULL,
  `price` real NOT NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`),
  FOREIGN KEY (`item_id`) REFERENCES `items`(`id`)
);