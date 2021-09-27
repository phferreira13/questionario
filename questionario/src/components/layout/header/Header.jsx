import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { LinkMenu } from './Styled';

export const HeaderBar = props => {
    return (
        <Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                        <LinkMenu href="/">
                            Quizz
                        </LinkMenu>
                        
                    </Typography>
                    <nav>
                        <LinkMenu
                            variant="button"
                            color="text.primary"
                            href="/quizzesDone"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Quizzes done
                        </LinkMenu>
                    </nav>
                </Toolbar>
            </AppBar>

        </Fragment>

    );
}
