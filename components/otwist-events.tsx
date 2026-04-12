"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Clock, ArrowRight, Sparkles, Gift, Star, Ticket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const upcomingEvents = [
  {
    id: "1",
    title: "Spring Food Festival",
    date: "April 15, 2026",
    time: "11:00 AM - 8:00 PM",
    location: "Downtown Convention Center",
    spots: 120,
    spotsLeft: 34,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    type: "festival",
    featured: true,
  },
  {
    id: "2",
    title: "Wine & Dine Experience",
    date: "April 22, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Ostwise Rooftop Lounge",
    spots: 50,
    spotsLeft: 12,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    type: "exclusive",
    featured: false,
  },
  {
    id: "3",
    title: "Chef&apos;s Table: Italian Night",
    date: "April 28, 2026",
    time: "7:00 PM - 11:00 PM",
    location: "Ostwise Main Kitchen",
    spots: 24,
    spotsLeft: 6,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    type: "exclusive",
    featured: true,
  },
]

const rewardsPerks = [
  {
    icon: Gift,
    title: "Birthday Rewards",
    description: "Free dessert platter on your special day",
  },
  {
    icon: Star,
    title: "VIP Early Access",
    description: "Book exclusive events before everyone else",
  },
  {
    icon: Ticket,
    title: "Event Discounts",
    description: "Up to 25% off on all Ostwise Events",
  },
]

export function OtwistEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Ostwise Events</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Exclusive Culinary Experiences
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
              Join our signature events featuring world-class cuisine, live cooking demonstrations, 
              and unforgettable dining experiences curated by our award-winning chefs.
            </p>
          </div>
          <Link href="/events">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="group overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {event.featured && (
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  {event.type === "exclusive" && (
                    <Badge variant="outline" className="border-primary/50 bg-background/80 backdrop-blur-sm">
                      Exclusive
                    </Badge>
                  )}
                </div>

                {/* Spots Left */}
                <div className="absolute bottom-4 right-4">
                  <div className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-sm font-medium">
                    <span className="text-primary">{event.spotsLeft}</span>
                    <span className="text-muted-foreground"> spots left</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.spots} guests
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Reserve Spot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rewards Program CTA */}
        <div className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Star className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Ostwise Rewards</h3>
                  <p className="text-sm text-muted-foreground">Join 50,000+ members</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-xl text-pretty">
                Earn points on every order and event booking. Unlock exclusive perks, 
                early access to events, and special member-only experiences.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {rewardsPerks.map((perk) => (
                  <div key={perk.title} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/20">
                      <perk.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{perk.title}</h4>
                      <p className="text-xs text-muted-foreground">{perk.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/auth/sign-up">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full lg:w-auto">
                  Join Rewards Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <p className="text-xs text-muted-foreground text-center lg:text-right">
                Free to join. Instant rewards on sign-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
