import { Answer } from './answer';

export class MultipleChoiceAnswer extends Answer implements MultipleChoiceAnswer {
    valid: boolean;

    constructor () {
        super();
        this.valid = false;
    }

    set_validity (value: boolean) {
        this.valid = value;
    }
}
