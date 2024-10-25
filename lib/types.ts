export interface Item {
  id: string;
  name: string;
  description: string;
  manufacturer: string;
  rrp: number;
  costPrice: number;
  slotsRequired: number;
  category: string;
  imageUrl: string;
}

export interface VendingMachine {
  id: string;
  name: string;
  description: string;
  layout: 'basic' | 'composite';
  rows: number;
  columns: number;
  depth: number;
}

export interface VendingSlot {
  id: string;
  machineId: string;
  itemId: string;
  position: {
    row: number;
    column: number;
  };
  quantity: number;
  salePrice: number;
  lastStocked: string;
}

export interface CartItem {
  id: string;
  itemId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  machineId: string;
  timestamp: string;
  total: number;
  items: OrderItem[];
}

export interface OrderItem {
  itemId: string;
  quantity: number;
  price: number;
}