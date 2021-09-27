import { GET_QUIZZES_DONE } from "./action";

const emptyState = {quizzesDone: []}

export const quizzesDone = (state = emptyState, action) =>{
    switch (action.type) {
        case GET_QUIZZES_DONE:
            return ({...state, quizzesDone: action.payload});
        default:
            return state;
    }
}