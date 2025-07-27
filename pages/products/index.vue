<template>
  <div>
    <!-- Pass the cart count from the store to Header -->
    <Header :cartCount="dataStore" />

    <div>
      <!-- New Arrival Section -->
      <div class="bg-[#fef7ed]">
        <div class="relative h-[400px] mx-auto">
          <img
            src="https://img.freepik.com/premium-photo/background-web-banner-with-construction-tools_1202914-51211.jpg"
            alt="Workers"
            class="absolute inset-0 w-full h-full object-fill z-0"
          />

          <div
            class="absolute top-[90px] right-[10px] bg-[#11a7a09d] text-white rounded-[14px] p-8 w-[320px] z-10"
          >
            <h2 class="text-white font-semibold tracking-wide">New Arrival</h2>
            <h3 class="text-2xl font-bold mb-3">Discover Our New Collection</h3>
            <p class="text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              class="bg-[#11A79F] cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:bg-[#11a7a07e]"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      <!-- Browse the Range Section -->
      <div class="mt-10 text-center">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white">
          Browse The Range
        </h3>
        <p class="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div class="grid grid-cols-2 gap-6">
          <div v-for="item in browseBanner" :key="item.id">
            <img
              :src="item.image"
              alt="Hardware"
              class="w-full h-48 object-fill rounded-[16px]"
            />
            <div class="p-1 text-center font-semibold">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-8">
      <div class="text-center mb-2">
        <h1 class="text-xl font-bold">Our Product</h1>
        <!-- <p class="text-gray-500">Our Product</p> -->
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          @addToCart="
            (v) => {
              addProduct(v), cartStore.loadFromStorage();
            }
          "
          @viewDetail="(v) => navigateTo(`/products/${v.id}`)"
        />
      </div>

      <Pagination
        :pages="totalPages"
        :currentPage="currentPage"
        @update:currentPage="currentPage = $event"
      />

      <!-- section explore more -->
      <div class="mt-10 flex gap-2.5 text-center bg-[#fef7ed] p-4 rounded-3xl">
        <div class="flex flex-col justify-center !items-center">
          <h2 class="text-[#3A3A3A] font-bold mb-2.5">
            Discover a wide range of products tailored to your needs.
          </h2>
          <UButton
            class="bg-[#11A79F] w-fit item-center text-center cursor-pointer text-white px-5 py-2 rounded-full font-semibold hover:bg-[#11a7a07e]"
          >
            Explore Now
          </UButton>
        </div>
        <div class="w-[250px]">
          <img
            src="https://img.freepik.com/premium-photo/background-web-banner-with-construction-tools_1202914-51211.jpg"
            class="h-48 object-cover rounded-3xl"
          />
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
import ProductCard from "~/components/ProductCard.vue";
import Pagination from "~/components/Pagination.vue";
import { useProducts } from "~/composables/useProducts";
import { useCartStore } from "~/composables/useCart";

// Use the cart store
const cartStore = useCartStore();
const products = useProducts();
const currentPage = ref(1);
const itemsPerPage = 6;

const dataStore = ref([]);
const getDetail = ref([]);
// Toast notification state
const showToast = ref(false);
const toastMessage = ref("");

const arrival = {
  title: "New Arrival",
  subtitle: "Discover Our New Collection",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
  button: "Buy Now",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-flat-urban-construction-site-banner-image_925568.jpg",
};

const browseBanner = [
  {
    id: 1,
    title: "Hardware Store Selling",
    image:
      "https://t3.ftcdn.net/jpg/08/80/51/66/360_F_880516647_FA920EmIPLMXCYTRqLHo9NWLJvcMQ8wt.jpg",
  },
  {
    id: 2,
    title: "Hardware Store Selling",
    image:
      "https://c8.alamy.com/comp/2WX1JWT/construction-technology-banner-background-construction-site-with-cranes-fittings-and-concrete-high-quality-photo-2WX1JWT.jpg",
  },
];

// Calculate total pages based on products and items per page
const totalPages = Math.ceil(products.length / itemsPerPage);

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
      `Increased ${product.name} quantity to ${existingItem.quantity + 1}`
    );
  } else {
    // If product doesn't exist, add it to cart
    cartStore.addToCart(product);
    showToastNotification(`${product.name} added to cart!`);
    // dataStore.value = cartStore.items.value;
    cartStore.loadFromStorage();
    dataStore.value = cartStore.items.value;
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
  setTimeout(() => {
    cartStore.loadFromStorage();
    dataStore.value = cartStore.items.value;
    console.log("test:", cartStore.items.value);
  }, 1000);
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

<style scoped>
/* Add any additional styles here */
</style>
