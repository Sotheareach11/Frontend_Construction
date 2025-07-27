<template>
  <div
    class="group relative rounded-lg bg-gray-800 text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
  >
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        :src="product.imageUrl"
        alt="Product Image"
        class="w-full h-40 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
      />
      <!-- Overlay effect on image hover -->
      <div
        class="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"
      ></div>
    </div>

    <div class="p-2 relative z-10">
      <h3
        class="font-medium group-hover:text-teal-300 transition-colors duration-300"
      >
        {{ product.name }}
      </h3>
      <p
        class="text-gray-400 font-bold text-sm group-hover:text-gray-300 transition-colors duration-300"
      >
        $ {{ product.price }}
        <span class="line-through text-gray-500 group-hover:text-gray-400">{{
          product.originalPrice
        }}</span>
      </p>
    </div>

    <!-- Hover overlay with buttons -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0000007b]"
    >
      <button
        @click="$emit('addToCart', product)"
        class="cursor-pointer bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
      >
        Add to Cart
      </button>

      <div
        class="flex justify-center mt-4 gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100"
      >
        <button
          @click="$emit('viewDetail', product)"
          class="cursor-pointer text-gray-300 hover:text-teal-400 transition-colors duration-300 size-[35px] rounded-full hover:bg-white hover:bg-opacity-10"
        >
          <i class="fas fa-share"></i>
        </button>
        <button
          class="cursor-pointer text-gray-300 hover:text-red-400 transition-colors duration-300 size-[35px] rounded-full hover:bg-white hover:bg-opacity-10"
        >
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["product"]);
defineEmits(["addToCart", "viewDetail"]);
</script>
