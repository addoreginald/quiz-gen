
import { Question } from '../classes/question';
import { MultipleCoiceQuestion } from '../classes/multiple_choice_question';

export class QuestionFactory {
    create_question (type: string): Question {
        let question: Question;

        switch (type) {
            case 'mcq':
                question = new MultipleCoiceQuestion();
                break;
        }

        return question;
    }
}
