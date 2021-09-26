import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Calculator.css';

function MinForm(props) {
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

  const onChangeParameter = (e, index) => {
    parameters[index] = e.target.value;
  }

  const createFormulaFromRange = () => {
    return `MIN(${startCell}:${endCell})`;
  }

  const createFormulaFromParameters = () => {
    let formula = "=MIN(";
    parameters.forEach((parameter, index) => {
      if (index !== 0)
        formula = formula + ",";
      formula = formula + parameter
    });
    formula = formula + ")";
    return formula;
  };

  const handleModeChange = (event, newMode) => {
    if (newMode !== null)
      setInputMode(newMode);
  };

  const onChangeStartCell = e => {
    setStartCell(e.target.value);
  };

  const onChangeEndCell = e => {
    setEndCell(e.target.value);
  };

  const handleDoneClick = () => {
    const formula = inputMode === "range" ? createFormulaFromRange() : createFormulaFromParameters();
    props.addToUserInput(formula);
    props.onClose();
  };

  const onDeleteClick = (index) => {
    parameters.splice(index,1);
    setParameters(parameters);
    setParameterCount(parameterCount - 1);
  };

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle id="alert-dialog-title">
        Minimum
      </DialogTitle>
      <DialogContent>
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
              <div key={`min-form-${index}`}>
                <TextField
                  label={`Parameter ${index + 1}`}
                  size="small"
                  type="text"
                  onChange={e => onChangeParameter(e, index)}
                  className="text-field"
                />
                <Button onClick={e=>onDeleteClick(index)} size='small' color='info'>
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
        <Button onClick={props.onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export { MinForm };
