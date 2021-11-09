import React from 'react';
import { DialogActions, DialogContent, DialogTitle, Button, TextField, DialogContentText } from '@mui/material';
import '../Calculator.css';
import { Parameter } from '../commonTypes';

type NParameterFormProps = {
  commonName: string,
  syntacticalName: string,
  description: string,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
  parameterSchema: Array<Parameter>
};
function NParameterForm(props: NParameterFormProps) {
  const [parameters, setParameters] = React.useState(new Array(props.parameterSchema.length).fill(""));

  const onChangeParameter = (event: any, index: number) => {
    setParameters((param) => param.map((el, iter) => (iter !== index ? el : event.target.value)));
  }

  const createFormulaFromParameters = () => {
    let formula = "=" + props.commonName.replace(" ","_") + "(";
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
    props.addToUserInput(formula, props.inputRef);
    closeDialog();
  };

  const closeDialog = () => {
    props.setDialogOpen(false);
  };

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
          <div key={`${props.commonName.replace(" ","_")}-form-${index}`}>
            <TextField
              label={props.parameterSchema[index].name}
              size="small"
              type="text"
              onChange={e => onChangeParameter(e, index)}
              className="text-field"
              helperText={props.parameterSchema[index].helperText}
              value={parameter}
              required={props.parameterSchema[index].required}
            />
          </div>
        )}
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

export { NParameterForm };
