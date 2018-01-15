import { Answer } from '../classes/answer';
import { AnswerInterface } from '../interfaces/answer_interface';

export class AnswerFactory {

    create_answer (type: string, value: any): AnswerInterface {
        let answer: AnswerInterface;

        switch (type) {
            case 'mcq':
                if (value) {
                    answer = new Answer(value);
                } else {
                    answer = null;
                }
                break;

            default:
                answer = null;
        }

        return answer;
    }
}
