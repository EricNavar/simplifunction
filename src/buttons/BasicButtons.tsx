import React from 'react';
import {
  Button,
} from '@mui/material';
import '../styling/Calculator.css';
import { noop } from '../util/util';

type InputButtonProps = {
  input: string,
  addToUserInput: (strToAdd: string, focus: boolean) => void
}

// no state
const InputButton = React.memo(function InputButton(props: InputButtonProps):JSX.Element {
  const { input, addToUserInput } = props;
  React.useEffect(noop, [input]);
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
  clearInput: () => void
}

const BasicButtons = React.memo(function BasicButtons(props: BasicButtonsProps) {
  const { addToUserInput, onEqualsClick, backspace, clearInput } = props;

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
    <div
      id='small-button-container'
      className='basic-button-container flex'
    >
      <div className="basic-button-row">
        <InputButton addToUserInput={addToUserInput} input="( " />
        <InputButton addToUserInput={addToUserInput} input=" )" />
        <InputButton addToUserInput={addToUserInput} input=" × " />
      </div>
      {/* {mobile &&
        <Grid item container xs={9} className="number-button-container">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().map((num) => // number buttons
            <InputButton addToUserInput={addToUserInput} input={num.toString()} key={num} />
          )}
          <InputButton addToUserInput={addToUserInput} input='.' />
          <BackspaceButton />
        </Grid>
      } */}
      <div className="basic-button-row">
        <InputButton addToUserInput={addToUserInput} input=" + " />
        <InputButton addToUserInput={addToUserInput} input=" - " />
        <InputButton addToUserInput={addToUserInput} input=" ÷ " />
      </div>
      <div className="basic-button-row">
        <Button
          className="button utility-button clear-button"
          variant="outlined"
          onClick={clearInput}
          aria-label="clear input"
          disableRipple
          disableElevation
        >
          CLEAR
        </Button>
        <Button
          id="equals"
          className="button utility-button equals-button"
          variant="outlined"
          onClick={onEqualsClick}
          aria-label="equals"
          disableRipple
          disableElevation
        >
          EQUALS
        </Button>
      </div>
    </div>
  );
});

export { BasicButtons };
