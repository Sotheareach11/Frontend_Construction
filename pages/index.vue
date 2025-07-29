<template>
  <div>
    <UButton>Click me</UButton>
    <UCard>
      <p>This is a card</p>
    </UCard>
    <UAvatar src="https://github.com/benjamincanac.png" />
    <UButton color="neutral">Button</UButton>
    <UButton color="primary" class="cursor-pointer" @click="ClickInvoice">
      Open Invoice
    </UButton>

    <Invoice v-model="openDialog" />
  </div>
</template>

<script setup>
import Invoice from "~/components/Invoice.vue";
const openDialog = ref(false);

function ClickInvoice() {
  openDialog.value = true;
}

definePageMeta({
  redirect: "/products",
});
</script>

<style></style>
