"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Package, ChefHat, Truck, Home, CheckCircle, Clock, Phone, MapPin } from "lucide-react"

type OrderStatus = "pending" | "confirmed" | "preparing" | "ready" | "out_for_delivery" | "delivered"

interface MockOrder {
  id: string
  order_number: string
  status: OrderStatus
  items: { name: string; quantity: number }[]
  total: number
  estimated_arrival: string
  driver_name: string
  driver_phone: string
  delivery_address: string
  created_at: string
}

const statusSteps = [
  { status: "confirmed", label: "Order Confirmed", icon: CheckCircle },
  { status: "preparing", label: "Preparing", icon: ChefHat },
  { status: "ready", label: "Ready", icon: Package },
  { status: "out_for_delivery", label: "On the Way", icon: Truck },
  { status: "delivered", label: "Delivered", icon: Home },
]

const mockOrder: MockOrder = {
  id: "1",
  order_number: "OW-20260408-1234",
  status: "out_for_delivery",
  items: [
    { name: "Truffle Mushroom Bruschetta", quantity: 2 },
    { name: "Herb-Crusted Prime Ribeye", quantity: 1 },
    { name: "Dark Chocolate Lava Cake", quantity: 2 },
  ],
  total: 139.95,
  estimated_arrival: "4:45 PM",
  driver_name: "Michael S.",
  driver_phone: "(555) 123-4567",
  delivery_address: "123 Main Street, Apt 4B, New York, NY 10001",
  created_at: "2026-04-08T16:00:00Z",
}

export default function TrackPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [order, setOrder] = useState<MockOrder | null>(null)
  const [searching, setSearching] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearching(true)
    setNotFound(false)
    
    // Simulate API call
    setTimeout(() => {
      if (orderNumber.toUpperCase().includes("OW-") || orderNumber === "1234") {
        setOrder(mockOrder)
        setNotFound(false)
      } else {
        setOrder(null)
        setNotFound(true)
      }
      setSearching(false)
    }, 1000)
  }

  const getStatusIndex = (status: OrderStatus) => {
    const index = statusSteps.findIndex((step) => step.status === status)
    return index >= 0 ? index : 0
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground">Track Your Order</h1>
            <p className="mt-4 text-muted-foreground">
              Enter your order number to see real-time updates
            </p>
          </div>

          {/* Search Form */}
          <Card className="border-border bg-card mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter order number (e.g., OW-20260408-1234)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="pl-10 bg-input border-border"
                    required
                  />
                </div>
                <Button type="submit" disabled={searching} className="bg-primary text-primary-foreground">
                  {searching ? "Searching..." : "Track"}
                </Button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                Tip: Try searching for &quot;1234&quot; to see a demo order
              </p>
            </CardContent>
          </Card>

          {/* Not Found Message */}
          {notFound && (
            <Card className="border-destructive/50 bg-destructive/5 mb-8">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground">Order Not Found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We couldn&apos;t find an order with that number. Please check and try again.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Order Details */}
          {order && (
            <div className="space-y-6">
              {/* Status Card */}
              <Card className="border-border bg-card overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Order Number</p>
                      <p className="font-mono font-semibold text-foreground">{order.order_number}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Estimated Arrival</p>
                      <p className="font-semibold text-primary">{order.estimated_arrival}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Status Timeline */}
                  <div className="relative">
                    <div className="flex justify-between">
                      {statusSteps.map((step, index) => {
                        const currentIndex = getStatusIndex(order.status)
                        const isCompleted = index <= currentIndex
                        const isCurrent = index === currentIndex

                        return (
                          <div key={step.status} className="flex flex-col items-center relative z-10">
                            <div
                              className={`h-12 w-12 rounded-full flex items-center justify-center transition-all ${
                                isCompleted
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                            >
                              <step.icon className="h-5 w-5" />
                            </div>
                            <span
                              className={`mt-2 text-xs font-medium text-center max-w-[60px] ${
                                isCompleted ? "text-primary" : "text-muted-foreground"
                              }`}
                            >
                              {step.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                    {/* Progress Line */}
                    <div className="absolute top-6 left-6 right-6 h-0.5 bg-muted -translate-y-1/2">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{
                          width: `${(getStatusIndex(order.status) / (statusSteps.length - 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Current Status Message */}
                  <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Truck className="h-5 w-5 text-primary animate-pulse" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Your order is on the way!</p>
                        <p className="text-sm text-muted-foreground">
                          {order.driver_name} is delivering your order
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Driver Info */}
              {order.status === "out_for_delivery" && (
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Delivery Driver</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                        {order.driver_name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{order.driver_name}</p>
                        <p className="text-sm text-muted-foreground">Your delivery driver</p>
                      </div>
                      <a href={`tel:${order.driver_phone}`}>
                        <Button variant="outline" size="icon" className="border-border">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Delivering to</p>
                        <p className="text-sm text-muted-foreground">{order.delivery_address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Order Items */}
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {order.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.quantity}x {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-border flex justify-between font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">${order.total.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Help */}
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Need help with your order?</p>
                      <p className="text-sm text-muted-foreground">Our support team is here to help</p>
                    </div>
                    <Button variant="outline" className="border-border">
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
