<template>
    <div>
        <p>{{counter}}</p>

        <button id="decrement" class="btn btn-primary me-3" @click="decrement">Decrement</button>
        <button id="increment" class="btn btn-primary ms-3" @click="increment">Increment</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Counter extends Vue {
  counter = 0;

  increment(): void {
    this.counter += 1;
  }

  decrement(): void {
    this.counter -= 1;
  }
}
</script>
