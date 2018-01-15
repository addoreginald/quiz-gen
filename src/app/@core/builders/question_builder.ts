import { QuestionFactory } from '../factories/question_factory';
import { AnswerFactory } from '../factories/answer_factory';
import { MultipleChoiceQuestion } from '../classes/mcq_question';

export class QuestionBuilder {

    build_mcq () {
        // Produce question from factory
        const question = new QuestionFactory();
        const mcq_question: MultipleChoiceQuestion = question.create_question('mcq');

        // Produce answer from factory
        const answer = new AnswerFactory();

        for (let index = 0; index < 4; index++) {
            const mcq_answers = answer.create_answer('mcq');
            mcq_question.add_choice();
        }

        return mcq_question;
    }
}
