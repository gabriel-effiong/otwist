"use client"

import Link from "next/link"
import { ArrowRight, Utensils, Clock, Users, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Utensils,
    title: "Premium Menu",
    description: "Crafted by expert chefs",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Always punctual service",
  },
  {
    icon: Users,
    title: "Any Event Size",
    description: "10 to 1000+ guests",
  },
  {
    icon: Truck,
    title: "Live Tracking",
    description: "Real-time order updates",
  },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now serving your area
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block text-balance">Exceptional Catering for</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Unforgettable Events
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
            From intimate gatherings to grand celebrations, Ostwise Event delivers 
            culinary excellence right to your doorstep. Experience premium catering 
            with real-time tracking and seamless ordering.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="/menu">
              <Button size="lg" className="group h-14 px-8 text-lg bg-primary hover:bg-primary/90">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/catering">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/30 hover:bg-primary/10">
                Book Catering
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">10K+</div>
              <div className="mt-1 text-sm text-muted-foreground">Events Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">4.9</div>
              <div className="mt-1 text-sm text-muted-foreground">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">99%</div>
              <div className="mt-1 text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
