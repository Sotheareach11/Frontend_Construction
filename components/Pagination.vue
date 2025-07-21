<template>
  <div class="flex gap-2 justify-center mt-6">
    <button
      v-for="page in pages"
      :key="page"
      @click="$emit('update:currentPage', page)"
      :class="[
        'px-3 py-1 border rounded cursor-pointer',
        currentPage === page ? 'bg-teal-500 text-white' : '',
      ]"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup>
defineProps(["pages", "currentPage"]);
defineEmits(["update:currentPage"]);
</script>
