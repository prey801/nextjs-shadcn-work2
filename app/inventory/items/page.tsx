import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";

// Sample data - In a real app, this would come from a database
const items = [
  {
    id: "item1",
    name: "Chocolate Bar",
    manufacturer: "Sweet Co",
    rrp: 2.50,
    costPrice: 1.25,
    slotsRequired: 1,
    category: "Snacks",
  },
  {
    id: "item2",
    name: "Soda Can",
    manufacturer: "Fizz Corp",
    rrp: 1.75,
    costPrice: 0.75,
    slotsRequired: 1,
    category: "Beverages",
  },
  {
    id: "item3",
    name: "Chips Bag",
    manufacturer: "Crunch Foods",
    rrp: 3.00,
    costPrice: 1.50,
    slotsRequired: 2,
    category: "Snacks",
  },
];

export default function ItemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Inventory Items</h1>
        <Link href="/inventory/items/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </Link>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Manufacturer</TableHead>
                <TableHead>RRP</TableHead>
                <TableHead>Cost Price</TableHead>
                <TableHead>Slots</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>${item.rrp.toFixed(2)}</TableCell>
                  <TableCell>${item.costPrice.toFixed(2)}</TableCell>
                  <TableCell>{item.slotsRequired}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <Link href={`/inventory/items/${item.id}`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}