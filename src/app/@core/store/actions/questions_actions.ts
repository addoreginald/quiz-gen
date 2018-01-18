import { QuestionBuilder } from '../../builders/question_builder';
import { createAction } from '../../factories/action_factory';
import { MultipleChoiceAnswer } from '../../classes/mcq_answer';

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
};

export const editQuestionStatement = (index: number, value: string) => {
    const payload = {index, value};
    return createAction('[questions] edit question', payload);
};

export const editQuestionTime = (index: number, value: number) => {
    const payload = {index, value};
    return createAction('[questions] edit time', payload);
};

export const editAnswerStatement = (index: number, choice_index: number, value: string) => {
    const payload = {index, choice_index, value};
    return createAction('[questions] edit answer statement', payload);
};

export const addAnswer = (index: number, value: MultipleChoiceAnswer) => {
    const payload = {index, value};
    return createAction('[questions] add answer', payload);
};

export const removeAnswer = (index: number) => {
    const payload = {index};
    return createAction('[questions] remove answer', payload);
};

export const setAnswer = (index: number, value: number) => {
    const payload = {index, value};
    return createAction('[questions] set answer', payload);
};

export const setValidity = (index: number, choice_index: number) => {
    const payload = {index, choice_index};
    return createAction('[question] set answer validity', payload);
};
