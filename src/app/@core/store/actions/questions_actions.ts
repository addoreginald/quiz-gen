import { QuestionBuilder } from '../../builders/question_builder';
import { createAction } from '../../factories/action_factory';

export const addMcq = () => {
    const questionBuilder = new QuestionBuilder();
    const mcq = questionBuilder.build_mcq();

    return createAction('[questions] add mcq', mcq);
};

export const addTimedMcq = () => {
    const questionBuilder = new QuestionBuilder();
    const timed_mcq = questionBuilder.build_timed_mcq();

    return createAction('[questions] add timed-mcq', timed_mcq);
};

export const deleteRecent = () => {
    return createAction('[questions] delete recently added');
}
