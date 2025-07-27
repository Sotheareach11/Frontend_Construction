<template>
  <div>
    <Header />

    <div class="container mx-auto px-4 py-4">
      <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>

      <!-- Empty Cart State -->
      <div v-if="cartStore.cartCount === 0" class="text-center py-12">
        <div class="text-gray-400 mb-4">
          <i class="fas fa-shopping-cart text-6xl"></i>
        </div>
        <h2 class="text-xl font-semibold text-gray-600 mb-4">
          Your cart is empty
        </h2>
        <p class="text-gray-500 mb-6">
          Looks like you haven't added any items to your cart yet.
        </p>
        <NuxtLink
          to="/products"
          class="bg-[#11A79F] text-white px-8 py-3 rounded-lg hover:bg-[#0e8a82] transition-colors"
        >
          Start Shopping
        </NuxtLink>
      </div>

      <!-- Cart Items -->
      <div v-else class="grid lg:grid-cols-3 gap-8">
        <!-- Cart Items List -->
        <div class="lg:col-span-2">
          <div class="bg-[#00000039] rounded-lg shadow-md overflow-hidden p-4">
            <div class="p-4 border-b">
              <h2 class="text-lg font-semibold">
                Cart Items ({{ cartStore.cartCount }})
              </h2>
            </div>

            <div class="divide-y">
              <div
                v-for="item in dataStore"
                :key="item?.id"
                class="p-4 flex items-center gap-4"
              >
                <!-- Product Image -->
                <div class="flex-shrink-0">
                  <img
                    :src="item?.imageUrl || '../../assets/img/logo.png'"
                    :alt="item?.name"
                    class="w-20 h-20 object-cover rounded-lg"
                  />
                </div>

                <!-- Product Info -->
                <div class="flex-grow">
                  <h3 class="font-semibold text-lg">{{ item?.name }}</h3>
                  <p class="text-gray-600">
                    {{ item?.description || "Construction Material" }}
                  </p>
                  <p class="text-[#11A79F] font-bold text-xl">
                    ${{ item?.price }}
                  </p>
                </div>

                <!-- Quantity Controls -->
                <div class="flex items-center gap-3">
                  <div class="flex items-center border rounded-lg">
                    <button
                      @click="updateQuantity(item?.id, item?.quantity - 1)"
                      class="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                      :disabled="item?.quantity <= 1"
                    >
                      <i class="fas fa-minus"></i>
                    </button>
                    <span class="px-4 py-2 border-x min-w-[3rem] text-center">{{
                      item?.quantity
                    }}</span>
                    <button
                      @click="updateQuantity(item?.id, item?.quantity + 1)"
                      class="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>

                  <button
                    @click="removeFromCart(item?.id)"
                    class="cursor-pointer p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                    title="Remove item"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>

                <!-- Item Total -->
                <!-- <div class="text-right">
                <p class="font-semibold text-lg">
                  ${{ (item?.price * item?.quantity).toFixed(2) }}
                </p>
              </div> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-[#00000039] rounded-lg shadow-md p-6 sticky top-4">
            <h2 class="text-lg font-semibold mb-4">Order Summary</h2>

            <!-- <div class="space-y-3 mb-4">
            <div class="flex justify-between">
              <span>Subtotal ({{ cartStore.totalItems }} items)</span>
              <span>${{ cartStore.totalAmount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span class="text-green-600">Free</span>
            </div>
            <div class="flex justify-between">
              <span>Tax</span>
              <span>${{ (cartStore.totalAmount * 0.1).toFixed(2) }}</span>
            </div>
            <hr />
            <div class="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span class="text-[#11A79F]"
                >${{ (cartStore.totalAmount * 1.1).toFixed(2) }}</span
              >
            </div>
          </div> -->

            <div class="space-y-3">
              <button
                class="w-full bg-[#11A79F] text-white py-3 rounded-lg hover:bg-[#0e8a82] transition-colors font-semibold"
                @click="proceedToCheckout"
              >
                Proceed to Checkout
              </button>

              <button
                @click="clearCart"
                class="w-full border border-red-500 text-red-500 py-3 rounded-lg hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>

              <NuxtLink
                to="/products"
                class="block w-full text-center text-[#11A79F] py-2 hover:underline"
              >
                Continue Shopping
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Use the cart store
import { useCartStore } from "~/composables/useCart";
const cartStore = useCartStore();
const dataStore = ref([]);

// Load cart data when page loads
onMounted(() => {
  cartStore.loadFromStorage();
  dataStore.value = cartStore.items.value;
});

const updateQuantity = (productId, newQuantity) => {
  cartStore.updateQuantity(productId, newQuantity);
  dataStore.value = cartStore.items.value;
};

const removeFromCart = (productId) => {
  cartStore.removeFromCart(productId);
  dataStore.value = cartStore.items.value;
};

const clearCart = () => {
  if (confirm("Are you sure you want to clear your cart?")) {
    cartStore.clearCart();
    dataStore.value = cartStore.items.value;
  }
};

const proceedToCheckout = () => {
  // Navigate to checkout page
  navigateTo("/checkout");
};

// Meta tags for SEO
useHead({
  title: "Shopping Cart - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Review your selected construction materials and proceed to checkout.",
    },
  ],
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
