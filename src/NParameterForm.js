import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import './Calculator.css';

function NParameterForm(props) {
  const [parameters, setParameters] = React.useState(new Array(props.parameterSchema.length).fill(""));

  const onChangeParameter = (e, index) => {
    let parametersCopy = parameters;
    parametersCopy[index] = e.target.value;
    setParameters(parametersCopy);
  }

  const createFormulaFromParameters = () => {
    let formula = "=" + props.syntacticalName + "(";
    parameters.forEach((parameter, index) => {
      if (index !== 0)
        formula = formula + ",";
      formula = formula + parameter
    });
    formula = formula + ")";
    return formula;
  };

  const handleDoneClick = () => {
    const formula = createFormulaFromParameters();
    props.addToUserInput(formula);
    props.onClose();
  };

  console.log(parameters)

  return (
    <>
      <DialogTitle id={`${props.syntacticalName}-title`}>
        {props.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.syntacticalName}-description`}>
          {props.description}
        </DialogContentText>
        {parameters.map((parameter, index) =>
          <div key={`${props.commonName}-form-${index}`}>
            <TextField
              label={props.parameterSchema[index].name}
              size="small"
              type="text"
              onChange={e => onChangeParameter(e, index)}
              className="text-field"
              helperText={props.parameterSchema[index].description}
              value={parameter}
            />
          </div>
        )}
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

export { NParameterForm };
