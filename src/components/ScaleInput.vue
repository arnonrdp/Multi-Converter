<template>
  <tr>
    <td>
      <input type="number" :id="modelValue" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </td>
    <td>
      <label :for="modelValue">
        {{ label }}
      </label>
    </td>
  </tr>
</template>

<script setup>
defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, required: true }
})
defineEmits(['update:modelValue'])
</script>
