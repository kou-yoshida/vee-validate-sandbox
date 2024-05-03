<template>
  <div>
    <h3>フォームアイテム</h3>
    <div v-for="(question, index) in questions" :key="index">
      <div v-if="question.type === 'radio'">
        <h4>{{ question.label }}</h4>
        <RadioGroup
          :options="question.options"
          :field-path="`path[${index}]`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Radio = {
  id: number;
  label: string;
  type: "radio";
  options: { id: number; label: string }[];
};

type Question = Radio;

const props = defineProps<{
  questions: Question[];
}>();
</script>
