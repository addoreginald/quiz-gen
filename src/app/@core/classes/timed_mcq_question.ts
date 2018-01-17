import { MultipleChoiceQuestion } from './mcq_question';

export class TimedMultipleChoiceQuestion extends MultipleChoiceQuestion {
    time: number;

    constructor () {
        super();
        this.time = 0;
    }
}
