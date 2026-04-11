"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Search,
  Filter,
  Star,
  ChefHat,
  Wine,
  Music,
  Utensils
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const allEvents = [
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
    category: "Festival",
    price: 45,
    featured: true,
    description: "Experience a culinary journey featuring cuisines from around the world with live cooking demonstrations and tastings.",
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
    category: "Wine Tasting",
    price: 125,
    featured: false,
    description: "An intimate evening of premium wines paired with exquisite dishes crafted by our executive chef.",
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
    category: "Chef&apos;s Table",
    price: 200,
    featured: true,
    description: "An exclusive dining experience at the chef&apos;s table featuring a 7-course Italian tasting menu.",
  },
  {
    id: "4",
    title: "Sunday Jazz Brunch",
    date: "Every Sunday",
    time: "10:00 AM - 2:00 PM",
    location: "Ostwise Garden Terrace",
    spots: 80,
    spotsLeft: 45,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    type: "recurring",
    category: "Brunch",
    price: 65,
    featured: false,
    description: "A relaxed Sunday brunch with live jazz music, champagne, and an array of gourmet breakfast dishes.",
  },
  {
    id: "5",
    title: "Cooking Masterclass: Sushi",
    date: "May 5, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Ostwise Culinary Studio",
    spots: 16,
    spotsLeft: 8,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    type: "workshop",
    category: "Cooking Class",
    price: 150,
    featured: true,
    description: "Learn the art of sushi making from our master sushi chef in this hands-on workshop.",
  },
  {
    id: "6",
    title: "Farm-to-Table Dinner",
    date: "May 12, 2026",
    time: "6:30 PM - 10:00 PM",
    location: "Harvest Valley Farm",
    spots: 40,
    spotsLeft: 22,
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
    type: "special",
    category: "Special Dinner",
    price: 175,
    featured: false,
    description: "A unique dining experience set in a working farm featuring locally sourced ingredients.",
  },
]

const categories = [
  { value: "all", label: "All Events", icon: Sparkles },
  { value: "Festival", label: "Festivals", icon: Music },
  { value: "Wine Tasting", label: "Wine Tasting", icon: Wine },
  { value: "Chef's Table", label: "Chef's Table", icon: ChefHat },
  { value: "Brunch", label: "Brunch", icon: Utensils },
  { value: "Cooking Class", label: "Cooking Classes", icon: ChefHat },
  { value: "Special Dinner", label: "Special Dinners", icon: Star },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const filteredEvents = allEvents
    .filter((event) => {
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "spots") return a.spotsLeft - b.spotsLeft
      return 0 // date sorting would need proper date parsing
    })

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto max-w-7xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Ostwise Events</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Exclusive Culinary
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
            Discover our signature events featuring world-class cuisine, live cooking demonstrations, 
            wine tastings, and unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-md z-40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-[200px] bg-card border-border">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    <span className="flex items-center gap-2">
                      <cat.icon className="h-4 w-4" />
                      {cat.label}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-[180px] bg-card border-border">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="spots">Spots Left</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Pills (Desktop) */}
          <div className="hidden lg:flex gap-2 mt-4 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.value)}
                className={selectedCategory === cat.value 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:bg-primary/10 hover:border-primary/30"
                }
              >
                <cat.icon className="h-4 w-4 mr-1" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="group overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {event.featured && (
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    )}
                    <Badge variant="outline" className="border-primary/50 bg-background/80 backdrop-blur-sm">
                      {event.category}
                    </Badge>
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <div className="rounded-lg bg-background/90 backdrop-blur-sm px-3 py-1.5">
                      <span className="text-lg font-bold text-primary">${event.price}</span>
                      <span className="text-xs text-muted-foreground">/person</span>
                    </div>
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
                  
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {event.description}
                  </p>

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
                      {event.spots} guests max
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Reserve
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                <Calendar className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">No events found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Host Your Own Event
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Looking to host a private event? Our team will work with you to create 
            a custom culinary experience tailored to your vision.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/catering">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Plan Your Event
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
