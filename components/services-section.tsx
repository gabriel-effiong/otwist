import Link from "next/link"
import { UtensilsCrossed, Building2, Truck, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Individual Orders",
    description: "Fresh, chef-prepared meals delivered to your door. Perfect for personal dining or family meals.",
    icon: UtensilsCrossed,
    href: "/menu",
    features: ["Daily specials", "Family portions", "Dietary options"],
  },
  {
    title: "Corporate Catering",
    description: "Professional catering solutions for business events, meetings, and corporate functions.",
    icon: Building2,
    href: "/catering",
    features: ["Custom menus", "Full service", "Any group size"],
  },
  {
    title: "Event Delivery",
    description: "Seamless food delivery for your special occasions with real-time tracking and precise timing.",
    icon: Truck,
    href: "/delivery",
    features: ["Live tracking", "Scheduled delivery", "Setup included"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium text-primary">What We Offer</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            From quick individual orders to large-scale event catering, 
            we have the perfect solution for every occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <CardContent className="relative p-8">
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={service.href} className="mt-8 block">
                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
