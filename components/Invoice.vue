<template>
  <UModal
    :close="{ onClick: () => closeModal() }"
    v-model:open="openDialog"
    :dismissible="false"
    title="Receipt Invoice"
    :ui="{ footer: 'justify-end' }"
  >
    <template #body>
      <div class="mb-4">
        <h2 class="text-lg font-semibold">Order Summary</h2>
        <div class="mt-2 bg-[#b3b0b043] dark:bg-gray-700 p-4 rounded">
          <div
            v-for="(item, index) in orderItems"
            :key="index"
            class="flex justify-between items-center mb-2"
          >
            <div>
              <span class="font-medium">{{ item.name }}</span>
              <br />
              <span class="text-sm text-gray-400">{{ item.category }}</span>
            </div>
            <div class="text-right">
              <span>${{ item.price ?? 0 }}</span>
              <br />
              <span class="text-sm text-gray-400"
                >Qty: {{ item.quantity ?? 0 }}</span
              >
            </div>
          </div>
          <hr class="my-2 border-gray-600" />
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>${{ subtotal ?? 0 }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span>${{ selectedDelivery.cost ?? 0 }}</span>
          </div>
          <div class="flex justify-between">
            <span>Tax</span>
            <span>${{ tax ?? 0 }}</span>
          </div>
          <hr class="my-2 border-gray-600" />
          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>${{ total ?? 0 }}</span>
          </div>
        </div>
      </div>
      <div class="border-t pt-2">
        <center>Bak Sey Slab Daek. All rights reserved</center>
      </div>
    </template>
  </UModal>
</template>

<script setup>
// Define the two-way binding for the modal's open state
import { useCartStore } from "~/composables/useCart";
const openDialog = defineModel();
const cartStore = useCartStore();

// Define props for order items
const props = defineProps({
  orderItems: {
    type: Array,
    default: () => [
      {
        name: "Reinforced Concrete Blocks",
        category: "Building Materials",
        price: 15,
        quantity: 10,
      },
    ],
  },
});

// Delivery options
const deliveryOptions = ref([
  { id: 1, name: "Standard Delivery", days: "5-7 days", cost: 0 },
  { id: 2, name: "Express Delivery", days: "2-3 days", cost: 15 },
]);

// Default to Express Delivery
const selectedDelivery = ref(deliveryOptions.value[1]);

// Computed properties for calculations
const subtotal = computed(() => {
  return props.orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const tax = computed(() => {
  return subtotal.value * 0.1; // 10% tax
});

const total = computed(() => {
  return subtotal.value + selectedDelivery.value.cost + tax.value;
});

function closeModal() {
  cartStore.clearCart();
  cartStore.items.value = [];
  openDialog.value = false;
  navigateTo("/products");
}
</script>

<style scoped>
.material-icons {
  font-size: 24px;
  vertical-align: middle;
}

:root {
  --text-color: #000000;
  --bg-color: #ffffff;
  --card-bg: #b3b0b0;
}

.dark {
  --text-color: #ffffff;
  --bg-color: #2c3e50;
  --card-bg: #4a5568;
}

.min-h-screen {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.max-w-2xl {
  background-color: var(--card-bg);
}
</style>
