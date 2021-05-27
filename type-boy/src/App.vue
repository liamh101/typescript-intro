<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Introduction to Vue Typescript"/>

    <RiskRatingSelector @ratingChange="rating => currentRating = rating" />

    <RiskRatingBadge :rating="currentRating" badge/>

    <Counter/>

    <TodoTable :todoItems="todoItems" @item-created="addItem" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Counter from './components/Counter.vue';
import RiskRatingBadge from './components/RiskRatingBadge.vue';
import RiskRatingSelector from './components/RiskRatingSelector.vue';
import TodoTable from './components/TodoComponents/TodoTable.vue';
import TodoTableRow from './components/TodoComponents/TodoTableRow.vue';
import { RatingLevel } from './mixins/RiskRating';
import { TodoItem } from './mixins/Todo';

@Component({
  components: {
    HelloWorld,
    Counter,
    RiskRatingBadge,
    RiskRatingSelector,
    TodoTable,
    TodoTableRow,
  },
})
export default class App extends Vue {
  private currentRating : RatingLevel = RatingLevel.INFO;

  private ratings = RatingLevel;

  private todoItems : TodoItem[] = [
    {
      id: 1,
      name: 'Finish this List',
      riskRating: 0,
      completed: false,
    },
    {
      id: 2,
      name: 'Add Styling',
      riskRating: RatingLevel.HIGH,
      completed: false,
    },
  ];

  addItem(todoItem: TodoItem) {
    this.todoItems.push(todoItem);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
