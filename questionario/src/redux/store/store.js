import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import multi from 'redux-multi';
import promise from 'redux-promise';
import { questions } from "../reducers/reducer";
import { quizzesDone } from "../../components/views/quizzesDone/redux/reducer";


const rootReducer = combineReducers({
    questions: questions,
    quizzesDone: quizzesDone
})

export const configStore = () => {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__();
    return applyMiddleware(thunk,multi,promise)(createStore)(rootReducer, devTools)
}