import React from 'react';
import '../styling/Calculator.css';
import { Grid, Button } from '@mui/material';
import { noop } from '../util/util';

type FunctionButtonProps = {
  label: string,
  onClick: () => void
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function FunctionButton(props: FunctionButtonProps):JSX.Element {
  const { label, onClick } = props;
  React.useEffect(noop, []);
  return (
    <Grid item xs={6} className='function-buttons-grid-item'>
      <Button
        className="button function-button"
        variant='contained'
        color='secondary'
        onClick={onClick}
        aria-label={label}
        disableRipple
      >
        {label.trim()}
      </Button>
    </Grid>
  );
}

export { FunctionButton };
