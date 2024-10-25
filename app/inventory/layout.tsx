import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="border-b bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/inventory/machines">
                <Button variant="ghost">Machines</Button>
              </Link>
              <Link href="/inventory/items">
                <Button variant="ghost">Items</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}