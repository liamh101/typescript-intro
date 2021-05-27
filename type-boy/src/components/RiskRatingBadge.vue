<template>
  <div class="hello">
    <span class="badge" :class="getBadgeClass">{{ getRatingName }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator';
import { RiskRating, RatingLevel } from '../mixins/RiskRating';

@Component
export default class RiskRatingBadge extends Mixins(RiskRating) {
  @Prop() private badge!: boolean;

  get getBadgeClass(): string {
    switch (this.rating) {
      case RatingLevel.INFO:
        return 'bg-info';
      case RatingLevel.LOW:
        return 'bg-primary';
      case RatingLevel.MEDIUM:
        return 'bg-warning';
      case RatingLevel.HIGH:
        return 'bg-danger';
      default:
        return '';
    }
  }
}
</script>
