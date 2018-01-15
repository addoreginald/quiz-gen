import { Question } from '../classes/question';
import { MultipleCoiceQuestion } from '../classes/mcq_question';


export class QuestionFactory {
    create_question (type: string) {
        let question;

        switch (type) {
            case 'basic':
                question = new Question();
                break;

            case 'mcq':
                question = new MultipleCoiceQuestion();
                break;
        }

        return question;
    }
}
