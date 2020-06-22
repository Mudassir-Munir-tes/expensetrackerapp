import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';

export const Titlebar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    EXPENSE TRACKER!
                </Typography>
            </Toolbar>
        </AppBar>
    );
}