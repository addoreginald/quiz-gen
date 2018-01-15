import { AnswerInterface } from '../interfaces/answer_interface';

export class Answer implements AnswerInterface {
    statement: any;

    constructor () {
        this.statement = null;
    }

    set_answer (value: any) {
        this.statement = value;
    }
}
