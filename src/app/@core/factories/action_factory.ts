import { Action } from '../interfaces/action_interface';

export function createAction (type: string, payload?: any): Action {
    if (payload) {
        return {type, payload};
    } else {
        return {type};
    }
}
