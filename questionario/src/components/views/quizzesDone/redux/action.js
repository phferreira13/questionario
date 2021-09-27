export const GET_QUIZZES_DONE = 'GET_QUIZZES_DONE';

export const getQuizzesDone = () => {
    const completedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || [];
    return({
        type: GET_QUIZZES_DONE,
        payload: completedQuizzes
    })
}