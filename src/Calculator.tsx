import React from 'react';
import {
  Typography,
  Grid,
  Button,
  useMediaQuery,
  FormControl,
  FilledInput,
  InputLabel,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FunctionButtons } from './FunctionButtons/FunctionButtons';
import { createFormula } from './util/createFormula';
import { MyDialog } from './MyDialog';
import './styling/Calculator.css';

type InputButtonProps = {
  input: string,
  addToUserInput: (strToAdd: string) => Promise<void>,
}

function InputButton(props: InputButtonProps) {
  return (
    <Button
      className="button small-button"
      variant="outlined"
      onClick={(e:any) => props.addToUserInput(props.input)}
      aria-label="open parentheses"
      disableRipple
    >
      {props.input}
    </Button>
  );
}

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');
  const [form, setForm] = React.useState(<Grid></Grid>);
  const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));

  const addToUserInput = async (strToAdd: string) => {
    if (inputRef == null) {
      console.log("INPUTREF IS NULL");
      return;
    }
    const selectionStart = inputRef.selectionStart ? inputRef.selectionStart : inputRef.size;
    const selectionEnd = inputRef.selectionEnd ? inputRef.selectionEnd : inputRef.size;
    const newUserInput = userInput.substring(0, selectionStart!) + strToAdd + userInput.substring(selectionEnd!);
    inputRef.focus();

    setUserInput(newUserInput);
  };

  const clearInput = () => {
    setUserInput("");
    setFormula("");
  };

  const onEqualsClick = () => {
    setFormula(createFormula(userInput));
  };

  const onType = (event: any) => {
    setUserInput(event.target.value);
  };

  function backspace() {
    setUserInput(userInput.substring(0, userInput.length - 2));
  }

  function BackspaceButton() {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={(e:any) => backspace()}
        aria-label="backspace"
        disableRipple
      >
        ⌫
      </Button>
    );
  }

  return (
    <div className="App" >
      <header>
        <h1>SimpliFunction</h1>
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
        <Grid
          id='small-button-container'
          className='small-button-container'
          item container
          xs={12} sm={6}
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
      <MyDialog open={dialogOpen} setDialogOpen={setDialogOpen} form={form} />
    </div>
  );
};

export { Calculator };
