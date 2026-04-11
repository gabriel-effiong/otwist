"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Calendar, MapPin, UtensilsCrossed, Sparkles, CheckCircle, Building2, PartyPopper, Heart } from "lucide-react"

const eventTypes = [
  { id: "corporate", label: "Corporate Event", icon: Building2 },
  { id: "wedding", label: "Wedding", icon: Heart },
  { id: "party", label: "Private Party", icon: PartyPopper },
  { id: "other", label: "Other", icon: Sparkles },
]

const packages = [
  {
    name: "Essential",
    price: "Starting at $25/person",
    description: "Perfect for casual gatherings",
    features: [
      "3 appetizer selections",
      "2 main course options",
      "Basic table setup",
      "Disposable servingware",
    ],
  },
  {
    name: "Premium",
    price: "Starting at $45/person",
    description: "Our most popular choice",
    features: [
      "5 appetizer selections",
      "3 main course options",
      "2 dessert choices",
      "Professional table setup",
      "Premium servingware",
      "Dedicated event coordinator",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "Starting at $75/person",
    description: "The ultimate experience",
    features: [
      "Unlimited appetizer selections",
      "5 main course options",
      "Full dessert bar",
      "Live cooking stations",
      "Fine china & crystal",
      "Full service staff",
      "Event planning consultation",
    ],
  },
]

export default function CateringPage() {
  const [selectedEventType, setSelectedEventType] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-primary">Catering Services</span>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Elevate Your Event
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              From intimate gatherings to grand celebrations, our expert culinary team 
              creates unforgettable dining experiences tailored to your vision.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "500+", label: "Events Catered" },
              { value: "50K+", label: "Happy Guests" },
              { value: "15+", label: "Years Experience" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Catering Packages</h2>
            <p className="mt-4 text-muted-foreground">Choose a package that fits your needs</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative border-border bg-card transition-all hover:shadow-lg ${
                  pkg.popular ? "border-primary shadow-primary/10" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4 text-2xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-card/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Request a Quote</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your event and we&apos;ll create a custom proposal
            </p>
          </div>

          {submitted ? (
            <Card className="border-primary bg-primary/5">
              <CardContent className="flex flex-col items-center py-12">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Request Submitted!</h3>
                <p className="mt-2 text-muted-foreground text-center max-w-md">
                  Thank you for your interest. Our catering team will contact you within 24 hours to discuss your event.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Event Type */}
                  <div className="space-y-3">
                    <Label>Event Type</Label>
                    <RadioGroup
                      value={selectedEventType}
                      onValueChange={setSelectedEventType}
                      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
                    >
                      {eventTypes.map((type) => (
                        <Label
                          key={type.id}
                          htmlFor={type.id}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg border cursor-pointer transition-all ${
                            selectedEventType === type.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                          <type.icon className={`h-5 w-5 ${selectedEventType === type.id ? "text-primary" : "text-muted-foreground"}`} />
                          <span className={`text-xs font-medium text-center ${selectedEventType === type.id ? "text-primary" : "text-foreground"}`}>
                            {type.label}
                          </span>
                        </Label>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Contact Info */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required className="bg-input border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="bg-input border-border" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" className="bg-input border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input id="company" placeholder="Company name" className="bg-input border-border" />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        Event Date
                      </Label>
                      <Input id="date" type="date" required className="bg-input border-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        Guest Count
                      </Label>
                      <Select value={guestCount} onValueChange={setGuestCount}>
                        <SelectTrigger className="bg-input border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-25">10-25 guests</SelectItem>
                          <SelectItem value="25-50">25-50 guests</SelectItem>
                          <SelectItem value="50-100">50-100 guests</SelectItem>
                          <SelectItem value="100-200">100-200 guests</SelectItem>
                          <SelectItem value="200+">200+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="flex items-center gap-2">
                        <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                        Budget Range
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-input border-border">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      Event Location
                    </Label>
                    <Input id="location" placeholder="Venue name and address" className="bg-input border-border" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Additional Details</Label>
                    <Textarea
                      id="details"
                      placeholder="Tell us about your event, menu preferences, dietary requirements, etc."
                      rows={4}
                      className="bg-input border-border resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground">
                    Submit Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
