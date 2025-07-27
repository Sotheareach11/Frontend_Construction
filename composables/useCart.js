// composables/useCart.js
export const useCartStore = () => {
  // State that persists across page navigation
  const cartItems = useState('cart.items', () => [])

  // Load from localStorage on first access
  if (process.client && cartItems.value.length === 0) {
    const saved = localStorage.getItem('cart')
    if (saved) {
      cartItems.value = JSON.parse(saved)
    }
  }

  // Save to localStorage whenever cart changes
  const saveToStorage = () => {
    if (process.client) {
      localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }
  }

  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
    saveToStorage()
  }

  const removeFromCart = (productId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== productId)
    saveToStorage()
  }

  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
        saveToStorage()
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
    saveToStorage()
  }

  const loadFromStorage = () => {
    if (process.client) {
      const saved = localStorage.getItem('cart')
      if (saved) {
        cartItems.value = JSON.parse(saved)
      }
    }
  }

  const cartCount = computed(() => cartItems.value.length)
  const totalAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  return {
    items: readonly(cartItems),
    cartCount,
    totalAmount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    loadFromStorage
  }
}