<template>
  <div>
    <template v-for="(questions, index) in chunkedQuestions">
      <Questions
        v-if="displayPage === index"
        :questions="questions"
        :chunked-index="index"
      />
    </template>

    <button @click="prevPage" :disabled="isMinPage">前へ</button>
    <button @click="nextPage" :disabled="isMaxPage">次へ</button>

    <button @click="onClick" v-if="isMaxPage">送信</button>

    <pre
      >{{ values }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { useForm, type ValidationResult } from "vee-validate";
import { QuestionItemListSchema } from "./schema";
import { toTypedSchema } from "@vee-validate/yup";

const router = useRouter();
const route = useRoute();
const isMaxPage = computed(
  () => displayPage.value === chunkedQuestions.value.length - 1
);
const isMinPage = computed(() => displayPage.value === 0);

const { handleSubmit, values, validateField, setFieldValue, errors } = useForm({
  validationSchema: toTypedSchema(QuestionItemListSchema),
  keepValuesOnUnmount: true,
});

/**
 * 指定したindexから10件のバリデーションを実行する
 */
const validateRange = async (startIndex: number, limit: number) => {
  const validationFns = Array.from({ length: limit }, (_, i) => {
    // @ts-ignore
    return validateField(`items[${startIndex + i}].value`);
  });

  const result = await Promise.all(validationFns);

  return result.every((r) => r.valid);
};

const displayPage = ref(Number(route.query.page) - 1 || 0);

const nextPage = async () => {
  const result = await validateRange(
    displayPage.value * 10,
    chunkedQuestions.value[displayPage.value].length
  );
  console.log(result);
  if (!isMaxPage.value) {
    displayPage.value++;
    router.push({ query: { page: displayPage.value + 1 } });
  }
};

const prevPage = () => {
  if (!isMinPage.value) {
    displayPage.value--;
    router.push({ query: { page: displayPage.value + 1 } });
  }
};

watch(
  () => route.query.page,
  (newPage) => {
    // クエリがない場合は1ページ目にする
    if (isNaN(Number(newPage))) {
      router.push({ query: { page: 1 } });
      displayPage.value = 0;
    }

    // 表示ページをクエリに合わせる
    displayPage.value = Number(newPage) - 1;
  },
  {
    immediate: true,
  }
);

const onClick = handleSubmit(
  (values) => {
    console.log(values);
  },
  (e) => {
    console.log("error", e);
  }
);

/**
 * 引数の配列を10件ずつに分割する、あまりは10件未満のアイテムになる
 */
const chunk = (array: any[], size: number) =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, i * size + size)
  );

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

const chunkedQuestions = ref(chunk(questions, 10));
</script>
