<template>
  <div class="grid gap-8">
    <section class="items-center text-center justify-center mt-32 grid gap-3">
      <div class="justify-center flex">
        <img class="w-[250px]" src="../../assets/img/logo.svg" alt="" />
      </div>
      <div>
        <h2 class="text-[#11A79F] text-[28px] font-bold">Bak Sey Slab Daek</h2>
        <p class="text-[18px] text-[#404040]">
          Inernational Construction materials
        </p>
      </div>
    </section>

    <section class="w-full grid gap-4 px-4 py-6 sm:max-w-md mx-auto">
      <h4
        class="text-[#11A79F] text-[20px] font-semibold items-center text-center justify-center"
      >
        Register
      </h4>

      <BSDInput
        icon="ri-user-line"
        label="Name"
        v-model="state.name"
        placeholder="Enter Name"
      />

      <BSDInput
        icon="ri-user-line"
        label="Gmail/Phone Number"
        v-model="state.email"
        placeholder="Enter Email / Phone Number"
      />

      <BSDInput
        type="password"
        icon="ri-lock-line"
        label="Password"
        v-model="state.password"
        placeholder="Enter Password"
      />

      <BSDInput
        type="password"
        icon="ri-lock-line"
        label="Confirm Password"
        v-model="state.conpassword"
        placeholder="Enter Password"
      />

      <section class="grid gap-1.5">
        <BSDButton :text="'Register'" @click="handleSubmitRegister" />

        <NuxtLink
          to="/login"
          class="text-[#7C7C7C] underline text-base text-center hover:text-[#11A79F]"
        >
          Login
        </NuxtLink>
      </section>
    </section>
  </div>
</template>

<script setup>
import { z } from "zod";

const state = ref({
  name: "",
  email: "",
  password: "",
  conpassword: "",
});

function handleSubmitRegister() {
  console.log("Form submitted:", state.value);
  navigateTo("/login/");
}

// Meta tags for Register Page
useHead({
  title: "Register - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Create your account with Bak Sey Slab Daek and get started with premium construction materials at your fingertips.",
    },
  ],
});
</script>

<style lang="scss"></style>
