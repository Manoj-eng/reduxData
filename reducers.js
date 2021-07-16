import {ADDITION, SUBTRACTION, LANGUAGE} from './actionTypes';

const initialState = {
    counter: 0,
    language: [],
};

export const mainReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADDITION:
            return {...state, counter: state.counter + 1};


            case SUBTRACTION: 
            return {...state, counter: state.counter - 1};

            case LANGUAGE:
                return {...state, language: action.payload };

            default:
                return state;

    }
}