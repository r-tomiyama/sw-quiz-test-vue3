<template>
  <h2>スターウォーズのクイズです</h2>
  <p>
    {{ answerStore.sumOfQuestions }}問中 {{ answerStore.sumOfRights }} 問正解
  </p>
  <div class="quiz-content">
    <template
      v-for="(question, key, index) in answerStore.questionList"
      v-bind:key="key"
    >
      <Question
        :id="key"
        :index="index"
        :question="question"
        @handleChange="answerStore.setAnswer"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Question from "@/components/Question.vue";
import { configureAnswerStore } from "./answerStore";

export default defineComponent({
  name: "Quiz",
  components: {
    Question
  },
  setup() {
    const answerStore = configureAnswerStore();

    return {
      answerStore
    };
  }
});
</script>

<style>
.quiz-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 5em;
}
</style>
