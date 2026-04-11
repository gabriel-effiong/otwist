"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Wedding Planner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    rating: 5,
    text: "Ostwise Event transformed our client's wedding reception into an unforgettable culinary journey. The attention to detail and quality of service exceeded all expectations. Their team handled everything flawlessly.",
    eventType: "Wedding Catering",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Corporate Events Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 5,
    text: "We've partnered with Ostwise for all our corporate events. Their professionalism, punctuality, and the quality of food are consistently outstanding. Real-time tracking gives us peace of mind every time.",
    eventType: "Corporate Events",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Event Host",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    text: "The delivery was right on time, the food was absolutely divine, and their tracking system kept me informed every step of the way. My dinner party was a huge success thanks to Ostwise!",
    eventType: "Private Dinner",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Restaurant Owner",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    text: "As someone in the food industry, I have high standards. Ostwise not only met them but exceeded them. Their menu customization options and execution are simply world-class.",
    eventType: "Special Occasions",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            Join thousands of satisfied customers who trust Ostwise Event 
            for their most important occasions.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Quote className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative overflow-hidden">
              <div 
                className="transition-all duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id} 
                      className="w-full flex-shrink-0 px-4"
                    >
                      <blockquote className="text-center">
                        <p className="text-xl leading-relaxed text-foreground sm:text-2xl font-medium text-balance">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>

                        {/* Rating */}
                        <div className="mt-8 flex justify-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Author */}
                        <div className="mt-8 flex flex-col items-center">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="h-16 w-16 rounded-full object-cover ring-4 ring-primary/20"
                          />
                          <div className="mt-4 text-center">
                            <div className="font-semibold text-foreground">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            <div className="mt-1 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {testimonial.eventType}
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="h-12 w-12 rounded-full border-border hover:bg-primary/10 hover:border-primary/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "w-8 bg-primary" 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="h-12 w-12 rounded-full border-border hover:bg-primary/10 hover:border-primary/30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "10K+", label: "Events Catered" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
