<template>
  <div class="max-w-5xl mx-auto px-4 py-8">
    <!-- Product Image + Info -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Image -->
      <div class="w-full">
        <img
          :src="product.imageUrl ? product.imageUrl : fallbackImage"
          :alt="product.name"
          class="rounded shadow w-full object-cover"
        />
      </div>

      <!-- Info -->
      <div>
        <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>

        <!-- Rating -->
        <div class="flex items-center mb-2 text-yellow-500">
          <span v-for="i in 5" :key="i">
            <svg
              v-if="i <= Math.floor(product.rating)"
              class="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"
              />
            </svg>
            <svg
              v-else
              class="w-5 h-5 text-gray-300 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.954L10 0l2.951 5.956 6.561.954-4.756 4.635 1.122 6.545z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm text-gray-600"
            >({{ product.reviews }} reviews)</span
          >
        </div>

        <!-- Short Description -->
        <p class="text-gray-600 mb-4">{{ product.shortDescription }}</p>

        <!-- Size Options -->
        <div class="mb-4">
          <span class="font-semibold">Size:</span>
          <div class="flex space-x-2 mt-1">
            <button
              v-for="size in product.sizes"
              :key="size"
              class="px-3 py-1 border rounded hover:[#11A79F] cursor-pointer"
              :class="{
                'bg-[#11A79F] border-[#11A79F]': selectedSize === size,
              }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Quantity + Add to Cart -->
        <div class="flex items-center space-x-3 mb-4">
          <div class="flex border rounded overflow-hidden">
            <button
              class="px-3 cursor-pointer"
              @click="quantity = Math.max(1, quantity - 1)"
            >
              -
            </button>
            <input
              class="border-l border-r **:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none text-center border px-2 py-1 rounded w-16"
              type="number"
              v-model="quantity"
              min="1"
            />
            <button class="px-3 cursor-pointer" @click="quantity++">+</button>
          </div>
          <UButton
            @click="addProduct"
            class="bg-[#11A79F] hover:bg-[#11A79F] cursor-pointer text-white px-5 py-2 rounded-[14px] font-semibold"
          >
            Add To Cart
          </UButton>
        </div>

        <!-- SKU / Category / Tags -->
        <div class="text-sm text-gray-500 space-y-1">
          <div><strong>SKU:</strong> {{ product.sku }}</div>
          <div><strong>Category:</strong> {{ product.category }}</div>
          <div><strong>Tags:</strong> {{ product.tags.join(", ") }}</div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="mt-10">
      <div class="flex space-x-4 border-b pb-2">
        <button
          class="text-lg font-medium"
          :class="{
            'text-[#11A79F] border-b-2 border-[#11A79F]':
              activeTab === 'shortDescription',
          }"
          @click="activeTab = 'description'"
        >
          Description
        </button>
      </div>

      <p class="mt-4 text-[#d8d8d8] leading-relaxed">
        {{ product.longDescription }}
      </p>
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
import fallbackImage from "@/assets/img/logo.png";
import { useCartStore } from "~/composables/useCart";
defineProps(["product"]);
const quantity = ref(1);
const selectedSize = ref("S");
const toastMessage = ref("");

const cartStore = useCartStore();
const showToast = ref(false);

// ✅ Add to cart function
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

function showToastNotification(message) {
  toastMessage.value = message;
  showToast.value = true;

  // Hide toast after 3 seconds
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
}
</script>
