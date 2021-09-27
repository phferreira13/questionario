
import { FINISHED } from "../../constants/Views";
import { GetQuestions } from "../../service/questionsService"
import { CHANGE_VIEW, FINISH, GET_QUESTIONS, MOVE_QUESTION, SET_ANSWER, SET_FINISHED, SET_QTD_QUESTION } from "./actionType"


export const getQuestions = questionsQtd => {


    const res = GetQuestions(questionsQtd);

    return ({
        type: GET_QUESTIONS,
        payload: res
    });
}

export const setAnswer = selectedAnswer => {
    return ({
        type: SET_ANSWER,
        payload: selectedAnswer
    })
}

export const moveQuestion = nextQuestionNumner => {
    return ({
        type: MOVE_QUESTION,
        payload: nextQuestionNumner
    })
}

export const changeView = view => {
    return({
        type: CHANGE_VIEW,
        payload: view
    })
}

export const setQtdQuestion = qtd => {
    return ({
        type: SET_QTD_QUESTION,
        payload: qtd
    })
}

export const finish = () => dispatch => {
    const today = new Date(Date.now()).toLocaleDateString();
    dispatch({
        type: FINISH,
        payload: today
    })
    dispatch(changeView(FINISHED))
}

export const setFinished = finishedQuizz => dispatch => {
    dispatch({
        type: SET_FINISHED,
        payload: finishedQuizz
    });
    dispatch(changeView(FINISHED));
}