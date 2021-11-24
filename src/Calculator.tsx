import React from 'react';
import {
  Typography,
  Grid,
  useMediaQuery,
  FormControl,
  FilledInput,
  InputLabel,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FunctionButtons } from './FunctionButtons/FunctionButtons';
import { createFormula } from './util/createFormula';
import { MyDialog } from './MyDialog';
import { BasicButtons } from './BasicButtons';
import './styling/Calculator.css';

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');
  const [form, setForm] = React.useState(<Grid></Grid>);
  const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));

  function addToUserInput(strToAdd: string, focus:boolean) {
    if (inputRef == null) {
      console.log("INPUTREF IS NULL");
      return;
    }
    const selectionStart = inputRef.selectionStart ? inputRef.selectionStart : inputRef.size;
    const selectionEnd = inputRef.selectionEnd ? inputRef.selectionEnd : inputRef.size;
    const newUserInput = userInput.substring(0, selectionStart!) + strToAdd + userInput.substring(selectionEnd!);
    setUserInput(newUserInput);
    if (focus) {
      inputRef.focus();
    }
  };

  function clearInput() {
    setUserInput("");
    setFormula("");
  };

  function onEqualsClick() {
    setFormula(createFormula(userInput));
  };

  function backspace() {
    setUserInput(userInput.substring(0, userInput.length - 2));
  }

  function onType(event: any) {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div className="App" >
        <header>
          <Typography component='h1' variant='h4' style={{marginBottom:20}}>SimpliFunction</Typography>
        </header>
        <Grid container component='main' spacing={2} className={mobile ? "" : "input-containers"}>
          <FormControl variant="filled">
            <InputLabel htmlFor="component-helper">Enter your calculation</InputLabel>
            <FilledInput
              value={userInput}
              onChange={onType}
              inputRef={ref => { setInputRef(ref); }}
              fullWidth
              type="text"
            />
          </FormControl>
          <div className="formula-container">
            {formula && <Typography component="span" variant='overline'>Result:</Typography>}
            <span className="formula">{formula}</span>
          </div>
          <FunctionButtons
            setDialogOpen={setDialogOpen}
            setForm={setForm}
            addToUserInput={addToUserInput}
            mobile={mobile}
          />
          <BasicButtons
            addToUserInput={addToUserInput}
            backspace={backspace}
            onEqualsClick={onEqualsClick}
            clearInput={clearInput}
            mobile={mobile}
          />
        </Grid>
      </div>
      <MyDialog open={dialogOpen} setDialogOpen={setDialogOpen} form={form} />
    </>
  );
};

export { Calculator };
