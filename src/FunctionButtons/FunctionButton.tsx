import React from 'react';
import { Grid, Button } from '@mui/material';
import '../styling/Calculator.css';

type FunctionButtonProps = {
  label: string,
  onClick: ()=>void
}

function FunctionButton(props: FunctionButtonProps) {
  const { label, onClick } = props;
  return (
    <Grid item xs={6} className='function-buttons-grid-item'>
      <Button
        className="button function-button"
        variant='contained'
        onClick={onClick}
        aria-label={props.label}
        disableRipple
      >
        {label.trim()}
      </Button>
    </Grid>
  );
};

export { FunctionButton }
