import { Vue, Prop, Component } from 'vue-property-decorator';

export enum RatingLevel {
    INFO,
    LOW,
    MEDIUM,
    HIGH,
}

@Component
export class RiskRating extends Vue {
  @Prop() private rating!: RatingLevel;

  get getRatingName(): string {
    switch (this.rating) {
      case RatingLevel.INFO:
        return 'Info';
      case RatingLevel.LOW:
        return 'Low';
      case RatingLevel.MEDIUM:
        return 'Medium';
      case RatingLevel.HIGH:
        return 'High';
      default:
        return 'Unknown';
    }
  }
}
