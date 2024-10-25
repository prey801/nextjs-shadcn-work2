"use client";

import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const machines = [
  {
    id: "vm1",
    name: "Main Building VM",
    description: "Basic vending machine layout",
  },
  {
    id: "vm2",
    name: "Student Center VM",
    description: "Composite layout with mixed item sizes",
  },
];

export function VendingMachineSelector() {
  const [selectedMachine, setSelectedMachine] = useState(machines[0].id);

  return (
    <Card>
      <CardContent className="pt-6">
        <RadioGroup
          defaultValue={selectedMachine}
          onValueChange={setSelectedMachine}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {machines.map((machine) => (
            <div key={machine.id} className="flex items-center space-x-2">
              <RadioGroupItem value={machine.id} id={machine.id} />
              <Label htmlFor={machine.id} className="flex flex-col">
                <span className="text-base font-semibold">{machine.name}</span>
                <span className="text-sm text-muted-foreground">
                  {machine.description}
                </span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}