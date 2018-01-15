import { Question } from './question';
import { AnswerInterface } from '../interfaces/answer_interface';

/**
 * Authour: Addo Reginald
 * Description: Multiple choice question
 */


export class MultipleCoiceQuestion extends Question {
    choices: Array<AnswerInterface>;

    constructor () {
        super();
        this.choices = null;
    }
}
