<template>
  <tr>
    <td>
      <input v-model="todoItem.name" class="form-control" />
    </td>
    <td>
      <RiskRatingSelector
        :override-rating="todoItem.riskRating"
        @ratingChange="rating => todoItem.riskRating = rating"
      />
    </td>
    <td>
      <button class="btn btn-primary" @click="createItem">Create</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import { TodoItem } from '../../mixins/Todo';
import { RatingLevel } from '../../mixins/RiskRating';
import RiskRatingSelector from '../RiskRatingSelector.vue';

@Component({
  components: { RiskRatingSelector },
})
export default class TodoNewItemRow extends Vue {
  private todoItem: TodoItem = {
    name: '',
    riskRating: RatingLevel.INFO,
    completed: false,
  };

  private id = 3;

  private overrideRating: RatingLevel = RatingLevel.INFO;

  createItem(): TodoItem {
    const newItem : TodoItem = { ...this.todoItem };
    newItem.id = this.id;
    this.id += 1;

    this.todoItem = {
      name: '',
      riskRating: RatingLevel.INFO,
      completed: false,
    };

    this.overrideRating = RatingLevel.INFO;

    return this.submitEvent(newItem);
  }

  @Emit('submitted')
  submitEvent(newItem: TodoItem): TodoItem {
    return this.newItem;
  }
}
</script>
