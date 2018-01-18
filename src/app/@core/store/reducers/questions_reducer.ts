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

        case '[questions] edit question':
            _state = [...state];
            _state[action.payload.index].statement = action.payload.value;
            break;

        case '[questions] edit time':
            _state = [...state];
            _state[action.payload.index].time = action.payload.value;
            break;

        case '[questions] edit answer statement':
            _state = [...state];
            _state[action.payload.index].choices[action.payload.choice_index].statement = action.payload.value;
            break;

        case '[questions] add answer':
            _state = [...state];
            if (_state[action.payload.index].choices.length < 4) {
                _state[action.payload.index].choices.push(action.payload.value);
            }
            break;

        case '[questions] remove answer':
            _state = [...state];
            if (_state[action.payload.index].choices.length > 2) {
                _state[action.payload.index].choices.pop();
            }
            break;

        case '[questions] set answer':
            _state = [...state];
            _state[action.payload.index].answer = action.payload.value;
            break;

        case '[question] set answer validity':
            _state = [...state];
            const array = _state[action.payload.index].choices;

            for (let index = 0; index < array.length; index++) {
                const element = array[index];

                if (index === action.payload.choice_index) {
                    element.valid = true;
                } else {
                    element.valid = false;
                }
            }
            // _state[action.payload.index].choices[action.payload.choice_index].valid = action.payload.value;
            break;
    }

    return _state;
};
