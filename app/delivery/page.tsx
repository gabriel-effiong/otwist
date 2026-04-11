import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Clock, MapPin, Shield, CheckCircle, ArrowRight } from "lucide-react"

const deliveryFeatures = [
  {
    icon: Truck,
    title: "Real-Time Tracking",
    description: "Follow your order from kitchen to doorstep with live GPS tracking",
  },
  {
    icon: Clock,
    title: "Scheduled Delivery",
    description: "Plan ahead and schedule your delivery for the perfect time",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Contactless delivery options and food safety guaranteed",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving the greater metro area with reliable delivery",
  },
]

const deliveryZones = [
  { zone: "Zone 1", areas: "Downtown, Midtown, Financial District", fee: "Free", minOrder: "$25" },
  { zone: "Zone 2", areas: "Upper East, Upper West, Chelsea", fee: "$3.99", minOrder: "$30" },
  { zone: "Zone 3", areas: "Brooklyn, Queens, Bronx", fee: "$5.99", minOrder: "$40" },
  { zone: "Zone 4", areas: "Extended Metro Area", fee: "$8.99", minOrder: "$50" },
]

const steps = [
  { step: 1, title: "Browse & Order", description: "Choose your favorite dishes from our menu" },
  { step: 2, title: "Schedule Delivery", description: "Pick a date and time that works for you" },
  { step: 3, title: "Track in Real-Time", description: "Watch your order on its way to you" },
  { step: 4, title: "Enjoy!", description: "Receive and enjoy your delicious meal" },
]

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-medium text-primary">Delivery Service</span>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Fresh Food, <span className="text-primary">Delivered Fast</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Experience restaurant-quality meals delivered right to your door. 
                Track your order in real-time and enjoy contactless delivery options.
              </p>
              
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/menu">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Order Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/track">
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                    Track My Order
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-primary">30 min</div>
                  <div className="text-sm text-muted-foreground">Avg. Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">On-Time Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Free</div>
                  <div className="text-sm text-muted-foreground">Orders $50+</div>
                </div>
              </div>
            </div>

            {/* Delivery Illustration */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 lg:p-12">
                <div className="relative h-full w-full rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <Truck className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-sm text-muted-foreground">Live tracking available</div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 rounded-lg bg-card border border-border p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">Order on the way</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-lg bg-card border border-border p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">ETA: 15 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Why Choose Our Delivery</h2>
            <p className="mt-4 text-muted-foreground">Fast, reliable, and always fresh</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryFeatures.map((feature) => (
              <Card key={feature.title} className="border-border bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">Getting your food delivered is easy</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Delivery Zones</h2>
            <p className="mt-4 text-muted-foreground">Check delivery fees for your area</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Zone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground hidden sm:table-cell">Areas</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Delivery Fee</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Min. Order</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {deliveryZones.map((zone) => (
                  <tr key={zone.zone}>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{zone.zone}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground hidden sm:table-cell">{zone.areas}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={zone.fee === "Free" ? "text-primary font-medium" : "text-foreground"}>
                        {zone.fee}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{zone.minOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-muted-foreground text-center">
            Free delivery on orders over $50 within Zone 1 and 2
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">Ready to Order?</h2>
          <p className="mt-4 text-muted-foreground">
            Browse our menu and get delicious food delivered to your door
          </p>
          <Link href="/menu">
            <Button size="lg" className="mt-8 bg-primary text-primary-foreground">
              Start Your Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
