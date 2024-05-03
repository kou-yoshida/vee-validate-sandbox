import { object, string, number, type InferType } from "yup";
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
/** typedSchema */
export const QuestionItemSchema = toTypedSchema(QuestionItemSchemaBase);
/** モデル生成 */
export const QuestionItemCast = (value: any): QuestionItem => {
  return QuestionItemSchemaBase.cast(value);
};
export default {};
