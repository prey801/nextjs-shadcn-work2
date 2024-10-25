import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Plus } from "lucide-react";
import Link from "next/link";

// Sample data - In a real app, this would come from a database
const machines = [
  {
    id: "vm1",
    name: "Main Building VM",
    description: "Basic vending machine layout",
    layout: "basic",
    rows: 6,
    columns: 12,
    depth: 8,
  },
  {
    id: "vm2",
    name: "Student Center VM",
    description: "Composite layout with mixed item sizes",
    layout: "composite",
    rows: 6,
    columns: 12,
    depth: 8,
  },
];

export default function VendingMachinesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Vending Machines</h1>
        <Link href="/inventory/machines/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Machine
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {machines.map((machine) => (
          <Card key={machine.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">{machine.name}</CardTitle>
              <Link href={`/inventory/machines/${machine.id}`}>
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground mb-4">
                {machine.description}
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Layout</TableHead>
                    <TableHead>Rows</TableHead>
                    <TableHead>Columns</TableHead>
                    <TableHead>Depth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="capitalize">{machine.layout}</TableCell>
                    <TableCell>{machine.rows}</TableCell>
                    <TableCell>{machine.columns}</TableCell>
                    <TableCell>{machine.depth}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}