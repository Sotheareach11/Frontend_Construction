<template>
  <div>
    <Header />

    <div class="px-4 py-8">
      <div class="text-center mb-2">
        <h1 class="text-3xl font-bold">Shop</h1>
        <p class="text-gray-500">Our Product</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <Pagination
        :pages="totalPages"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />

      <Footer />
    </div>
  </div>
</template>

<script setup>
import ProductCard from "~/components/ProductCard.vue";
import Pagination from "~/components/Pagination.vue";
import { useProducts } from "~/composables/useProducts";

const products = useProducts();
const currentPage = ref(1);
const itemsPerPage = 6;

const totalPages = Math.ceil(products.length / itemsPerPage);

const paginatedProducts = computed(() => {
  return products.slice(
    (currentPage.value - 1) * itemsPerPage,
    currentPage.value * itemsPerPage
  );
});
</script>
