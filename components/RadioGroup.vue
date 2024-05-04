<template>
  <div class="radio-group">
    <label v-for="(option, index) in options" :key="index" class="radio-option">
      <input
        type="radio"
        :value="option.id"
        class="radio-input"
        :name="fieldPath"
        @change="handleChange"
        :checked="questionValue === option.id"
      />
      <span class="radio-label">{{ option }}</span>
    </label>
    {{ errorMessage }}
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { type QuestionItem } from "../schema";

const props = defineProps<{
  options: { id: number; label: string }[];
  fieldPath: string;
  questionId: number;
}>();

const {
  value: questionValue,
  handleChange,
  errorMessage,
} = useField<number | undefined>(() => `${props.fieldPath}.value`);

const { value: questionId } = useField<number>(
  () => `${props.fieldPath}.id`,
  undefined,
  {
    initialValue: props.questionId,
  }
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
