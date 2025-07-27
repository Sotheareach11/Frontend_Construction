<template>
  <header
    class="flex sticky top-0 z-50 items-center justify-between px-4 py-3 bg-[#E7EAEF] dark:bg-[#172031] shadow-md"
  >
    <div class="flex items-center gap-3">
      <button class="text-2xl cursor-pointer" @click="$emit('toggleSidebar')">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="flex flex-col justify-center items-center leading-none">
      <NuxtLink to="/products/" class="flex items-center gap-2">
        <img class="size-[60px]" src="../assets/img/logo.svg" />
      </NuxtLink>
      <div class="text-center">
        <h1 class="font-bold text-md text-[#11A79F]">Bak Sey Slab Daek</h1>
        <p class="text-xs text-gray-500">
          International Construction materials
        </p>
      </div>
    </div>

    <div class="flex items-center gap-4 text-xl">
      <button class="cursor-pointer"><i class="fas fa-search"></i></button>
      <NuxtLink to="/products/cart" class="cursor-pointer">
        <div class="relative">
          <button class="cursor-pointer">
            <div
              v-if="dataCart.length > 0"
              class="absolute top-[-15px] right-[-10px] flex items-center justify-center w-[25px] h-[25px] bg-red-600 rounded-full text-[12px] text-white"
            >
              {{ dataCart.length ?? 0 }}
            </div>
            <i class="fas fa-shopping-cart"> </i>
          </button>
        </div>
      </NuxtLink>

      {{ cartCount.length > 0 ? cartCount.length : 0 }}
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from "~/composables/useCart";

defineEmits(["toggleSidebar"]);
const cartCount = defineProps(["cartCount"]);
// Use the cart store
const cartStore = useCartStore();
const dataCart = ref([]);

watch(
  () => cartCount.value,
  (newItems) => {
    cartStore.loadFromStorage();
    setTimeout(() => {
      cartCount.value = cartStore.items.value;
      dataCart.value = cartStore.items.value;
      console.log("Cart items updated:", dataCart.value);
    }, 1000);
  },
  { immediate: true, deep: true }
);

// Load cart data when component mounts
onMounted(() => {
  setTimeout(() => {
    cartStore.loadFromStorage();
    cartCount.value = cartStore.items.value;
    dataCart.value = cartStore.items.value;
    console.log("Cart items on mount:", cartStore.items.value);
  }, 1000);
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
