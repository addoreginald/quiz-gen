import { Quiz } from '../../classes/quiz';
import { Action } from '../../interfaces/action_interface';

const quiz: Quiz = Quiz.getInstance();

export const questionsReducer = (state: Array<any> = quiz.questions, action: Action) => {
    let _state;

    switch (action.type) {
        case '[questions] add mcq':
            _state = [...state, action.payload];
            break;

        case '[questions] add timed-mcq':
            _state = [...state, action.payload];
            break;

        case '[questions] delete recently added':
            if (state.length > 0) {
                _state = [...state];
                _state.pop();
            } else if (state.length === 0) {
                _state = [...state];
            }
            break;
    }

    return _state;
};
