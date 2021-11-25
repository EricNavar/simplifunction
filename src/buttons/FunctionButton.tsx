import React from 'react';
import '../styling/Calculator.css';
import { Grid, Button } from '@mui/material';

type FunctionButtonProps = {
  label: string,
  onClick: () => void
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function FunctionButton(props: FunctionButtonProps) {
  const { label, onClick } = props;
  React.useEffect(() => { }, []);
  return (
    <Grid item xs={6} className='function-buttons-grid-item'>
      <Button
        className="button function-button"
        variant='contained'
        onClick={onClick}
        aria-label={label}
        disableRipple
      >
        {label.trim()}
      </Button>
    </Grid>
  );
};

export { FunctionButton }
