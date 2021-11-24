import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
  Link
} from '@mui/material';
import '../styling/Calculator.css';
import { FormProps } from '../commonTypes';
import { validateParameter } from '../util/validator';

function SingleParameterForm(props: FormProps) {
  const [parameter, setParameter] = React.useState("");
  const [valid, setValid] = React.useState(true);

  function handleDoneClick() {
    const newValid = validateParameter(parameter, props.excelFunction.parameterType!);
    setValid(newValid);
    if (newValid) {
      const formula = `${props.excelFunction.commonName.replace(" ", "_")}(${parameter})`;
      props.addToUserInput(formula, true);
      closeDialog();
    }
  };

  function onChangeParameter(e: any) {
    setParameter(e.target.value);
  };

  function closeDialog() {
    props.setDialogOpen(false);
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {props.excelFunction.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.excelFunction.commonName}-description`}>
          {props.excelFunction.description}
        </DialogContentText>
        <Link
          variant='overline'
          href={props.excelFunction.documentationLink}
          className="docs-link"
          color='primary'
          target='_blank'
        >
          DOCS
        </Link>
        <TextField
          size="small"
          type="text"
          onChange={onChangeParameter}
          className="text-field"
          error={!valid}
          placeholder="Enter cell or number"
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
