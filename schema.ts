import { object, string, number, type InferType, array } from "yup";
import { toTypedSchema } from "@vee-validate/yup";

/**
 * QuestionItemのベーススキーマ
 */
const QuestionItemSchemaBase = object({
  id: string().required().default(undefined),
  value: number().required().default(undefined),
});

/** モデルの型定義 */
export type QuestionItem = InferType<typeof QuestionItemSchemaBase>;
/** QuestionItem typedSchema */
export const QuestionItemSchema = QuestionItemSchemaBase;
/** QuestionItems typedSchema */
export const QuestionItemListSchema = object({
  items: array().of(QuestionItemSchemaBase).required().min(1).default([]),
});
/** モデル生成 */
export const QuestionItemCast = (value: any): QuestionItem => {
  return QuestionItemSchemaBase.cast(value);
};
export default {};
