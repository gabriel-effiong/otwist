"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Calendar, Clock, MapPin, CreditCard } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/cart-store"

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const {
    items,
    orderType,
    scheduledDate,
    scheduledTime,
    deliveryAddress,
    deliveryInstructions,
    specialRequests,
    updateQuantity,
    removeItem,
    setOrderType,
    setSchedule,
    setDeliveryAddress,
    setDeliveryInstructions,
    setSpecialRequests,
    getSubtotal,
    getTax,
    getDeliveryFee,
    getTotal,
  } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-48 mb-8" />
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-32 bg-muted rounded-lg" />
                  ))}
                </div>
                <div className="h-96 bg-muted rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const subtotal = getSubtotal()
  const tax = getTax()
  const deliveryFee = getDeliveryFee()
  const total = getTotal()

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/menu" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-8">Your Cart</h1>

          {items.length === 0 ? (
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold text-foreground">Your cart is empty</h2>
                <p className="mt-2 text-muted-foreground text-center">
                  Looks like you haven&apos;t added anything yet
                </p>
                <Link href="/menu">
                  <Button className="mt-6 bg-primary text-primary-foreground">
                    Browse Menu
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Type */}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Order Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={orderType}
                      onValueChange={(value) => setOrderType(value as 'individual' | 'catering' | 'delivery')}
                      className="grid grid-cols-3 gap-4"
                    >
                      {[
                        { value: "individual", label: "Pickup", icon: ShoppingBag },
                        { value: "delivery", label: "Delivery", icon: MapPin },
                        { value: "catering", label: "Catering", icon: Calendar },
                      ].map((type) => (
                        <Label
                          key={type.value}
                          htmlFor={type.value}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border cursor-pointer transition-all ${
                            orderType === type.value
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={type.value} id={type.value} className="sr-only" />
                          <type.icon className={`h-5 w-5 ${orderType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                          <span className={`text-sm font-medium ${orderType === type.value ? "text-primary" : "text-foreground"}`}>
                            {type.label}
                          </span>
                        </Label>
                      ))}
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Cart Items List */}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Items ({items.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item) => (
                      <div key={item.menuItem.id} className="flex gap-4 p-4 rounded-lg bg-muted/30">
                        {/* Image */}
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                          {item.menuItem.image_url ? (
                            <Image
                              src={item.menuItem.image_url}
                              alt={item.menuItem.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center text-2xl">🍽️</div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground truncate">{item.menuItem.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">${item.menuItem.price.toFixed(2)} each</p>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-border"
                              onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 border-border"
                              onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 ml-auto"
                              onClick={() => removeItem(item.menuItem.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-semibold text-foreground">
                            ${(item.menuItem.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Scheduling */}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Schedule Order
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          type="date"
                          id="date"
                          value={scheduledDate || ""}
                          onChange={(e) => setSchedule(e.target.value, scheduledTime)}
                          min={new Date().toISOString().split("T")[0]}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input
                          type="time"
                          id="time"
                          value={scheduledTime || ""}
                          onChange={(e) => setSchedule(scheduledDate, e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Address (if delivery) */}
                {orderType === "delivery" && (
                  <Card className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Delivery Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Delivery Address</Label>
                        <Input
                          id="address"
                          placeholder="Enter your full address"
                          value={deliveryAddress || ""}
                          onChange={(e) => setDeliveryAddress(e.target.value)}
                          className="bg-input border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instructions">Delivery Instructions (optional)</Label>
                        <Textarea
                          id="instructions"
                          placeholder="E.g., Ring doorbell, leave at door..."
                          value={deliveryInstructions || ""}
                          onChange={(e) => setDeliveryInstructions(e.target.value)}
                          className="bg-input border-border resize-none"
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Special Requests */}
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Special Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Any allergies or special requests?"
                      value={specialRequests || ""}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="bg-input border-border resize-none"
                      rows={3}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-border bg-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax (8%)</span>
                        <span className="text-foreground">${tax.toFixed(2)}</span>
                      </div>
                      {orderType === "delivery" && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Delivery Fee</span>
                          <span className="text-foreground">
                            {deliveryFee === 0 ? (
                              <span className="text-primary">FREE</span>
                            ) : (
                              `$${deliveryFee.toFixed(2)}`
                            )}
                          </span>
                        </div>
                      )}
                      
                      <Separator className="bg-border" />
                      
                      <div className="flex justify-between font-semibold">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary text-lg">${total.toFixed(2)}</span>
                      </div>

                      {orderType === "delivery" && subtotal < 50 && (
                        <p className="text-xs text-muted-foreground">
                          Add ${(50 - subtotal).toFixed(2)} more for free delivery
                        </p>
                      )}

                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Proceed to Checkout
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Secure checkout powered by Stripe
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
