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
    const newUserInput = userInput.substring(0,selectionStart) + strToAdd + userInput.substring(selectionEnd);
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
      <h1>Simplifunction</h1>
      <div className="inputContainer">
        <TextField autoFocus fullWidth type="text" onChange={onType} inputRef={ref => { inputRef = ref; }} value={userInput} />

        <div>
          <Button className="function-button" variant='contained' onClick={e => setSummationFormOpen(true)}>
            summation
          </Button>
          <Button className="function-button" variant='contained' onClick={e => setAverageFormOpen(true)}>
            average
          </Button>
          <Button className="function-button" variant='contained' onClick={e => setMinimumFormOpen(true)}>
            minimum
          </Button>
          <Button className="function-button" variant='contained' onClick={e => setMaximumFormOpen(true)}>
            maximum
          </Button>
        </div>
        <div className="small-button-container">
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput("( ")}>
            (
          </Button>
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput(" )")}>
            )
          </Button>
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput(" + ")}>
            +
          </Button>
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput(" - ")}>
            -
          </Button>
          <Button className="small-button clear-button" variant="outlined" onClick={clearInput}>
            clear
          </Button>
          <Button className="small-button from-to-button" variant="outlined" onClick={e => addToUserInput(" from ")}>
            from
          </Button>
          <Button className="small-button from-to-button" variant="outlined" onClick={e => addToUserInput(" to ")}>
            to
          </Button>
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput(" x ")}>
            ×
          </Button>
          <Button className="small-button big-font-size-button" variant="outlined" onClick={e => addToUserInput(" ÷ ")}>
            ÷
          </Button>
          <Button className="small-button equals-button big-font-size-button" variant="outlined" onClick={onEqualsClick}>
            =
          </Button>
        </div>
      </div>

      <Typography>Here is your formula:</Typography>
      <p className="formula">{formula}</p>
      <SummationForm open={summationFormOpen} onClose={e => setSummationFormOpen(false)} addToUserInput={addToUserInput} />
      <AverageForm open={averageFormOpen} onClose={e => setAverageFormOpen(false)} addToUserInput={addToUserInput} />
      <MinForm open={minimumFormOpen} onClose={e => setMinimumFormOpen(false)} addToUserInput={addToUserInput} />
      <MaxForm open={maximumFormOpen} onClose={e => setMaximumFormOpen(false)}  addToUserInput={addToUserInput} />
    </div>
  );
};

export { Calculator };
