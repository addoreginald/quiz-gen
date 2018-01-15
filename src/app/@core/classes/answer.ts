import { AnswerInterface } from '../interfaces/answer_interface';

export class Answer implements AnswerInterface {
    statement: any;

    constructor (value: any) {
        this.statement = value;
    }
}
