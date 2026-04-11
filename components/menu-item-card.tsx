"use client"

import Image from "next/image"
import { Plus, Clock, Users, Leaf, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/cart-store"
import type { MenuItem } from "@/lib/types"

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart?: () => void
}

const dietaryIcons: Record<string, { icon: typeof Leaf; label: string }> = {
  vegetarian: { icon: Leaf, label: "Vegetarian" },
  vegan: { icon: Leaf, label: "Vegan" },
  spicy: { icon: Flame, label: "Spicy" },
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(item)
    onAddToCart?.()
  }

  return (
    <Card className="group overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
            <span className="text-4xl">🍽️</span>
          </div>
        )}
        
        {/* Featured Badge */}
        {item.is_featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}

        {/* Dietary Tags */}
        {item.dietary_tags && item.dietary_tags.length > 0 && (
          <div className="absolute top-3 right-3 flex gap-1">
            {item.dietary_tags.map((tag) => {
              const dietary = dietaryIcons[tag.toLowerCase()]
              if (!dietary) return null
              return (
                <div
                  key={tag}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm"
                  title={dietary.label}
                >
                  <dietary.icon className="h-4 w-4 text-primary" />
                </div>
              )
            })}
          </div>
        )}

        {/* Quick Add Button (Hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
          <Button
            onClick={handleAddToCart}
            disabled={!item.is_available}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Title & Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
          <span className="shrink-0 font-bold text-primary">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Meta Info */}
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{item.prep_time_minutes} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>Serves {item.serves_count}</span>
          </div>
        </div>

        {/* Availability */}
        {!item.is_available && (
          <div className="mt-3 rounded-md bg-destructive/10 px-3 py-1.5 text-center text-sm text-destructive">
            Currently Unavailable
          </div>
        )}
      </CardContent>
    </Card>
  )
}
