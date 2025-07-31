<template>
  <div>
    <!-- Pass the cart count (number) to Header -->
    <Header :cartCount="cartStore.items.value.length" />

    <div>
      <!-- New Arrival Section -->
      <div class="bg-[#fef7ed]">
        <div class="relative h-[250px] sm:h-[300px] md:h-[560px] mx-auto">
          <img
            src="https://img.freepik.com/premium-photo/background-web-banner-with-construction-tools_1202914-51211.jpg"
            alt="Workers"
            class="absolute inset-0 w-full h-full object-fill z-0"
          />

          <div
            class="absolute top-[10px] sm:top-[20px] md:top-[250px] right-2 sm:right-5 md:right-[10px] bg-[#11a7a09d] text-white rounded-[14px] p-4 sm:p-6 md:p-8 w-[260px] sm:w-[300px] md:w-[500px] z-10"
          >
            <h2 class="text-white font-semibold tracking-wide">New Arrival</h2>
            <h3 class="text-xl sm:text-2xl font-bold mb-3">
              Discover Our New Collection
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              class="bg-[#11A79F] cursor-pointer text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold hover:bg-[#11a7a07e] text-sm sm:text-base"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <!-- Browse the Range Section -->
      <div class="mt-10 text-center px-8">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white">
          Browse The Range
        </h3>
        <p class="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div v-for="item in browseBanner" :key="item.id">
            <img
              :src="item.image"
              alt="Hardware"
              class="w-full h-[200px] sm:h-[200px] md:h-[300px] object-cover rounded-[16px]"
            />
            <div class="p-1 text-center font-semibold text-sm sm:text-base">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-8">
      <div class="text-center mb-2 mt-5">
        <h1 class="text-xl sm:text-2xl font-bold">Our Product</h1>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
      >
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          @addToCart="addProduct"
          @viewDetail="(v) => navigateTo(`/products/${v.id}`)"
        />
      </div>

      <Pagination
        :pages="totalPages"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />

      <!-- section explore more -->
      <!-- section explore more -->
      <div
        class="mt-10 flex flex-col md:flex-row gap-4 md:gap-6 text-center bg-[#fef7ed] dark:bg-[#172031] p-4 rounded-3xl items-center"
      >
        <!-- Left Section (Image) -->
        <div
          class="w-full md:w-[300px] aspect-[16/9] md:aspect-auto md:h-full rounded-3xl overflow-hidden flex-shrink-0"
        >
          <img
            src="https://img.freepik.com/premium-photo/background-web-banner-with-construction-tools_1202914-51211.jpg"
            class="w-full h-full object-cover rounded-3xl"
            alt="Explore Products"
          />
        </div>

        <!-- Right Section (Text + Button) -->
        <div
          class="flex flex-col items-center justify-center text-center flex-1"
        >
          <h2
            class="text-[#3A3A3A] dark:text-white font-bold mb-2.5 text-base md:text-lg lg:text-xl px-2 md:px-4"
          >
            Discover a wide range of products tailored to your needs.
          </h2>
          <UButton
            class="bg-[#11A79F] w-fit text-white px-5 py-2 rounded-full font-semibold hover:bg-[#11a7a07e] cursor-pointer"
          >
            Explore Now
          </UButton>
        </div>
      </div>

      <Footer />
    </div>

    <!-- Toast notification for cart actions -->
    <div
      v-if="showToast"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300"
    >
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle"></i>
        <span>{{ toastMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from "~/composables/useProducts";
import { useCartStore } from "~/composables/useCart";

// Use the cart store
const cartStore = useCartStore();
const products = useProducts();
const currentPage = ref(1);
const itemsPerPage = 12;

// Toast notification state
const showToast = ref(false);
const toastMessage = ref("");

const browseBanner = [
  {
    id: 1,
    title: "Premium Construction Tools & Materials",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhSFbGMzJmuAR1694Lalf8BuJJNnADPUQYg&s",
  },
  {
    id: 2,
    title: "Heavy-Duty Equipment for Your Projects",
    image:
      "https://cdn.prod.website-files.com/65ef1ee542268c676c485800/663c1cf7581b8a0c2a3b4d86_types-of-heavy-equipment.jpg",
  },
  {
    id: 3,
    title: "Build Strong with Top-Quality Supplies",
    image:
      "https://images.squarespace-cdn.com/content/v1/626af0175de33e12234c3ca9/16d42074-bb32-4fd0-9921-f63673edb345/istockphoto-1344231216-612x612.jpg",
  },
];

// Calculate total pages based on products and items per page
const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

// Computed property to get paginated products
const paginatedProducts = computed(() => {
  return products.slice(
    (currentPage.value - 1) * itemsPerPage,
    currentPage.value * itemsPerPage
  );
});

// Add product to cart using the cart store
function addProduct(product) {
  const existingItem = cartStore.items.value.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    // If product exists, increase quantity
    cartStore.updateQuantity(product.id, existingItem.quantity + 1);
    showToastNotification(
      `Increased ${product.name} quantity to ${existingItem.quantity}`
    );
  } else {
    // If product doesn't exist, add it to cart
    cartStore.addToCart(product);
    showToastNotification(`${product.name} added to cart!`);
  }
}

// Show toast notification
function showToastNotification(message) {
  toastMessage.value = message;
  showToast.value = true;

  // Hide toast after 3 seconds
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
}

onMounted(() => {
  cartStore.loadFromStorage();
});

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
</script>

<style scoped></style>
