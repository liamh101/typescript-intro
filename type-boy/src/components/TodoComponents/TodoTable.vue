<template>
  <table class="table">
      <thead>
          <tr>
              <th>
                  Name
              </th>
              <th>
                  Risk Rating
              </th>
              <th>
                  Completed
              </th>
          </tr>
      </thead>
      <tbody>
        <TodoTableRow v-for="todoItem in todoItems" :key="todoItem.id" :todo-item="todoItem" />
        <TodoNewItemRow @submitted="newItem" />
      </tbody>
  </table>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import TodoTableRow from './TodoTableRow.vue';
import TodoNewItemRow from './TodoNewItemRow.vue';
import { TodoItem } from '../../mixins/Todo';

@Component({
  components: {
    TodoTableRow,
    TodoNewItemRow,
  },
})
export default class TodoTable extends Vue {
  @Prop() private todoItems!: TodoItem[];

  @Emit('item-created')
  newItem(todoItem:TodoItem): TodoItem {
    return this.todoItem;
  }
}
</script>
