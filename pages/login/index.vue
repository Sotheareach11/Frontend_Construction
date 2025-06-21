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
        Sign In
      </h4>

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

      <BSDButton class="text-center justify-center flex" />

      <section class="grid gap-1.5">
        <p class="text-[#11A79F] text-lg font-bold text-center">Register</p>
        <span
          class="text-red-700 underline text-base text-center hover:text-red-400"
        >
          Forget Password?
        </span>
      </section>
    </section>
  </div>
</template>

<script setup>
import { z } from "zod";

const formConfig = {
  api: { create: "/api/create", update: "/api/update" },
  showSubmit: true,
  showReset: true,
  showCancel: true,
  width: 400,
};

const inputs = [
  {
    type: "text",
    name: "name",
    label: "Name",
    required: true,
    schema: z.string().min(3, "Name is too short"),
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    required: true,
    schema: z.string().email("Invalid email"),
  },
];

const state = ref({
  email: "",
  password: "",
});

function handleSubmit() {
  console.log("Form submitted:", state.value);
}
</script>

<style lang="scss"></style>
