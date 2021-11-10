import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import '../Calculator.css';
import { ExcelFunction } from '../commonTypes';
import { validateParameter } from '../util/validator';

type SingleParameterFormProps = {
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
  excelFunction: ExcelFunction
}
function SingleParameterForm(props: SingleParameterFormProps) {
  const [parameter, setParameter] = React.useState("");
  const [valid, setValid] = React.useState(true);

  const handleDoneClick = () => {
    const newValid = validateParameter(parameter, props.excelFunction.parameterType!);
    setValid(newValid);
    if (newValid) {
      console.log('valid')
      const formula = `${props.excelFunction.commonName.replace(" ", "_")}(${parameter})`;
      props.addToUserInput(formula, props.inputRef);
      closeDialog();
    }
  };

  const onChangeParameter = (e: any) => {
    setParameter(e.target.value);
  };

  const closeDialog = () => {
    props.setDialogOpen(false);
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {props.excelFunction.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.excelFunction.syntacticalName}-description`}>
          {props.excelFunction.description}
        </DialogContentText>
        <TextField
          size="small"
          type="text"
          onChange={onChangeParameter}
          className="text-field"
          error={!valid}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          Done
        </Button>
        <Button onClick={closeDialog}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { SingleParameterForm };
