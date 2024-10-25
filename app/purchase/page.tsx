import { VendingMachineSelector } from "@/components/purchase/vending-machine-selector";
import { VendingMachineGrid } from "@/components/purchase/vending-machine-grid";

export default function PurchasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Purchase Items</h1>
      <div className="grid gap-8">
        <VendingMachineSelector />
        <VendingMachineGrid />
      </div>
    </div>
  );
}