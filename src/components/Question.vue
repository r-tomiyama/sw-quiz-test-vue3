<template>
  <div class="quiz">
    <h2>【Q{{ index + 1 }}】{{ TITLE[id] }}: {{ question.text }}</h2>
    <div>
      <form>
        <label>
          <select @change="change" style="width:90%;">
            <template v-for="option in question.options" v-bind:key="option">
              <option :value="option">{{ option }}</option>
            </template>
          </select>
        </label>
        <p>{{ result }}</p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, SetupContext } from "vue";
import { QuestionId, Question, Result } from "@/views/Quiz/types.ts";

const TITLE: { [K in QuestionId]: string } = {
  ep1: "ファントム・メナス",
  ep2: "クローン戦争",
  ep3: "シスの復讐",
  ep4: "新たなる希望"
};

export default defineComponent({
  name: "Question",
  props: {
    id: {
      type: String as PropType<QuestionId>,
      default: "ep1",
      reqire: true
    },
    index: {
      type: Number,
      default: 1,
      reqire: true
    },
    question: {
      type: Object as PropType<Question & Result>,
      default: {},
      reqire: true
    }
  },
  setup(prop, context: SetupContext) {
    function change(event: any) {
      context.emit("handleChange", prop.id, event.target.value as string);
    }
    const result = computed(() => {
      switch (true) {
        case prop.question.isRight:
          return "正解";
        case prop.question.isRight == false:
          return "不正解";
        default:
          return undefined;
      }
    });

    return {
      change,
      result,
      TITLE
    };
  }
});
</script>

<style>
.quiz {
  width: 30%;
  padding: 1em 0.5em;
  margin: 1em 0;
  background-color: #efefef;
}
</style>
