import React from 'react';
import { Grid, Button} from '@mui/material';
import '../Calculator.css';

function FunctionButton(props) {
  const onClick = e => {
    props.setForm(props.form);
    props.openDialog();
  }
  return (
    <Grid item xs={6}>
      <Button
        className="button function-button"
        variant='contained'
        onClick={onClick}
        aria-label={props.label}
        disableRipple
      >
        {props.label.trim()}
      </Button>
    </Grid>
  );
};

export { FunctionButton }
