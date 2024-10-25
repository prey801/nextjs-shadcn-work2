"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { useCart } from "./cart-context";

export function Cart() {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleCheckout = async () => {
    // In production, this would handle payment processing
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Shopping Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-2 border-b"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-lg font-semibold">
          Total: ${state.total.toFixed(2)}
        </div>
        <Button
          onClick={handleCheckout}
          disabled={state.items.length === 0}
        >
          Checkout
        </Button>
      </CardFooter>
    </Card>
  );
}