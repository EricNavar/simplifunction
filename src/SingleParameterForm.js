import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import './Calculator.css';

function SingleParameterForm(props) {
  const [parameter, setParameter] = React.useState(["", ""]);

  const handleDoneClick = () => {
    const formula = `${props.commonName}(${parameter})`;
    props.addToUserInput(formula);
    props.onClose();
  };

  const onChangeParameter = e => {
    setParameter(e.target.value);
  };

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        {props.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.syntacticalName}-description`}>
          {props.description}
        </DialogContentText>
        <TextField
          size="small"
          type="text"
          onChange={onChangeParameter}
          className="text-field"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          Done
        </Button>
        <Button onClick={props.onClose}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { SingleParameterForm };
