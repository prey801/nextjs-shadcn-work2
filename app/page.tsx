import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Package, Settings, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Smart Vending Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Experience the future of vending with our intelligent machines. Quick, convenient, and contactless snacking at your fingertips.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/purchase">
              <Button size="lg" className="gap-2">
                <ShoppingCart className="h-5 w-5" />
                Start Shopping
              </Button>
            </Link>
            <Link href="/inventory">
              <Button size="lg" variant="outline" className="gap-2">
                <Settings className="h-5 w-5" />
                Manage Inventory
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-blue-500" />
                Easy Purchase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Simple and intuitive interface for quick purchases. Multiple payment options available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-500" />
                Fresh Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Regularly restocked with fresh items. Real-time inventory tracking ensures availability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                Smart Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced analytics and reporting for inventory management and sales tracking.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Items</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Lay's Classic",
              price: 1.99,
              image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=200&h=200",
            },
            {
              name: "Cola",
              price: 2.49,
              image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200&h=200",
            },
            {
              name: "Energy Drink",
              price: 3.49,
              image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200&h=200",
            },
            {
              name: "Chocolate Bar",
              price: 1.79,
              image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200&h=200",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}