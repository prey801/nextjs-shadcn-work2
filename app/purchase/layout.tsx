import { Cart } from "@/components/purchase/cart";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PurchaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">{children}</div>
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}