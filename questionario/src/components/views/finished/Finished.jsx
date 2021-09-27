import {  Container, Grid, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import React from 'react';
import { FinishedCard } from './FinishedCard';

export function Finished(props) {



    const { questions } = props;
    const { questionsDone } = questions;

    return (
        <main>
            <Box>
                <Container>
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >FINISHED!</Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Score: {questionsDone.score}/{questionsDone.total}
                    </Typography>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {questionsDone.questions.map((question, i) => {
                        return (<FinishedCard key={i} question={question} index={i}></FinishedCard>)
                    })}
                </Grid>
            </Container>
        </main >
    );
}
