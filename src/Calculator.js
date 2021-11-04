import './Calculator.css';
import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { SummationForm } from './Forms/SummationForm.js';
import { AverageForm } from './Forms/AverageForm.js';
import { MinForm } from './Forms/MinForm.js';
import { MaxForm } from './Forms/MaxForm.js';
import { createFormula } from './createFormula';

function FunctionButton(props) {
  return (
    <Button
      className="function-button"
      variant='contained'
      onClick={props.onClick}
      aria-label={props.label}
    >
      {props.label}
    </Button>
  );
}

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const [summationFormOpen, setSummationFormOpen] = React.useState(false);
  const [averageFormOpen, setAverageFormOpen] = React.useState(false);
  const [minimumFormOpen, setMinimumFormOpen] = React.useState(false);
  const [maximumFormOpen, setMaximumFormOpen] = React.useState(false);

  const addToUserInput = async (strToAdd) => {
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

  let inputRef = React.createRef();

  function InputButton(props) {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={e => addToUserInput(props.input)}
        aria-label="open parentheses"
        disableRipple
      >
        {props.input}
      </Button>
    );
  } 

  return (
    <div className="App" >
      <h1>SimpliFunction</h1>
      <Grid container className="input-container">
        <TextField
          autoFocus
          fullWidth
          type="text"
          onChange={onType}
          inputRef={ref => { inputRef = ref; }}
          value={userInput}
          for="calculation"
          className="user-input-text-field"
        />

        <Grid item xs={12} sm={6} md={4}>
          <Typography component="p" variant="h5">
            Math
          </Typography>
          <FunctionButton
            label="summation"
            onClick={e => setSummationFormOpen(true)}
          />
          <FunctionButton
            label="geometric product"
            onClick={e => setMaximumFormOpen(true)}
          />
          <FunctionButton
            label="minimum"
            onClick={e => setMinimumFormOpen(true)}
          />
          <FunctionButton
            label="maximum"
            onClick={e => setMaximumFormOpen(true)}
          />
          <FunctionButton
            label="absolute value"
            onClick={e => setMaximumFormOpen(true)}
          />

          <Typography component="p" variant="h5">
            Geometry
          </Typography>
          <FunctionButton
            label="sin"
            onClick={e => setMaximumFormOpen(true)}
          />
          <FunctionButton
            label="cos"
            onClick={e => setMaximumFormOpen(true)}
          />
          <FunctionButton
            label="tan"
            onClick={e => setMaximumFormOpen(true)}
          />

          <Typography component="p" variant="h5">
            Statistics
          </Typography>
          <FunctionButton
            label="average"
            onClick={e => setAverageFormOpen(true)}
          />
          <FunctionButton
            label="mean"
            onClick={e => setMinimumFormOpen(true)}
          />
          <FunctionButton
            label="median"
            onClick={e => setMaximumFormOpen(true)}
          />
          <FunctionButton
            label="mode"
            onClick={e => setAverageFormOpen(true)}
          />
          <FunctionButton
            label="standard deviation"
            onClick={e => setMinimumFormOpen(true)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} className="button small-button-container">
          <InputButton input=" + "/>
          <InputButton input=" - "/>
          <InputButton input="( "/>
          <InputButton input=" )"/>
          <InputButton input=" × "/>
          <InputButton input=" ÷ "/>
          <div>
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
        </div>
        </Grid>
      </Grid>

      {formula && <Typography>Here is your formula:</Typography>}
      <p className="formula">{formula}</p>
      <SummationForm open={summationFormOpen} onClose={e => setSummationFormOpen(false)} addToUserInput={addToUserInput} />
      <AverageForm open={averageFormOpen} onClose={e => setAverageFormOpen(false)} addToUserInput={addToUserInput} />
      <MinForm open={minimumFormOpen} onClose={e => setMinimumFormOpen(false)} addToUserInput={addToUserInput} />
      <MaxForm open={maximumFormOpen} onClose={e => setMaximumFormOpen(false)} addToUserInput={addToUserInput} />
    </div>
  );
};

export { Calculator };
