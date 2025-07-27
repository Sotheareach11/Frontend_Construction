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

      <BSDButton :text="'Sign In'" @click="handleSubmitLogin" />

      <section class="grid gap-1.5">
        <NuxtLink
          to="/register"
          class="text-[#11A79F] text-sm font-bold text-center underline hover:text-[#74ded9cf]"
        >
          Register
        </NuxtLink>

        <NuxtLink
          to="/register"
          class="text-red-700 underline text-base text-center hover:text-red-400"
        >
          Forget Password?
        </NuxtLink>
      </section>
    </section>
  </div>
</template>

<script setup>
const toast = useToast();

// Hardcoded admin credentials
const fixedAdmin = {
  email: "admin@gmail.com",
  password: "admin",
};

const state = ref({
  email: "",
  password: "",
});

function handleSubmitLogin() {
  const { email, password } = state.value;

  if (email === fixedAdmin.email && password === fixedAdmin.password) {
    toast.success({
      title: "Login Successful",
      description: "Welcome back",
    });
    navigateTo("/products/");
  } else {
    toast.error({
      title: "Login Failed",
      description: "Invalid email or password.",
      variant: "destructive",
    });
  }
}

// Meta tags for SEO
useHead({
  title: "Login - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Sign in to access your account and explore top-quality construction materials from Bak Sey Slab Daek.",
    },
  ],
});
</script>
