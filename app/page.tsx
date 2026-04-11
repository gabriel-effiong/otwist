import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedItems } from "@/components/featured-items"
import { ServicesSection } from "@/components/services-section"
import { OstwiseEvents } from "@/components/ostwise-events"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import type { MenuItem } from "@/lib/types"

// Mock featured items for initial display
const featuredItems: MenuItem[] = [
  {
    id: "1",
    category_id: "appetizers",
    name: "Truffle Mushroom Bruschetta",
    description: "Crispy artisan bread topped with sauteed wild mushrooms, truffle oil, and aged parmesan",
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
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedItems items={featuredItems} />
      <ServicesSection />
      <OstwiseEvents />
      <Testimonials />
      <Footer />
    </main>
  )
}
