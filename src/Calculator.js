import './Calculator.css';
import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { SummationForm } from './Forms/SummationForm.js';
import { AverageForm } from './Forms/AverageForm.js';
import { MinForm } from './Forms/MinForm.js';
import { MaxForm } from './Forms/MaxForm.js';

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const [summationFormOpen, setSummationFormOpen] = React.useState(false);
  const [averageFormOpen, setAverageFormOpen] = React.useState(false);
  const [minimumFormOpen, setMinimumFormOpen] = React.useState(false);
  const [maximumFormOpen, setMaximumFormOpen] = React.useState(false);

  const addToUserInput = (str) => {
    console.log("addToUserInput");
    setUserInput(userInput + str);
  };

  const clearInput = () => {
    setUserInput("");
  };

  const createFormula = () => {
    setFormula("");
  }

  const onType = e => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  return (
    <div className="App" >
      <h1>Simplifunction</h1>
      <div className="inputContainer">
        <TextField fullWidth type="text" onChange={onType} />

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
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput("( ")}>
            (
          </Button>
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput(" )")}>
            )
          </Button>
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput(" + ")}>
            +
          </Button>
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput(" - ")}>
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
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput(" x ")}>
            x
          </Button>
          <Button className="small-button" variant="outlined" onClick={e => addToUserInput(" ÷ ")}>
            ÷
          </Button>
          <Button className="small-button equals-button" variant="outlined" onClick={createFormula}>
            =
          </Button>
        </div>
      </div>

      <Typography>Here is your formula:</Typography>
      <Typography >{formula}</Typography>
      <SummationForm open={summationFormOpen} onClose={e => setSummationFormOpen(false)} />
      <AverageForm open={averageFormOpen} onClose={e => setAverageFormOpen(false)} />
      <MinForm open={minimumFormOpen} onClose={e => setMinimumFormOpen(false)} />
      <MaxForm open={maximumFormOpen} onClose={e => setMaximumFormOpen(false)} />
    </div>
  );
};

export { Calculator };
