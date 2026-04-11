"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MenuItemCard } from "@/components/menu-item-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import type { MenuItem, Category } from "@/lib/types"

// Mock data
const categories: Category[] = [
  { id: "all", name: "All Items", description: null, image_url: null, display_order: 0 },
  { id: "appetizers", name: "Appetizers", description: "Start your meal right", image_url: null, display_order: 1 },
  { id: "mains", name: "Main Courses", description: "Hearty and satisfying", image_url: null, display_order: 2 },
  { id: "sides", name: "Sides", description: "Perfect accompaniments", image_url: null, display_order: 3 },
  { id: "desserts", name: "Desserts", description: "Sweet endings", image_url: null, display_order: 4 },
  { id: "beverages", name: "Beverages", description: "Refreshing drinks", image_url: null, display_order: 5 },
]

const menuItems: MenuItem[] = [
  {
    id: "1",
    category_id: "appetizers",
    name: "Truffle Mushroom Bruschetta",
    description: "Crispy artisan bread topped with sautéed wild mushrooms, truffle oil, and aged parmesan",
    price: 16.99,
    image_url: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 2,
    prep_time_minutes: 15,
    dietary_tags: ["vegetarian"],
  },
  {
    id: "2",
    category_id: "mains",
    name: "Herb-Crusted Prime Ribeye",
    description: "Premium 14oz ribeye with rosemary butter, roasted garlic mash, and seasonal vegetables",
    price: 45.99,
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 1,
    prep_time_minutes: 35,
    dietary_tags: [],
  },
  {
    id: "3",
    category_id: "mains",
    name: "Pan-Seared Atlantic Salmon",
    description: "Fresh salmon with lemon caper sauce, quinoa pilaf, and grilled asparagus",
    price: 34.99,
    image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 1,
    prep_time_minutes: 25,
    dietary_tags: [],
  },
  {
    id: "4",
    category_id: "desserts",
    name: "Dark Chocolate Lava Cake",
    description: "Warm molten chocolate cake with vanilla bean ice cream and raspberry coulis",
    price: 14.99,
    image_url: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 1,
    prep_time_minutes: 20,
    dietary_tags: ["vegetarian"],
  },
  {
    id: "5",
    category_id: "appetizers",
    name: "Mediterranean Mezze Platter",
    description: "House-made hummus, baba ganoush, feta, olives, and warm pita bread",
    price: 22.99,
    image_url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 4,
    prep_time_minutes: 15,
    dietary_tags: ["vegetarian"],
  },
  {
    id: "6",
    category_id: "mains",
    name: "Spicy Thai Basil Chicken",
    description: "Wok-fried chicken with Thai basil, chilies, and jasmine rice",
    price: 24.99,
    image_url: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    is_available: true,
    is_featured: true,
    serves_count: 1,
    prep_time_minutes: 20,
    dietary_tags: ["spicy"],
  },
  {
    id: "7",
    category_id: "appetizers",
    name: "Crispy Calamari",
    description: "Golden fried calamari with marinara sauce and lemon aioli",
    price: 18.99,
    image_url: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 2,
    prep_time_minutes: 15,
    dietary_tags: [],
  },
  {
    id: "8",
    category_id: "mains",
    name: "Grilled Lamb Chops",
    description: "New Zealand lamb chops with mint chimichurri and roasted potatoes",
    price: 42.99,
    image_url: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 1,
    prep_time_minutes: 30,
    dietary_tags: [],
  },
  {
    id: "9",
    category_id: "sides",
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries with truffle oil and grated parmesan",
    price: 12.99,
    image_url: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 2,
    prep_time_minutes: 10,
    dietary_tags: ["vegetarian"],
  },
  {
    id: "10",
    category_id: "sides",
    name: "Grilled Asparagus",
    description: "Fresh asparagus with lemon zest and olive oil",
    price: 9.99,
    image_url: "https://images.unsplash.com/photo-1515471209610-dae1c92d8777?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 2,
    prep_time_minutes: 10,
    dietary_tags: ["vegan"],
  },
  {
    id: "11",
    category_id: "desserts",
    name: "New York Cheesecake",
    description: "Classic creamy cheesecake with berry compote",
    price: 12.99,
    image_url: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 1,
    prep_time_minutes: 5,
    dietary_tags: ["vegetarian"],
  },
  {
    id: "12",
    category_id: "beverages",
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh mint",
    price: 5.99,
    image_url: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800&q=80",
    is_available: true,
    is_featured: false,
    serves_count: 1,
    prep_time_minutes: 5,
    dietary_tags: ["vegan"],
  },
]

