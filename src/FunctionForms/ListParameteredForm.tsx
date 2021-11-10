import React from 'react';
import { DialogActions, DialogContent, DialogTitle, ToggleButton, ToggleButtonGroup, Button, TextField, DialogContentText } from '@mui/material';
import '../Calculator.css';
import { isCell, validateList } from '../util/validator';
import { ExcelFunction } from '../commonTypes';

type ListParameteredFormProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
}
function ListParameteredForm(props: ListParameteredFormProps) {
  const [parameterCount, setParameterCount] = React.useState(2);
  const [parameters, setParameters] = React.useState(["", ""]);
  // valids is an array with element n being a boolean indicating if parameter n is valid or not.
  const [valids, setValids] = React.useState([true, true]);
  const [inputMode, setInputMode] = React.useState("range");
  const [startCell, setStartCell] = React.useState("A1");
  const [endCell, setEndCell] = React.useState("A2");

  const addParameter = () => {
    let newParameters = parameters;
    newParameters.push("");
    setParameters(newParameters);
    setParameterCount(parameterCount + 1);

    let newValids = valids;
    newValids.push(false);
    setValids(newValids);
  }

  const onChangeParameter = (event: any, index: number) => {
    setParameters(parameters.map((param: string, iter: number) =>
      (iter !== index ? param : event.target.value)
    ));
  }

  const createFormulaFromRange = () => {
    return `${props.excelFunction.commonName.replace(" ", "_")}(${startCell}:${endCell})`;
  }

  const createFormulaFromParameters = () => {
    let formula = props.excelFunction.syntacticalName + "(";
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
    if (inputMode === "range") {
      const newValids = [isCell(startCell), isCell(endCell)];
      setValids(newValids);
      if (!newValids.includes(false)) {
        props.addToUserInput(createFormulaFromRange(), props.inputRef);
        closeDialog();
      }
    }
    else {
      const newValids = validateList(parameters, props.excelFunction.parameterType!);
      setValids(newValids);
      if (!newValids.includes(false)) {
        props.addToUserInput(createFormulaFromParameters(), props.inputRef);
        closeDialog();
      }
    }
  };

  // TODO: this is a terrible way of changing an array state. Fix this.
  const onDeleteClick = (index: number) => {
    parameters.splice(index, 1);
    setParameters(parameters);
    setParameterCount(parameterCount - 1);

    valids.splice(index, 1);
    setValids(valids);
  };

  const closeDialog = () => {
    props.setDialogOpen(false);
  };

  return (
    <>
      <DialogTitle id={`${props.excelFunction.syntacticalName}-title`}>
        {props.excelFunction.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.excelFunction.syntacticalName}-description`}>
          {props.excelFunction.description}
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
            {parameters.map((parameter: string, index: number) =>
              <div key={`${props.excelFunction.commonName}-form-${index}`}>
                <TextField
                  label={`Parameter ${index + 1}`}
                  size="small"
                  type="text"
                  onChange={e => onChangeParameter(e, index)}
                  className="text-field"
                  error={!valids[index]}
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
                error={!valids[0]}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <span style={{ display: 'flex', alignItems: 'center', marginRight: 8 }}>To</span>
              <TextField
                size="small"
                type="text"
                label="End cell"
                onChange={onChangeEndCell}
                className="text-field"
                error={!valids[1]}
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
