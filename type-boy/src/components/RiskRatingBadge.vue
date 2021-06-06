<template>
  <span class="badge" :class="getBadgeClass">{{ getRatingName }}</span>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { RiskRating, RatingLevel } from '../mixins/RiskRating';

@Component
export default class RiskRatingBadge extends Mixins(RiskRating) {
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
