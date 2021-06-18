import { Vue } from 'vue-property-decorator';
import { RatingLevel } from './RiskRating';

export type TodoItem = {
    id?: number,
    name: string,
    riskRating: RatingLevel,
    completed: boolean,
}

export class Todo extends Vue {

}
