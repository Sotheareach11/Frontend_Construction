<template>
  <div
    class="min-h-screen bg-white dark:bg-[#2c3e50] text-gray-900 dark:text-white transition-colors duration-300"
  >
    <!-- Header -->
    <header
      class="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#34495e] shadow-md border-b border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center gap-3">
        <button
          class="text-2xl cursor-pointer text-gray-700 dark:text-white hover:text-[#11A79F] transition-colors"
          @click="$router.go(-1)"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          Checkout
        </h1>
      </div>
      <div class="flex items-center gap-4">
        <ColorModeToggle />

        <div class="flex items-center gap-2">
          <i class="fas fa-shield-alt text-[#11A79F]"></i>
          <span class="text-sm text-gray-600 dark:text-gray-300"
            >Secure Checkout</span
          >
        </div>
      </div>
    </header>

    <div class="container mx-auto px-4 py-6 max-w-4xl">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column - Checkout Form -->
        <div class="space-y-6">
          <!-- Contact Information -->
          <div
            class="bg-gray-50 dark:bg-[#34495e] rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm"
          >
            <h2
              class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white"
            >
              <i class="fas fa-user text-[#11A79F]"></i>
              Contact Information
            </h2>
            <div class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >Email Address</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >First Name</label
                  >
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >Last Name</label
                  >
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >Phone Number</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="+855 12 345 678"
                />
              </div>
            </div>
          </div>

          <!-- Shipping Address -->
          <div
            class="bg-gray-50 dark:bg-[#34495e] rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm"
          >
            <h2
              class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white"
            >
              <i class="fas fa-truck text-[#11A79F]"></i>
              Shipping Address
            </h2>
            <div class="space-y-4">
              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >Street Address</label
                >
                <input
                  v-model="form.address"
                  type="text"
                  class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="123 Main Street"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >City</label
                  >
                  <input
                    v-model="form.city"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Phnom Penh"
                  />
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >Postal Code</label
                  >
                  <input
                    v-model="form.postalCode"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="12000"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >Country</label
                >
                <select
                  v-model="form.country"
                  class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="Cambodia">Cambodia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Laos">Laos</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Payment Method -->
          <div
            class="bg-gray-50 dark:bg-[#34495e] rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm"
          >
            <h2
              class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white"
            >
              <i class="fas fa-credit-card text-[#11A79F]"></i>
              Payment Method
            </h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="form.paymentMethod"
                    type="radio"
                    value="card"
                    class="text-[#11A79F] focus:ring-[#11A79F] bg-white dark:bg-[#2c3e50] border-gray-300 dark:border-gray-600"
                  />
                  <span class="ml-2 text-gray-900 dark:text-white"
                    >Credit/Debit Card</span
                  >
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="form.paymentMethod"
                    type="radio"
                    value="cod"
                    class="text-[#11A79F] focus:ring-[#11A79F] bg-white dark:bg-[#2c3e50] border-gray-300 dark:border-gray-600"
                  />
                  <span class="ml-2 text-gray-900 dark:text-white"
                    >Cash on Delivery</span
                  >
                </label>
              </div>

              <div
                v-if="form.paymentMethod === 'card'"
                class="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-600"
              >
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >Card Number</label
                  >
                  <input
                    v-model="form.cardNumber"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="1234 5678 9012 3456"
                    maxlength="19"
                    @input="formatCardNumber"
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >Expiry Date</label
                    >
                    <input
                      v-model="form.expiryDate"
                      type="text"
                      class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="MM/YY"
                      maxlength="5"
                      @input="formatExpiryDate"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                      >CVV</label
                    >
                    <input
                      v-model="form.cvv"
                      type="text"
                      class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="123"
                      maxlength="4"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >Cardholder Name</label
                  >
                  <input
                    v-model="form.cardholderName"
                    type="text"
                    class="w-full px-3 py-2 bg-white dark:bg-[#2c3e50] border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#11A79F] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <!-- COD Info -->
              <div
                v-if="form.paymentMethod === 'cod'"
                class="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
              >
                <div class="flex items-start gap-3">
                  <i
                    class="fas fa-info-circle text-yellow-600 dark:text-yellow-400 mt-0.5"
                  ></i>
                  <div>
                    <h4
                      class="font-medium text-yellow-800 dark:text-yellow-300"
                    >
                      Cash on Delivery
                    </h4>
                    <p
                      class="text-sm text-yellow-700 dark:text-yellow-400 mt-1"
                    >
                      Pay when your order is delivered to your doorstep.
                      Additional handling fee may apply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="space-y-6">
          <!-- Order Summary -->
          <div
            class="bg-gray-50 dark:bg-[#34495e] rounded-lg p-6 border border-gray-200 dark:border-gray-600 shadow-sm sticky top-4"
          >
            <h2
              class="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white"
            >
              <i class="fas fa-shopping-cart text-[#11A79F]"></i>
              Order Summary
            </h2>

            <!-- Cart Items -->
            <div class="space-y-4 mb-6">
              <div
                v-for="item in cartItems"
                :key="item.id"
                class="flex items-center gap-4 p-3 bg-white dark:bg-[#2c3e50] rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <img
                  :src="item.imageUrl"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-md"
                />
                <div class="flex-1">
                  <h3 class="font-medium text-sm text-gray-900 dark:text-white">
                    {{ item.name }}
                  </h3>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ item.category }}
                  </p>
                  <div class="flex items-center justify-between mt-1">
                    <span class="text-[#11A79F] font-semibold"
                      >${{ item.price }}</span
                    >
                    <span class="text-sm text-gray-500 dark:text-gray-400"
                      >Qty: {{ item.quantity }}</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Pricing Breakdown -->
            <div
              class="space-y-3 border-t border-gray-200 dark:border-gray-600 pt-4"
            >
              <div
                class="flex justify-between text-sm text-gray-700 dark:text-gray-300"
              >
                <span>Subtotal</span>
                <span>${{ subtotal }}</span>
              </div>
              <div
                class="flex justify-between text-sm text-gray-700 dark:text-gray-300"
              >
                <span>Shipping</span>
                <span>${{ shipping }}</span>
              </div>
              <div
                class="flex justify-between text-sm text-gray-700 dark:text-gray-300"
              >
                <span>Tax</span>
                <span>${{ tax }}</span>
              </div>
              <div
                class="flex justify-between font-semibold text-lg border-t border-gray-200 dark:border-gray-600 pt-3 text-gray-900 dark:text-white"
              >
                <span>Total</span>
                <span class="text-[#11A79F]">${{ total }}</span>
              </div>
            </div>

            <!-- Delivery Options -->
            <div
              class="mt-6 p-4 bg-white dark:bg-[#2c3e50] rounded-lg border border-gray-200 dark:border-gray-600"
            >
              <h3 class="font-medium mb-3 text-gray-900 dark:text-white">
                Delivery Options
              </h3>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="form.deliveryOption"
                    type="radio"
                    value="standard"
                    class="text-[#11A79F] focus:ring-[#11A79F] bg-white dark:bg-[#2c3e50] border-gray-300 dark:border-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >Standard Delivery (5-7 days) - Free</span
                  >
                </label>
                <label class="flex items-center cursor-pointer">
                  <input
                    v-model="form.deliveryOption"
                    type="radio"
                    value="express"
                    class="text-[#11A79F] focus:ring-[#11A79F] bg-white dark:bg-[#2c3e50] border-gray-300 dark:border-gray-600"
                  />
                  <span class="ml-2 text-sm text-gray-700 dark:text-gray-300"
                    >Express Delivery (2-3 days) - $15</span
                  >
                </label>
              </div>
            </div>

            <!-- Place Order Button -->
            <button
              @click="placeOrder"
              :disabled="!isFormValid || isProcessing"
              class="w-full mt-6 bg-[#11A79F] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#0d8b84] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <span
                v-if="isProcessing"
                class="flex items-center justify-center gap-2"
              >
                <i class="fas fa-spinner animate-spin"></i>
                Processing...
              </span>
              <span v-else>Place Order - ${{ total }}</span>
            </button>

            <!-- Security Badge -->
            <div
              class="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400"
            >
              <i class="fas fa-lock"></i>
              <span>Your payment information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Invoice -->
    <Invoice v-model:open="showInvoiceModal" :orderItems="cartItems" />

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white dark:bg-[#34495e] rounded-lg p-8 max-w-md w-full text-center border border-gray-200 dark:border-gray-600 shadow-xl"
      >
        <div class="text-[#11A79F] text-6xl mb-4">
          <i class="fas fa-check-circle"></i>
        </div>
        <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Order Placed Successfully!
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Your order #{{ orderNumber }} has been confirmed and will be processed
          shortly.
        </p>
        <div class="space-y-3">
          <button
            @click="ClickInvoice"
            class="w-full cursor-pointer text-center justify-center bg-[#11A79F] text-white py-2 px-4 rounded-lg hover:bg-[#0d8b84] transition-colors"
          >
            View Order Details
          </button>
          <button
            @click="continueShopping"
            class="w-full cursor-pointer border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#2c3e50] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/composables/useCart";
const cartStore = useCartStore();

const showInvoiceModal = ref(false);

// Form data
const form = ref({
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
  country: "Cambodia",
  paymentMethod: "card",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardholderName: "",
  deliveryOption: "standard",
});

// Sample cart data (replace with your actual cart data)
const cartItems = ref();

const isProcessing = ref(false);
const showSuccessModal = ref(false);
const orderNumber = ref("");

// Computed properties
const subtotal = computed(() => {
  return cartItems.value?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

const shipping = computed(() => {
  return form.value.deliveryOption === "express" ? 15 : 0;
});

const tax = computed(() => {
  return Math.round(subtotal.value * 0.1 * 100) / 100; // 10% tax
});

const total = computed(() => {
  return subtotal.value + shipping.value + tax.value;
});

const isFormValid = computed(() => {
  const requiredFields = [
    "email",
    "firstName",
    "lastName",
    "phone",
    "address",
    "city",
    "country",
  ];
  const basicValid = requiredFields.every(
    (field) => form.value[field].trim() !== ""
  );

  if (form.value.paymentMethod === "card") {
    const cardFields = ["cardNumber", "expiryDate", "cvv", "cardholderName"];
    return (
      basicValid && cardFields.every((field) => form.value[field].trim() !== "")
    );
  }

  return basicValid;
});

// Methods
const formatCardNumber = (event) => {
  const value = event.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "");
  const formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  form.value.cardNumber = formattedValue;
};

const formatExpiryDate = (event) => {
  const value = event.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    form.value.expiryDate = value.substring(0, 2) + "/" + value.substring(2, 4);
  } else {
    form.value.expiryDate = value;
  }
};

const placeOrder = async () => {
  if (!isFormValid.value) return;

  isProcessing.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  orderNumber.value = "ORD" + Date.now().toString().slice(-6);
  isProcessing.value = false;
  showSuccessModal.value = true;
};

function ClickInvoice() {
  showInvoiceModal.value = true;
  showSuccessModal.value = false;
  this.$router.push(`/products/`);
}

const continueShopping = () => {
  showSuccessModal.value = false;
  cartStore.clearCart();
  cartItems.value = [];
  navigateTo("/products");
};

onMounted(() => {
  // Load cart data from your store
  cartStore.loadFromStorage();
  cartItems.value = cartStore.items.value;
});

// Meta tags
useHead({
  title: "Checkout - Bak Sey Slab Daek",
  meta: [
    {
      name: "description",
      content:
        "Complete your order for construction materials and hardware products.",
    },
  ],
});
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
</style>
