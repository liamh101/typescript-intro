<template>
    <select v-model="currentRating" class="form-select" @change="ratingChange()">
      <option :value="ratings.INFO">Info</option>
      <option :value="ratings.LOW">Low</option>
      <option :value="ratings.MEDIUM">Medium</option>
      <option :value="ratings.HIGH">High</option>
    </select>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { RatingLevel } from '../mixins/RiskRating';

@Component
export default class RiskRatingSelector extends Vue {
  private currentRating: RatingLevel = RatingLevel.INFO;

  private ratings = RatingLevel;

  @Prop()
  private overrideRating: RatingLevel;

  @Emit('ratingChange')
  ratingChange(): number {
    return this.currentRating;
  }

  @Watch('overrideRating')
  updateCurrentRating(overrideRating: RatingLevel): void {
    this.currentRating = overrideRating;
  }
}
</script>
