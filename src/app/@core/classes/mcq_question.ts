/**
 * Authour: Addo Reginald
 * Description: Multiple choice question
 */

import { Question } from './question';
import { AnswerInterface } from '../interfaces/answer_interface';
import { MultipleChoiceAnswer } from './mcq_answer';

export class MultipleChoiceQuestion extends Question {
    choices: Array<AnswerInterface>;

    constructor () {
        super();
        this.choices = [];
    }

    add_choice () {
        const answer = new MultipleChoiceAnswer();
        this.choices.push(answer);
    }

    remove_choice () {
        if (this.choices.length > 0) {
            this.choices.pop();
        }
    }
}
