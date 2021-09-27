import { Container, List, ListItem, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React, { Component, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Div } from '../main/Styled';

export class QuizzesDone extends Component {

    constructor(props) {
        super(props);
        const { getQuizzesDone } = this.props;
        getQuizzesDone();

    }

    openFinished(finishedQuizz){
        const {history} = this.props;
        const {setFinished} = this.props;
        setFinished(finishedQuizz);
        history.push('/');
    }

    render() {
        const quizzes = this.props.quizzesDone;
        const { quizzesDone } = quizzes;
        
        return (

            <Container >
                <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                    <Typography component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom>Quizzes done</Typography>

                </Container>
                <Box sx={{ pb: 7 }}>
                    <List>
                        {quizzesDone.map((quizz, i) => {
                            return (
                                <ListItem button onClick={() =>this.openFinished(quizz)}>
                                    <Typography sx={{ flexGrow: 1 }}>
                                        Done: {quizz.end}
                                    </Typography>
                                    <Typography>
                                        Score: {quizz.score}/{quizz.total}
                                    </Typography>                                    
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Container>

        )
    }
}
