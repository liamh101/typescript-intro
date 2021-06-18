<template>
  <tr :class="getRowClass">
    <td>
      {{todoItem.name}}
    </td>
    <td>
      <RiskRatingBadge :rating="todoItem.riskRating"/>
    </td>
    <td>
      <input
        v-model="todoItem.completed"
        class="form-check-input"
        type="checkbox"
      />
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { TodoItem } from '../../mixins/Todo';
import RiskRatingBadge from '../RiskRatingBadge.vue';

@Component({
  components: {
    RiskRatingBadge,
  },
})
export default class TodoTableRow extends Vue {
  @Prop() private todoItem!: TodoItem;

  get getRowClass(): string {
    if (this.todoItem.completed === true) {
      return 'table-success';
    }

    return '';
  }
}
</script>
