import React from 'react';
import { DialogActions, DialogContent, DialogTitle, ToggleButton, ToggleButtonGroup, Button, TextField, DialogContentText } from '@mui/material';
import '../Calculator.css';

type ListParameteredFormProps = {
  commonName: string,
  syntacticalName: string,
  description: string,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
}
function ListParameteredForm(props: ListParameteredFormProps) {
  const [parameterCount, setParameterCount] = React.useState(2);
  const [parameters, setParameters] = React.useState(["", ""]);
  const [inputMode, setInputMode] = React.useState("range");
  const [startCell, setStartCell] = React.useState("A1");
  const [endCell, setEndCell] = React.useState("A2");

  const addParameter = () => {
    let newParameters = parameters;
    newParameters.push("");
    setParameters(newParameters);
    setParameterCount(parameterCount + 1);
  }

  const onChangeParameter = (event: any, index: number) => {
    parameters[index] = event.target.value;
  }

  const createFormulaFromRange = () => {
    return `${props.commonName.replace(" ","_")}(${startCell}:${endCell})`;
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

  const handleModeChange = (event: any, newMode: string) => {
    if (newMode !== null)
      setInputMode(newMode);
  };

  const onChangeStartCell = (event: any) => {
    setStartCell(event.target.value);
  };

  const onChangeEndCell = (event: any) => {
    setEndCell(event.target.value);
  };

  const handleDoneClick = () => {
    const formula = inputMode === "range" ? createFormulaFromRange() : createFormulaFromParameters();
    props.addToUserInput(formula, props.inputRef);
    closeDialog();
  };

  const onDeleteClick = (index: number) => {
    parameters.splice(index, 1);
    setParameters(parameters);
    setParameterCount(parameterCount - 1);
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
        <ToggleButtonGroup
          value={inputMode}
          exclusive
          onChange={handleModeChange}
          aria-label="text alignment"
          className="button-group"
        >
          <ToggleButton value="range" >
            Cell Range
          </ToggleButton>
          <ToggleButton value="individual" >
            Individual Parameters
          </ToggleButton>
        </ToggleButtonGroup>

        {inputMode === "individual" &&
          <>
            {parameters.map((parameter, index) =>
              <div key={`${props.commonName}-form-${index}`}>
                <TextField
                  label={`Parameter ${index + 1}`}
                  size="small"
                  type="text"
                  onChange={e => onChangeParameter(e, index)}
                  className="text-field"
                />
                <Button onClick={e => onDeleteClick(index)} size='small' color='info'>
                  REMOVE
                </Button>
              </div>
            )}
            <Button onClick={addParameter}>
              + Add parameter
            </Button>
          </>
        }
        {inputMode === "range" && (
          <>
            <div style={{ display: 'flex' }}>
              <span style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>From</span>
              <TextField
                size="small"
                type="text"
                label="Start cell"
                onChange={onChangeStartCell}
                className="text-field"
              />
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>to</span>
              <TextField
                size="small"
                type="text"
                label="End cell"
                onChange={onChangeEndCell}
                className="text-field"
              />
            </div>
          </>
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

export { ListParameteredForm };
