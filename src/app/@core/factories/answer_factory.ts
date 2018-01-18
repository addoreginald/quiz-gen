import { Answer } from '../classes/answer';
import { AnswerInterface } from '../interfaces/answer_interface';
import { MultipleChoiceAnswer } from '../classes/mcq_answer';
import { Attribute } from '@angular/core/src/metadata/di';

export class AnswerFactory {

    create_answer (type: string): any {
        switch (type) {
            case 'basic':
                let basic_answer: Answer;

                basic_answer = new Answer();
                basic_answer.set_answer('');

                return basic_answer;

            case 'mcq':
                let mcq_answer: MultipleChoiceAnswer;

                mcq_answer = new MultipleChoiceAnswer();
                mcq_answer.set_answer('');
                mcq_answer.set_validity(false);

                return mcq_answer;

            default:
                return null;
        }
    }
}
