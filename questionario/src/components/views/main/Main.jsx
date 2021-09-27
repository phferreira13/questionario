import { Button, Container, Stack, TextField } from '@material-ui/core';
import React from 'react';
import { Div } from './Styled';

import { QUIZZ } from '../../../constants/Views';

export const Main = props => {

    const {getQuestions, changeView, setQtdQuestion} = props;
    const {qtdQuestions} = props.questions;
    const click = questionQtd => {
        getQuestions(questionQtd);        
        changeView(QUIZZ);
    }
    return(        
            <Div>
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <TextField
                        name="questionQtd"
                        required
                        fullWidth
                        id="questionQtd"
                        label="How many questions"
                        autoFocus
                        type="number"
                        value={qtdQuestions}
                        onChange={e => {
                            setQtdQuestion(e.target.value)
                        }}
                    />
                    <Stack sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center">
                                <Button variant="contained" disabled={!(+qtdQuestions > 0)} onClick={() => click(qtdQuestions)}>Continue</Button>
                            
                    </Stack>

                </Container>
            </Div>
    );
}