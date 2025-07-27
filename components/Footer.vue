<template>
  <footer class="p-4 text-center">
    <div class="flex justify-around flex-wrap mb-4">
      <div>
        <h3 class="font-bold text-[#11A79F]">Bak Sey Slab Daek</h3>
        <p>
          400 University Drive<br />Suite 200 Coral<br />Gables, FL 33134 USA
        </p>
        <p>Contact</p>
      </div>
      <div>
        <h3 class="font-bold">Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold">Help</h3>
        <ul>
          <li><a href="#">Payment Options</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policies</a></li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold">Newsletter</h3>
        <input
          type="email"
          placeholder="Enter Your Email Address"
          class="p-2 mb-2 w-full cursor-pointer"
        />
        <button
          class="bg-teal-500 text-white p-2 w-full rounded-full cursor-pointer"
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
    <div class="border-t pt-2">
      <p>Bak Sey Slab Daek. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  a {
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
