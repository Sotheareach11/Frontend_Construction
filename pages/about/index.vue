<template>
  <div>
    <!-- Pass the cart count (number) to Header -->
    <Header :cartCount="cartStore.items.value.length" />
    <div class="max-w-4xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold text-[#11A79F] mb-4">About Us</h1>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Welcome to Bak Sey Slab Daek! We are a leading provider of international
        construction materials, committed to delivering high-quality products
        with outstanding customer service.
      </p>

      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-2">Our Mission</h2>
        <p class="text-gray-700 dark:text-gray-300">
          To supply reliable and cost-effective construction materials to
          builders and contractors in Cambodia and beyond.
        </p>
      </div>

      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-2">Contact Information</h2>
        <p class="text-gray-700 dark:text-gray-300">Phone: 012 345 678</p>
        <p class="text-gray-700 dark:text-gray-300">
          Email: support@bakseyslab.com
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
  title: "About Us - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Bak Sey Slab Daek, a leading supplier of construction materials.",
    },
    {
      name: "keywords",
      content:
        "construction materials, about us, building supplies, Bak Sey Slab Daek",
    },
  ],
});
</script>
