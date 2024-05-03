<template>
  <div>
    <Questions :questions="questions" />
  </div>
</template>

<script setup lang="ts">
/**
 * 設問の固定値的な
 */
const questions: {
  id: number;
  label: string;
  type: "radio";
  options: { id: number; label: string }[];
}[] = [
  {
    id: 1,
    label: "質問1",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 2,
    label: "質問2",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 3,
    label: "質問3",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },

  {
    id: 4,
    label: "質問4",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 5,
    label: "質問5",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 6,
    label: "質問6",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 7,
    label: "質問7",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 8,
    label: "質問8",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 9,
    label: "質問9",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 10,
    label: "質問10",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 11,
    label: "質問11",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 12,
    label: "質問12",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 13,
    label: "質問13",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 14,
    label: "質問14",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 15,
    label: "質問15",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 16,
    label: "質問16",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 17,
    label: "質問17",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 18,
    label: "質問18",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 19,
    label: "質問19",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 20,
    label: "質問20",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 21,
    label: "質問21",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 22,
    label: "質問22",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 23,
    label: "質問23",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 24,
    label: "質問24",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
  {
    id: 25,
    label: "質問25",
    type: "radio",
    options: [
      { id: 1, label: "選択肢1" },
      { id: 2, label: "選択肢2" },
      { id: 3, label: "選択肢3" },
    ],
  },
];

const test = ref("test");
</script>
