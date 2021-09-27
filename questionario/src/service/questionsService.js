import axios from "axios"

export const GetQuestions = questionQtd => {
    const URL = `https://opentdb.com/api.php?amount=${questionQtd}`;
    return axios.get(URL);
}