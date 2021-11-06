import React from 'react';
import { Typography, Grid, Button, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FunctionButtons } from './FunctionButtons/FunctionButtons.js';
import { createFormula } from './createFormula';
import { MyDialog } from './MyDialog.js';
import './Calculator.css';

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const [form, setForm] = React.useState(null);
  const [inputRef, setInputRef] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));

  const addToUserInput = async (strToAdd, inputRef) => {
    const selectionStart = inputRef.selectionStart;
    const selectionEnd = inputRef.selectionEnd;
    const newUserInput = userInput.substring(0, selectionStart) + strToAdd + userInput.substring(selectionEnd);
    inputRef.focus();

    setUserInput(newUserInput);
  };

  const clearInput = () => {
    setUserInput("");
  };

  const onEqualsClick = () => {
    setFormula(createFormula(userInput));
  };

  const onType = e => {
    setUserInput(e.target.value);
  };

  function InputButton(props) {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={e => addToUserInput(props.input, inputRef)}
        aria-label="open parentheses"
        disableRipple
      >
        {props.input}
      </Button>
    );
  }

  function backspace() {
    setUserInput(userInput.substring(0, userInput.substring - 2));
  }

  function BackspaceButton(props) {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={e => backspace()}
        aria-label="backspace"
        disableRipple
      >
        ⌫
      </Button>
    );
  }

  function closeDialog() {
    setDialogOpen(false);
  }

  return (
    <div className="App" >
      <h1>SimpliFunction</h1>
      <Grid container className={mobile ? "" : "input-containers"}>
        <TextField
          autoFocus
          fullWidth
          type="text"
          onChange={onType}
          inputRef={ref => { setInputRef(ref); }}
          value={userInput}
          className="user-input-text-field"
          placeholder="Enter your calculation"
          label="input"
          variant='filled'
        />
        <FunctionButtons
          closeDialog={closeDialog}
          setForm={setForm}
          openDialog={e => setDialogOpen(true)}
          addToUserInput={addToUserInput}
          mobile={mobile}
          inputRef={inputRef}
        />
        <Grid item container xs={12} sm={6} md={8} className="small-button-container">
          <Grid item xs={12}>
            <InputButton input="( " />
            <InputButton input=" )" />
          </Grid>
          {mobile &&
            <Grid item xs={9}>
              {[0,3,2,1,6,5,4,9,8,7].reverse().map((num) => // number buttons
                <InputButton input={num} key={num} />
              )}
              <InputButton input='.' />
              <BackspaceButton />
            </Grid>
          }
          <Grid item xs={3} sm={12}>
            <InputButton input=" + " />
            <InputButton input=" - " />
            <InputButton input=" × " />
            <InputButton input=" ÷ " />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="button utility-button clear-button"
              variant="outlined"
              onClick={clearInput}
              aria-label="clear input"
              disableRipple
            >
              clear
            </Button>
            <Button
              className="button utility-button equals-button"
              variant="outlined"
              onClick={onEqualsClick}
              aria-label="equals"
              disableRipple
            >
              equals
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {formula && <Typography>Here is your formula:</Typography>}
      <p className="formula">{formula}</p>
      <MyDialog open={dialogOpen} onClose={e => setDialogOpen(false)} form={form} />
    </div>
  );
};

export { Calculator };
