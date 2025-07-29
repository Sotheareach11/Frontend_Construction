<template>
  <div>
    <!-- Pass the cart count (number) to Header -->
    <Header :cartCount="cartStore.items.value.length" />
    <div class="max-w-4xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold text-[#11A79F] mb-4">
        Privacy & Store Policy
      </h1>

      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p class="text-gray-700 dark:text-gray-300">
          We are committed to protecting your personal information. Any data we
          collect is used strictly for fulfilling orders and improving your
          shopping experience. We never share your data with third parties
          without consent.
        </p>
      </div>

      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">Return Policy</h2>
        <p class="text-gray-700 dark:text-gray-300">
          Returns are accepted within 14 days of delivery. Products must be
          unused and in their original packaging. Contact our support for a
          return authorization.
        </p>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-2">Shipping Policy</h2>
        <p class="text-gray-700 dark:text-gray-300">
          We offer delivery within Cambodia. Orders are processed within 1–2
          business days. Delivery time depends on your location and courier
          availability.
        </p>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useCartStore } from "~/composables/useCart";

// Use the cart store
const cartStore = useCartStore();

onMounted(() => {
  cartStore.loadFromStorage();
});

// Meta tags for SEO
useHead({
  title: "Policy - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Browse our wide range of construction materials and hardware products.",
    },
    {
      name: "keywords",
      content:
        "privacy policy, return policy, shipping policy, Bak Sey Slab Daek",
    },
  ],
});
</script>
