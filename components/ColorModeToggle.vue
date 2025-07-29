<template>
  <button
    @click="toggleTheme"
    class="cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    aria-label="Toggle between light and dark theme"
  >
    <i class="fas fa-sun text-yellow-500 dark:hidden"></i>
    <i class="fas fa-moon text-blue-400 hidden dark:block"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark", isDark.value);
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onMounted(() => {
  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  isDark.value = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  document.documentElement.classList.toggle("dark", isDark.value);

  // Listen for system preference changes
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  watch(
    () => mediaQuery.matches,
    (prefersDark) => {
      if (!localStorage.getItem("theme")) {
        isDark.value = prefersDark;
        document.documentElement.classList.toggle("dark", isDark.value);
      }
    }
  );
  mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      isDark.value = mediaQuery.matches;
      document.documentElement.classList.toggle("dark", isDark.value);
    }
  });
});
</script>

<style lang="scss" scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Custom radio button styling */
input[type="radio"] {
  accent-color: #11a79f;
}

/* Focus states for better accessibility */
input:focus,
select:focus,
button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(17, 167, 159, 0.5);
}

/* Scoped transition for theme-specific elements */
button,
i {
  transition: background-color 0.3s ease, border-color 0.3s ease,
    color 0.3s ease;
}
</style>
