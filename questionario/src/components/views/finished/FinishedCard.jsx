import { Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { CorrectAnswer, WrongAnswer } from './Styled';

export function FinishedCard(props) {
    //#ffa0a0
    const {question, index} = props;

    const backgroundColor = question.correct ? '#dcffdd' : '#ffa0a0';

    const answer = () => {
        if (question.correct){
            return <Typography>Selected: <CorrectAnswer>{question.selected}</CorrectAnswer></Typography> 
        }
        else {
            return <Typography>Selected: <WrongAnswer>{question.selected}</WrongAnswer></Typography> 
        }
    }

    return (
        <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ background: backgroundColor }}>
                <CardHeader title={`Question ${index+1}`} subheader={question.category}></CardHeader>
                <hr />
                <CardContent>{question.questionTitle}</CardContent>
                <hr />
                <CardActions sx={{ display: 'block !important' }}>
                    {answer()}
                    <Typography sx={{ marginLeft: '0px !important' }}>Correct: <CorrectAnswer>{question.correct_answer}</CorrectAnswer></Typography>
                </CardActions>
            </Card>
        </Grid>

    );
}

