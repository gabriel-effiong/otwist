"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MenuItemCard } from "./menu-item-card"
import type { MenuItem } from "@/lib/types"

interface FeaturedItemsProps {
  items: MenuItem[]
}

export function FeaturedItems({ items }: FeaturedItemsProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium text-primary">Our Specialties</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Dishes
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            Discover our most loved creations, crafted with premium ingredients 
            and culinary expertise for an unforgettable dining experience.
          </p>
        </div>

        {/* Items Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/menu">
            <Button variant="outline" size="lg" className="group border-primary/30 hover:bg-primary/10">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
