import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function InventoryPage() {
  const stats = [
    {
      title: "Total Items",
      value: "124",
      description: "Unique products in inventory",
      icon: Package,
      href: "/inventory/items",
    },
    {
      title: "Active Machines",
      value: "8",
      description: "Vending machines in operation",
      icon: ShoppingCart,
      href: "/inventory/machines",
    },
    {
      title: "Monthly Sales",
      value: "$12,543",
      description: "Revenue for current month",
      icon: TrendingUp,
      href: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Inventory Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Restocked Machine #3 - 24 items added",
                "Price update - Soda prices adjusted",
                "New product added - Energy Drink XL",
                "Maintenance completed on Machine #1",
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
                  {activity}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                "Cola Classic - 5 units remaining",
                "Potato Chips - 3 units remaining",
                "Chocolate Bar - 2 units remaining",
                "Water Bottles - 4 units remaining",
              ].map((alert, index) => (
                <div
                  key={index}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                  {alert}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}