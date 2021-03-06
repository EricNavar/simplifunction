/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
  Snackbar
} from '@mui/material';
import { FunctionButtonsWrapper } from './buttons/FunctionButtonsWrapper';
import { createFormula } from './util/createFormula';
import { MyDialog } from './MyDialog';
import { BasicButtons } from './buttons/BasicButtons';
import { ExcelFunction, FormProps, ParameterFormat } from './commonTypes';
import { ListParameterForm } from './forms/ListParameterForm';
import { NParameterForm } from './forms/NParameterForm';
import { ConversionForm } from './forms/ConversionForm';
import { TrigonometryForm } from './forms/TrigonometryForm';
import { UserInput } from './UserInput';
import { CopyIcon } from './assets/CopyIcon';
import { noop } from './util/util';
import './styling/Calculator.css';

export const Calculator = function Calculator():JSX.Element {
  const [formula, setFormula] = React.useState('');
  const [formulaRevealed, setFormulaRevealed] = React.useState(false);
  const [form, setForm] = React.useState(<Grid></Grid>);
  const [inputRef, setInputRef] = React.useState<HTMLInputElement | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  function setUserInput(input:string) {
    if (inputRef)
      inputRef.value = input;
  }

  React.useEffect(noop, []);

  function addToUserInput(strToAdd: string, focus: boolean): void {
    if (inputRef == null) {
      console.log('INPUTREF IS NULL');
      return;
    }
    const selectionStart = inputRef.selectionStart ? inputRef.selectionStart : inputRef.size;
    const selectionEnd = inputRef.selectionEnd ? inputRef.selectionEnd : inputRef.size;
    const newUserInput = inputRef!.value.substring(0, selectionStart!) + strToAdd + inputRef!.value.substring(selectionEnd!);
    setUserInput(newUserInput);
    if (focus) {
      inputRef.focus();
    }
  }

  function clearInput(): void {
    setUserInput('');
    setFormula('');
  }

  function onEqualsClick(): void {
    setFormula(createFormula(inputRef!.value));
    setFormulaRevealed(true);
  }

  function backspace(): void {
    setUserInput(inputRef!.value.substring(0, inputRef!.value.length - 2));
  }

  const functionButtonOnClick = (excelFunction: ExcelFunction) => {
    let FormComponent: React.NamedExoticComponent<FormProps> = ConversionForm;
    if (excelFunction.parameterFormat === ParameterFormat.LIST) {
      FormComponent = ListParameterForm;
    }
    else if (excelFunction.parameterFormat === ParameterFormat.N) {
      FormComponent = NParameterForm;
    }
    else if (excelFunction.parameterFormat === ParameterFormat.TRIGONOMETRY) {
      FormComponent = TrigonometryForm;
    }
    setForm(
      <FormComponent
        addToUserInput={addToUserInput}
        setDialogOpen={setDialogOpen}
        excelFunction={excelFunction}
      />
    );
    setDialogOpen(true);
  };

  function copyFormula() {
    navigator.clipboard.writeText(formula);
    setSnackbarOpen(true);
  }

  function handleCloseSnackbar() {
    setSnackbarOpen(false);
  }

  return (
    <React.Fragment>
      <div className="App" >
        <header>
          <Typography component='h1' variant='h4' style={{ marginBottom: 26, letterSpacing:1 }} >
            SimpliFunction
          </Typography>
        </header>
        <div className="calculator-container">
          <div>
            <UserInput setUserInput={setUserInput} inputRef={inputRef} setInputRef={setInputRef} />
            {formulaRevealed &&
              <div style={{ height: 60, width: '100%' }}>
                <div className="formula-container">
                  <Typography component="span" variant='body1'>Result:</Typography>
                  <span className="formula">{formula}</span>
                  {formula !== '' && formula !== 'No input' &&
                    <IconButton onClick={copyFormula}>
                      <CopyIcon />
                    </IconButton>
                  }
                </div>
              </div>
            }
          </div>
          <div className="calculator-buttons">
            <BasicButtons
              addToUserInput={addToUserInput}
              backspace={backspace}
              onEqualsClick={onEqualsClick}
              clearInput={clearInput}
            />
            <FunctionButtonsWrapper
              functionButtonOnClick={functionButtonOnClick}
            />
          </div>
        </div>
      </div>
      <MyDialog open={dialogOpen} setDialogOpen={setDialogOpen} form={form} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={handleCloseSnackbar}
        message="Formula copied"
      />
    </React.Fragment>
  );
};
