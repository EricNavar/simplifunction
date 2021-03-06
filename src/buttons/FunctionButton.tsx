import React from 'react';
import '../styling/Calculator.css';
import { Button } from '@mui/material';
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
    <Button
      className="button function-button"
      variant='outlined'
      onClick={onClick}
      aria-label={label}
      disableRipple
      disableElevation
    >
      {label.trim()}
    </Button>
  );
}

export { FunctionButton };
