import { ThemeProvider } from '@emotion/react';
import { Button, Card, CardActions, CardContent, CardHeader, Container, createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import { HOME } from '../../constants/Views';



export const Question = props => {

    const theme = createTheme({
        palette: {
          cancel: {
            main: 'red',
            contrastText: '#fff',
          },
        },
      });

    

    const { questions } = props;
    const totalQuestions = questions.question.length;
   
        const { setAnswer, moveQuestion, finish, changeView } = props;
        
        const { currentQuestionNumner } = questions;
    
        const actualQuestion = questions.question[currentQuestionNumner];
    
        const getButton = () => {
            if(currentQuestionNumner < totalQuestions-1){
                return(
                    <Button variant="contained" disabled={currentQuestionNumner === totalQuestions - 1} onClick={() => moveQuestion(currentQuestionNumner + 1)}>Next</Button>
                )
            }
            else{
                return(
                    <Button variant="contained" color="success" onClick={() => finish()}>End</Button>                    
                )
            }
        }
    
        return (
            <Container maxWidth="sm" sx={{ textAlign: "center", pt: 8, pb: 6 }}>
                <Card>
                    <CardHeader title={actualQuestion.category} subheader={`Question ${currentQuestionNumner + 1} of ${totalQuestions}`}></CardHeader>
                    <CardContent>
                        <Box>
                            <Typography>{actualQuestion.questionTitle}</Typography>
                        </Box>
                    </CardContent>
                    <CardActions sx={{ display: 'block' }}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Select a answer</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setAnswer(e.target.value)}>
                                {actualQuestion.answers.map((answer, i) =>                                 
                                    <FormControlLabel key={i} value={answer} control={<Radio checked={answer === actualQuestion.selected}/>} label={answer} />
                                )}
                            </RadioGroup>
                        </FormControl>
                    </CardActions>
                </Card>
                <Stack sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                    <Button variant="contained" disabled={currentQuestionNumner === 0} onClick={() => moveQuestion(currentQuestionNumner - 1)}>Previous</Button>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="cancel" onClick={() => {
                            moveQuestion(0); 
                            changeView(HOME)}}>Cancel</Button>
                    </ThemeProvider>
                    {getButton()}
                </Stack>
            </Container>
        )

    
}
