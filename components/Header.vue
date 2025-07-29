<template>
  <header
    class="flex sticky top-0 z-50 items-center justify-between px-4 py-3 bg-[#E7EAEF] dark:bg-[#172031] shadow-md"
  >
    <!-- Left: Sidebar Toggle -->
    <div class="flex items-center gap-2 relative">
      <button class="text-2xl cursor-pointer" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Menu dropdown -->
      <div
        v-if="isMenuOpen"
        class="absolute left-0 top-12 min-w-[250px] bg-white dark:bg-gray-800 shadow-xl rounded-xl z-50 py-2"
      >
        <NuxtLink
          to="/products"
          class="flex items-center px-5 py-3 text-base text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="closeMenu"
        >
          <i class="fas fa-box-open mr-3 text-lg"></i> Products
        </NuxtLink>
        <NuxtLink
          to="/policy"
          class="flex items-center px-5 py-3 text-base text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="closeMenu"
        >
          <i class="fas fa-file-contract mr-3 text-lg"></i> Policy
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="flex items-center px-5 py-3 text-base text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="closeMenu"
        >
          <i class="fas fa-info-circle mr-3 text-lg"></i> About Us
        </NuxtLink>
      </div>
    </div>

    <!-- Center: Logo & Title -->
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

    <!-- Right: Controls -->
    <div class="flex items-center gap-4 text-xl">
      <!-- Color mode toggle -->
      <ColorModeToggle />

      <!-- Cart icon -->
      <NuxtLink to="/products/cart" class="cursor-pointer">
        <div class="relative">
          <button class="cursor-pointer">
            <div
              v-if="cartItemsCount > 0"
              class="absolute top-[-15px] right-[-10px] flex items-center justify-center w-[25px] h-[25px] bg-red-600 rounded-full text-[12px] text-white"
            >
              {{ cartItemsCount }}
            </div>
            <i class="fas fa-shopping-cart"> </i>
          </button>
        </div>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "~/composables/useCart";

// Internal sidebar toggle (optional logic)
const sidebarVisible = ref(true);
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
  console.log("Sidebar toggled:", sidebarVisible.value);
};

// Dropdown menu logic
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Cart logic
const cartStore = useCartStore();
const cartItemsCount = computed(() => cartStore.items.value.length);

onMounted(() => {
  cartStore.loadFromStorage();
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
