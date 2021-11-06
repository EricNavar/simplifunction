import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
