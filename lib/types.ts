export interface Category {
  id: string
  name: string
  description: string | null
  image_url: string | null
  display_order: number
}

export interface MenuItem {
  id: string
  category_id: string | null
  name: string
  description: string | null
  price: number
  image_url: string | null
  is_available: boolean
  is_featured: boolean
  serves_count: number
  prep_time_minutes: number
  dietary_tags: string[]
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
  customizations?: Record<string, string>
}

export interface Order {
  id: string
  user_id: string
  order_number: string
  order_type: 'individual' | 'catering' | 'delivery'
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'out_for_delivery' | 'delivered' | 'cancelled'
  subtotal: number
  tax: number
  delivery_fee: number
  total: number
  delivery_address: string | null
  delivery_instructions: string | null
  scheduled_date: string | null
  scheduled_time: string | null
  guest_count: number | null
  special_requests: string | null
  payment_status: 'pending' | 'paid' | 'refunded'
  payment_method: string | null
  created_at: string
  updated_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  menu_item_id: string
  quantity: number
  unit_price: number
  total_price: number
  customizations: Record<string, string>
  menu_item?: MenuItem
}

export interface DeliveryTracking {
  id: string
  order_id: string
  status: string
  location_lat: number | null
  location_lng: number | null
  estimated_arrival: string | null
  driver_name: string | null
  driver_phone: string | null
  notes: string | null
  created_at: string
}

export interface Profile {
  id: string
  full_name: string | null
  phone: string | null
  address: string | null
  created_at: string
  updated_at: string
}
