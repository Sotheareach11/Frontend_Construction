<template>
  <UFormField
    class="text-[12px] text-[#898989]"
    :label="label"
    :required="required"
  >
    <UInput
      :icon="icon"
      :trailing-icon="trailIcon"
      :type="type"
      size="xl"
      class="min-w-full w-full"
      v-model="model"
      :placeholder="placeholder"
      :ui="{
        base: 'w-full h-[50px] rounded-[24px] border-0 placeholder:text-dimmed focus:outline-none focus:ring-2 focus:ring-[#11A79F] focus:border-[#11A79F] disabled:cursor-not-allowed disabled:opacity-75 transition-colors',
      }"
    />
  </UFormField>
</template>

<script setup>
const props = defineProps([
  "label",
  "placeholder",
  "required",
  "icon",
  "trailIcon",
  "type",
]);
const type = computed(() => props.type ?? "text");
const label = computed(() => props.label);
const placeholder = computed(() => props.placeholder);
const icon = computed(() => props.icon ?? "");
const trailIcon = computed(() => props.trailIcon ?? "");
const required = computed(() => props.required ?? false);
const model = defineModel();
</script>
