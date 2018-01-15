/**
 * Authour: Addo Reginald
 * Description: Multiple choice question
 */

import { Question } from './question';
import { AnswerInterface } from '../interfaces/answer_interface';

export class MultipleCoiceQuestion extends Question {
    choices: Array<AnswerInterface>;

    constructor () {
        super();
        this.choices = [];
    }

    add_choice () {
        this.choices.push(null);
    }

    remove_choice () {
        if (this.choices.length > 0) {
            this.choices.pop();
        }
    }
}
