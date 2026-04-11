import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItem, MenuItem } from './types'

interface CartStore {
  items: CartItem[]
  orderType: 'individual' | 'catering' | 'delivery'
  scheduledDate: string | null
  scheduledTime: string | null
  guestCount: number | null
  deliveryAddress: string | null
  deliveryInstructions: string | null
  specialRequests: string | null
  
  addItem: (menuItem: MenuItem, quantity?: number, customizations?: Record<string, string>) => void
  removeItem: (menuItemId: string) => void
  updateQuantity: (menuItemId: string, quantity: number) => void
  clearCart: () => void
  setOrderType: (type: 'individual' | 'catering' | 'delivery') => void
  setSchedule: (date: string | null, time: string | null) => void
  setGuestCount: (count: number | null) => void
  setDeliveryAddress: (address: string | null) => void
  setDeliveryInstructions: (instructions: string | null) => void
  setSpecialRequests: (requests: string | null) => void
  
  getSubtotal: () => number
  getTax: () => number
  getDeliveryFee: () => number
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: 'individual',
      scheduledDate: null,
      scheduledTime: null,
      guestCount: null,
      deliveryAddress: null,
      deliveryInstructions: null,
      specialRequests: null,
      
      addItem: (menuItem, quantity = 1, customizations) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.menuItem.id === menuItem.id
          )
          
          if (existingIndex > -1) {
            const newItems = [...state.items]
            newItems[existingIndex].quantity += quantity
            return { items: newItems }
          }
          
          return {
            items: [...state.items, { menuItem, quantity, customizations }]
          }
        })
      },
      
      removeItem: (menuItemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.menuItem.id !== menuItemId)
        }))
      },
      
      updateQuantity: (menuItemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(menuItemId)
          return
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.menuItem.id === menuItemId
              ? { ...item, quantity }
              : item
          )
        }))
      },
      
      clearCart: () => {
        set({
          items: [],
          scheduledDate: null,
          scheduledTime: null,
          guestCount: null,
          deliveryAddress: null,
          deliveryInstructions: null,
          specialRequests: null,
        })
      },
      
      setOrderType: (type) => set({ orderType: type }),
      setSchedule: (date, time) => set({ scheduledDate: date, scheduledTime: time }),
      setGuestCount: (count) => set({ guestCount: count }),
      setDeliveryAddress: (address) => set({ deliveryAddress: address }),
      setDeliveryInstructions: (instructions) => set({ deliveryInstructions: instructions }),
      setSpecialRequests: (requests) => set({ specialRequests: requests }),
      
      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.menuItem.price * item.quantity,
          0
        )
      },
      
      getTax: () => {
        return get().getSubtotal() * 0.08 // 8% tax
      },
      
      getDeliveryFee: () => {
        const { orderType, items } = get()
        if (orderType !== 'delivery' || items.length === 0) return 0
        const subtotal = get().getSubtotal()
        return subtotal >= 50 ? 0 : 5.99
      },
      
      getTotal: () => {
        return get().getSubtotal() + get().getTax() + get().getDeliveryFee()
      },
      
      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'ostwise-cart',
    }
  )
)
