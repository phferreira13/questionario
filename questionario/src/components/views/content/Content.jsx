import React from 'react';
import { FINISHED, HOME, QUIZZ } from '../../../constants/Views';
import { QuestionContainer } from '../../question/QuestionContainer';
import { FinishedContainer } from '../finished/FinishedContainer';
import { MainContainer } from '../main/MainContainer';

export function Content(props) {

    const {currentView} = props.questions
    const {changeView} = props;

    const getCurrentView = view => {
        const { questions } = props;
        const totalQuestions = questions.question.length;
        
        if(view === HOME) {
            return <MainContainer></MainContainer>
        } 
        else if(view === QUIZZ) {
            if (totalQuestions === 0){            
                changeView(HOME)
            }
            return <QuestionContainer></QuestionContainer>
        }
        else if (view === FINISHED){
            return <FinishedContainer></FinishedContainer>
        }
    }
    return (
        getCurrentView(currentView)
      );
}
