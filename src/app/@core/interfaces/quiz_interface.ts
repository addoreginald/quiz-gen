import { QuestionInterface } from './question_interface';

/**
 * Authour: Addo Reginald
 * Description: Quiz interface
 */

export interface QuizInterface {
    // Attributes
    questions: Array<QuestionInterface>;
    level: number;
}
