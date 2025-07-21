<template>
  <header
    class="flex sticky top-0 z-10 items-center justify-between px-4 py-3 bg-[#E7EAEF] dark:bg-[#172031] shadow-md"
  >
    <div class="flex items-center gap-3">
      <button class="text-2xl cursor-pointer">
        <i class="fas fa-bars"></i>
        <!-- Hamburger -->
      </button>
    </div>

    <div class="flex flex-col justify-center items-center leading-none">
      <div>
        <img class="size-[60px]" src="../assets/img/logo.svg" alt="" />
      </div>
      <div class="text-center">
        <h1 class="font-bold text-md text-teal-700">Bak Sey Slab Daek</h1>
        <p class="text-xs text-gray-500">
          International Construction materials
        </p>
      </div>
    </div>

    <div class="flex items-center gap-4 text-xl">
      <button class="cursor-pointer"><i class="fas fa-search"></i></button>
      <button class="cursor-pointer">
        <i class="fas fa-shopping-cart"></i>
      </button>
    </div>
  </header>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