const dietaryFilters = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "spicy", label: "Spicy" },
]

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredItems = menuItems.filter((item) => {
    // Category filter
    if (selectedCategory !== "all" && item.category_id !== selectedCategory) {
      return false
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      if (
        !item.name.toLowerCase().includes(query) &&
        !item.description?.toLowerCase().includes(query)
      ) {
        return false
      }
    }

    // Dietary filter
    if (selectedDietary.length > 0) {
      const hasMatchingTag = selectedDietary.some((diet) =>
        item.dietary_tags.map((t) => t.toLowerCase()).includes(diet)
      )
      if (!hasMatchingTag) return false
    }

    return true
  })

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedDietary([])
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedDietary.length > 0

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our curated selection of dishes, crafted with passion and premium ingredients
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="sm:hidden border-border">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                  {hasActiveFilters && (
                    <Badge className="ml-2 bg-primary text-primary-foreground">
                      Active
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[70vh] bg-background">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedCategory(category.id)}
                          className={selectedCategory === category.id ? "bg-primary" : "border-border"}
                        >
                          {category.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Dietary */}
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-3">Dietary</h3>
                    <div className="space-y-2">
                      {dietaryFilters.map((filter) => (
                        <div key={filter.id} className="flex items-center gap-2">
                          <Checkbox
                            id={filter.id}
                            checked={selectedDietary.includes(filter.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedDietary([...selectedDietary, filter.id])
                              } else {
                                setSelectedDietary(selectedDietary.filter((d) => d !== filter.id))
                              }
                            }}
                          />
                          <Label htmlFor={filter.id}>{filter.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <Button variant="ghost" onClick={clearFilters} className="w-full">
                      Clear All Filters
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden sm:block w-64 shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Categories</h3>
                  <div className="flex flex-col gap-1">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`justify-start ${
                          selectedCategory === category.id
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Dietary */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Dietary</h3>
                  <div className="space-y-2">
                    {dietaryFilters.map((filter) => (
                      <div key={filter.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`desktop-${filter.id}`}
                          checked={selectedDietary.includes(filter.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedDietary([...selectedDietary, filter.id])
                            } else {
                              setSelectedDietary(selectedDietary.filter((d) => d !== filter.id))
                            }
                          }}
                        />
                        <Label htmlFor={`desktop-${filter.id}`} className="text-sm text-muted-foreground">
                          {filter.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full text-muted-foreground">
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Menu Grid */}
            <div className="flex-1">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {selectedCategory !== "all" && (
                    <Badge variant="secondary" className="gap-1">
                      {categories.find((c) => c.id === selectedCategory)?.name}
                      <button onClick={() => setSelectedCategory("all")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedDietary.map((diet) => (
                    <Badge key={diet} variant="secondary" className="gap-1">
                      {dietaryFilters.find((d) => d.id === diet)?.label}
                      <button onClick={() => setSelectedDietary(selectedDietary.filter((d) => d !== diet))}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              {/* Results Count */}
              <p className="mb-6 text-sm text-muted-foreground">
                Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
              </p>

              {/* Grid */}
              {filteredItems.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredItems.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h3 className="text-lg font-semibold text-foreground">No items found</h3>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters} variant="outline" className="mt-4">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
