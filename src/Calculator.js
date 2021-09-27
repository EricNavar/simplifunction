import './Calculator.css';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { SummationForm } from './Forms/SummationForm.js';
import { AverageForm } from './Forms/AverageForm.js';
import { MinForm } from './Forms/MinForm.js';
import { MaxForm } from './Forms/MaxForm.js';
import { createFormula } from './createFormula';

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

  return (
    <div className="App" >
      <h1>SimpliFunction</h1>
      <div className="inputContainer">
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

        <div>
          <Button
            className="function-button"
            variant='contained'
            onClick={e => setSummationFormOpen(true)}
            aria-label="summation"
          >
            summation
          </Button>
          <Button
            className="function-button"
            variant='contained'
            onClick={e => setAverageFormOpen(true)}
            aria-label="average"
          >
            average
          </Button>
          <Button
            className="function-button"
            variant='contained'
            onClick={e => setMinimumFormOpen(true)}
            aria-label="minimum"
          >
            minimum
          </Button>
          <Button
            className="function-button"
            variant='contained'
            onClick={e => setMaximumFormOpen(true)}
            aria-label="maximum"
          >
            maximum
          </Button>
        </div>
        <div className="small-button-container">
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput(" + ")}
            aria-label="add"
          >
            +
          </Button>
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput(" - ")}
            aria-label="subtract"
          >
            -
          </Button>
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput("( ")}
            aria-label="open parentheses"
          >
            (
          </Button>
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput(" )")}
            aria-label="close parentheses"
          >
            )
          </Button>
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput(" × ")}
            aria-label="multiply"
          >
            ×
          </Button>
          <Button
            className="small-button big-font-size-button"
            variant="outlined"
            onClick={e => addToUserInput(" ÷ ")}
            aria-label="divide"
          >
            ÷
          </Button>
          <Button
            className="small-button clear-button"
            variant="outlined"
            onClick={clearInput}
            aria-label="clear input"
          >
            clear
          </Button>
          <Button
            className="small-button equals-button big-font-size-button"
            variant="outlined"
            onClick={onEqualsClick}
            aria-label="equals"
          >
            =
          </Button>
        </div>
      </div>

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
