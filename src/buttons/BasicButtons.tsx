import React from 'react';
import {
  Grid,
  Button,
} from '@mui/material';
import '../styling/Calculator.css';

type InputButtonProps = {
  input: string,
  addToUserInput: (strToAdd: string, focus: boolean) => void
}

// no state
const InputButton = React.memo(function InputButton(props: InputButtonProps) {
  const { input, addToUserInput } = props;
  React.useEffect(() => { }, [input]);
  function onClick() {
    addToUserInput(input, false);
  }
  return (
    <Button
      className="button small-button"
      variant="outlined"
      onClick={onClick}
      aria-label="open parentheses"
      disableRipple
    >
      {input}
    </Button>
  );
});


type BasicButtonsProps = {
  addToUserInput: (strToAdd: string, focus: boolean) => void,
  onEqualsClick: () => void,
  backspace: () => void,
  clearInput: () => void,
  mobile: boolean
}

const BasicButtons = React.memo(function BasicButtons(props: BasicButtonsProps) {
  const { addToUserInput, onEqualsClick, backspace, clearInput, mobile } = props;

  React.useEffect(() => { }, [mobile]);

  function BackspaceButton() {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={backspace}
        aria-label="backspace"
        disableRipple
      >
        ⌫
      </Button>
    );
  }

  return (
    <Grid
      id='small-button-container'
      className='small-button-container'
      item container
      xs={12} sm={4}
      component='section'
    >
      <Grid item xs={12}>
        <InputButton addToUserInput={addToUserInput} input="( " />
        <InputButton addToUserInput={addToUserInput} input=" )" />
      </Grid>
      {mobile &&
        <Grid item container xs={9} className="number-button-container">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().map((num) => // number buttons
            <InputButton addToUserInput={addToUserInput} input={num.toString()} key={num} />
          )}
          <InputButton addToUserInput={addToUserInput} input='.' />
          <BackspaceButton />
        </Grid>
      }
      <Grid item xs={3} sm={12}>
        <InputButton addToUserInput={addToUserInput} input=" + " />
        <InputButton addToUserInput={addToUserInput} input=" - " />
        <InputButton addToUserInput={addToUserInput} input=" × " />
        <InputButton addToUserInput={addToUserInput} input=" ÷ " />
      </Grid>
      <Grid item xs={12}>
        <Button
          className="button utility-button clear-button"
          variant="outlined"
          onClick={clearInput}
          aria-label="clear input"
          disableRipple
        >
          CLEAR
        </Button>
        <Button
          className="button utility-button equals-button"
          variant="outlined"
          onClick={onEqualsClick}
          aria-label="equals"
          disableRipple
          id="equals"
        >
          EQUALS
        </Button>
      </Grid>
    </Grid>
  );
});

export { BasicButtons };
