<template>
  <div v-if="product">
    <Header :cartCount="dataStore" />

    <ProductDetail :product="product" />

    <Footer />
  </div>
  <div v-else class="text-center py-20">
    <Header :cartCount="dataStore" />
    <p>Product not found.</p>

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useProducts } from "~/composables/useProducts";
import { useCartStore } from "~/composables/useCart";

const cartStore = useCartStore();
const route = useRoute();
const products = useProducts();
const product = products.find((p) => p.id === Number(route.params.id));
const dataStore = ref([]);

// Meta tags for SEO
useHead({
  title: "Products - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Browse our wide range of construction materials and hardware products.",
    },
  ],
});

// Load cart data when component mounts
onMounted(() => {
  cartStore.loadFromStorage();
});
</script>
