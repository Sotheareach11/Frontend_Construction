<template>
  <div
    class="rounded-[24px] w-full bg-[#11A79F] text-white h-12 flex items-center justify-center font-bold text-[16px] cursor-pointer hover:bg-[#11a7a0c1] transition duration-300"
  >
    {{ text ?? "" }}
  </div>
</template>

<script setup>
defineProps(["text"]);
</script>
