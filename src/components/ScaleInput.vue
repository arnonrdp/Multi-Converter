<template>
  <tr>
    <td>
      <input
        type="number"
        :id="modelValue"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </td>
    <td>
      <label :for="modelValue">
        {{ label }}
      </label>
    </td>
  </tr>
</template>

<script>
export default {
  name: "ScaleInput",
  props: ["modelValue", "label"],
  emits: ["update:modelValue"],
};
</script>
