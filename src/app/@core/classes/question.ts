import { QuestionInterface } from '../interfaces/question_interface';
import { AnswerInterface } from '../interfaces/answer_interface';

export class Question implements QuestionInterface {
    answer: AnswerInterface;
    statement: any;

    constructor () {
        this.statement = null;
        this.answer = null;
    }
}
