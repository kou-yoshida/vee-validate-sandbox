<template>
  <div class="radio-group">
    <label v-for="(option, index) in options" :key="index" class="radio-option">
      <input
        type="radio"
        :value="option"
        class="radio-input"
        :name="fieldPath"
      />
      <span class="radio-label">{{ option }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { type QuestionItem } from "../schema";

const props = defineProps<{
  options: { id: number; label: string }[];
  fieldPath: string;
}>();

const { value: questionItem } = useField<Partial<QuestionItem>>(
  () => props.fieldPath
);
</script>

<style>
.radio-group {
  display: flex;
  flex-direction: column;
}

.radio-option {
  margin-bottom: 10px;
}

.radio-input {
  margin-right: 5px;
}

.radio-label {
  font-weight: bold;
}
</style>
