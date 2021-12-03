/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  TextField,
  DialogContentText,
  Link
} from '@mui/material';
import '../styling/Calculator.css';
import { isCell, validateList } from '../util/validator';
import { FormProps } from '../commonTypes';
import { noop } from '../util/util';

const ListParameterForm = React.memo(function ListParameterForm(props: FormProps) {
  const [parameterCount, setParameterCount] = React.useState(2);
  const [parameters, setParameters] = React.useState(['', '']);
  // errors is an array with element n being a boolean indicating if parameter n is valid or not.
  const [errors, setErrors] = React.useState<(string | null)[]>([null, null]);
  const [inputMode, setInputMode] = React.useState('range');

  const [startCell, setStartCell] = React.useState('A1');
  const [startCellError, setStartCellError] = React.useState<string | null>(null);
  const [endCell, setEndCell] = React.useState('A2');
  const [endCellError, setEndCellError] = React.useState<string | null>(null);

  React.useEffect(noop, []);

  function addParameter() {
    const newParameters = parameters;
    newParameters.push('');
    setParameters(newParameters);
    setParameterCount(parameterCount + 1);

    const newErrors = errors;
    newErrors.push(null);
    setErrors(newErrors);
  }

  function onChangeParameter(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    setParameters(parameters.map((param: string, iter: number) =>
      (iter !== index ? param : event.target.value)
    ));
  }

  function createFormulaFromRange() {
    return `${props.excelFunction.commonName.replace(' ', '_')}(from ${startCell} to ${endCell})`;
  }

  function createFormulaFromParameters() {
    let formula = props.excelFunction.commonName + '(';
    parameters.forEach((parameter, index) => {
      if (index !== 0)
        formula = formula + ',';
      formula = formula + parameter;
    });
    formula = formula + ')';
    return formula;
  }

  function handleModeChange(event: React.MouseEvent<HTMLElement>, newMode: string) {
    if (newMode !== null)
      setInputMode(newMode);
  }

  function onChangeStartCell(event: React.ChangeEvent<HTMLInputElement>) {
    setStartCell(event.target.value);
  }

  function onChangeEndCell(event: React.ChangeEvent<HTMLInputElement>) {
    setEndCell(event.target.value);
  }

  function handleDoneClick() {
    if (inputMode === 'range') {
      const startCellError_ = isCell(startCell);
      setStartCellError(startCellError_);
      const endCellError_ = isCell(endCell);
      setEndCellError(endCellError_);
      if (startCellError_ === null && endCellError_ === null) {
        props.addToUserInput(createFormulaFromRange(), true);
        closeDialog();
      }
    }
    else { // inputMode === "individual"
      const newErrors = validateList(parameters, props.excelFunction.parameterType!);
      setErrors(newErrors);

      // Check to see if our errors array contains any strings. If it does, those are validation errors
      if (newErrors.filter((err) => typeof err === 'string').length === 0) {
        props.addToUserInput(createFormulaFromParameters(), true);
        closeDialog();
      }
    }
  }

  // TODO: this is a terrible way of changing an array state. Fix this.
  function onDeleteClick(index: number) {
    parameters.splice(index, 1);
    setParameters(parameters);
    setParameterCount(parameterCount - 1);

    errors.splice(index, 1);
    setErrors(errors);
  }

  function closeDialog() {
    props.setDialogOpen(false);
  }

  return (
    <>
      <DialogTitle id={`${props.excelFunction.commonName}-title`}>
        <span>{props.excelFunction.commonName}</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ color: 'rgba(0,0,0,.8)' }} id={`${props.excelFunction.commonName}-description`}>
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
            Individual Values
          </ToggleButton>
        </ToggleButtonGroup>

        {inputMode === 'individual' &&
          <>
            {parameters.map((parameter: string, index: number) =>
              <div key={`${props.excelFunction.commonName}-form-${index}`}>
                <TextField
                  label={`Value ${index + 1}`}
                  size="small"
                  type="text"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeParameter(e, index)}
                  className="text-field"
                  error={errors[index] !== null}
                  placeholder="Enter cell or number"
                  helperText={errors[index] !== null ? errors[index] : 'Enter cell or number'}
                />
                {parameters.length > 1 &&
                  <Button onClick={() => onDeleteClick(index)} size='small' color='info'>
                    REMOVE
                  </Button>
                }
              </div>
            )}
            <Button onClick={addParameter}>
              + Add value
            </Button>
          </>
        }
        {inputMode === 'range' && (
          <>
            <div style={{ display: 'flex' }}>
              <span className="from-to-button">From</span>
              <TextField
                size="small"
                type="text"
                label="Start cell"
                onChange={onChangeStartCell}
                className="text-field"
                error={startCellError !== null}
                helperText={startCellError !== null ? startCellError : 'Enter cell'}
              />
            </div>
            <div style={{ display: 'flex' }}>
              <span className="from-to-button">To</span>
              <TextField
                size="small"
                type="text"
                label="End cell"
                onChange={onChangeEndCell}
                className="text-field"
                error={endCellError !== null}
                helperText={endCellError !== null ? endCellError : 'Enter cell'}
              />
            </div>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          DONE
        </Button>
        <Button onClick={closeDialog}>CANCEL</Button>
      </DialogActions>
    </>
  );
});

export { ListParameterForm };
