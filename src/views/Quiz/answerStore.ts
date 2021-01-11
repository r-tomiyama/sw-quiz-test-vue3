import { Question, QuestionId, Result } from "@/views/Quiz/types";
import { reactive } from "vue";
import { questionList } from "./resource";

export function configureAnswerStore() {
  const keys = Object.keys(questionList) as (keyof typeof questionList)[];
  const state: State = reactive({
    questionList: keys.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: { ...questionList[cur], isRight: undefined }
      }),
      {}
    ) as QuestionList
  });

  function correct(key: QuestionId, value: string) {
    return state.questionList[key].right === value;
  }

  return {
    get sumOfQuestions() {
      return Object.entries(state.questionList).length;
    },
    get sumOfRights() {
      return Object.entries(state.questionList).filter(v => v[1].isRight)
        .length;
    },
    get questionList() {
      return state.questionList;
    },
    setAnswer(key: QuestionId, value: string) {
      state.questionList[key].answer = value;
      state.questionList[key].isRight = correct(key, value);
    }
  };
}

type QuestionList = { [K in QuestionId]: Question & Result };

interface State {
  questionList: QuestionList;
}
