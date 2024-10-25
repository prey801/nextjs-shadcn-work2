"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "./cart-context";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

// Sample data - In production, this would come from an API
const items = [
  {
    id: "1",
    name: "Cola",
    price: 2.50,
    stock: 8,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    id: "2",
    name: "Chips",
    price: 1.75,
    stock: 12,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=200&h=200",
  },
  // More items would be here in production
];

export function VendingMachineGrid() {
  const { dispatch } = useCart();
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  const handleAddToCart = (item: typeof items[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      },
    });
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto rounded-md mb-2"
                />
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{item.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Stock: {item.stock}
                </p>
              </div>
              <Button onClick={() => handleAddToCart(item)}>
                <Plus className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}