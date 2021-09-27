import { FormControlLabel } from '@material-ui/core';
import React from 'react';

export const Answer = props => {
    const { value, control, label } = props;
    return ( 
        <FormControlLabel value={value} control={control} label={label}/>
     );
}
