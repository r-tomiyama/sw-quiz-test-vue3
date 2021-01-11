const questionId = ["ep1", "ep2", "ep3", "ep4"] as const;
export type QuestionId = typeof questionId[number];

export interface Question {
  text: string;
  right: string;
  options: string[];
}

export interface Result {
  answer?: string;
  isRight: boolean;
}
