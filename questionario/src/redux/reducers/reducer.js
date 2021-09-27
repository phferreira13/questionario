import { HOME } from "../../constants/Views";
import { CHANGE_VIEW, FINISH, GET_QUESTIONS, MOVE_QUESTION, SET_ANSWER, SET_FINISHED, SET_QTD_QUESTION } from "../actions/actionType";

const question0 = {
    category: '',
    difficulty: '',
    questionTitle: '',
    answers: [],
    correct_answer: '',
    selected: '',
    correct: false
}


const questionsTest = {
    question: [question0],
    currentQuestionNumner: 0,
    qtdQuestions: 0,
    currentView: HOME,
    questionsDone: []
};

const getRandonCorrectAnswer = (incorrect_answers, correct) => {
    const max = incorrect_answers.length;
    const correctPos = Math.floor(Math.random() * (max - 0 + 1)) + 0;
    let answers = [];
    let x = 0;
    for (let i = 0; i < max+1; i++) {
        answers.push(i === correctPos ? decodeHTMLEntities(correct) : decodeHTMLEntities(incorrect_answers[x++]));
    }
    return answers;
}

function decodeHTMLEntities (str) {
    var element = document.createElement('div');
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }

    return str;
  }


export const questions = (state = questionsTest, action ) => {
    switch (action.type){
        case GET_QUESTIONS:
            const res = action.payload.data;
            
            let questions = [];
            res.results.forEach(e => {
                const answers = getRandonCorrectAnswer(e.incorrect_answers, e.correct_answer);
                const {category, difficulty, correct_answer} = e;
                const question = {
                    category: decodeHTMLEntities(e.category),
                    difficulty,
                    questionTitle: decodeHTMLEntities(e.question),
                    answers,
                    correct_answer: decodeHTMLEntities(e.correct_answer),
                    selected: '',
                    correct: false
                }
                questions.push(question);
            });
            return {...state, question: questions};
        case SET_ANSWER:
            const {currentQuestionNumner} = state;
            const {correct_answer} = state.question[currentQuestionNumner]; 
            const question = {
                ...state.question[currentQuestionNumner], 
                selected: action.payload, 
                correct: correct_answer === action.payload
            };
            const oldQuestions = state.question;
            let updatedQuestions = [];
            oldQuestions.forEach((q, i) => {
                i === currentQuestionNumner ? updatedQuestions.push(question) : updatedQuestions.push(q)
            });
            return {...state, question: updatedQuestions}
        case MOVE_QUESTION:
            return({...state, currentQuestionNumner: action.payload})    
        case CHANGE_VIEW:
            return({...state, currentView: action.payload})
        case SET_QTD_QUESTION:
            return({...state, qtdQuestions: action.payload})
        case FINISH:
            const score = state.question.filter(q => q.correct).length;
            const total = state.question.length;
            const questionsDone = {
                end: action.payload,
                questions: [...state.question],
                score,
                total
            }
            const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || [];
            completedQuizzes.push(questionsDone)
            localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes))
            return ({...state, questionsDone});
        case SET_FINISHED:
            return ({...state, questionsDone: action.payload})
        default:
            return state;
    }
}