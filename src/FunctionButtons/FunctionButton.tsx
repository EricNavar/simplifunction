import React from 'react';
import { Grid, Button } from '@mui/material';
import '../Calculator.css';

type FunctionButtonProps = {
  form: JSX.Element,
  label: string,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function FunctionButton(props: FunctionButtonProps) {
  const { setForm, setDialogOpen, form } = props;
  const onClick = () => {
    setForm(form);
    setDialogOpen(true);
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
