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
  // valids is an array with element n being a boolean indicating if parameter n is valid or not.
  const [valids, setValids] = React.useState([true, true]);
  const [inputMode, setInputMode] = React.useState('range');

  const [startCell, setStartCell] = React.useState('A1');
  const [startCellValid, setStartCellValid] = React.useState(true);
  const [endCell, setEndCell] = React.useState('A2');
  const [endCellValid, setEndCellValid] = React.useState(true);

  React.useEffect(noop, []);

  function addParameter() {
    const newParameters = parameters;
    newParameters.push('');
    setParameters(newParameters);
    setParameterCount(parameterCount + 1);

    const newValids = valids;
    newValids.push(true);
    setValids(newValids);
  }

  function onChangeParameter(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    setParameters(parameters.map((param: string, iter: number) =>
      (iter !== index ? param : event.target.value)
    ));
  }

  function createFormulaFromRange() {
    return `${props.excelFunction.commonName.replace(' ', '_')}(${startCell}:${endCell})`;
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
      const startCellValid_ = isCell(startCell);
      setStartCellValid(startCellValid_);
      const endCellValid_ = isCell(startCell);
      setEndCellValid(endCellValid_);
      if (startCellValid_ && endCellValid_) {
        props.addToUserInput(createFormulaFromRange(), true);
        closeDialog();
      }
    }
    else { // inputMode === "individual"
      const newValids = validateList(parameters, props.excelFunction.parameterType!);
      setValids(newValids);
      if (!newValids.includes(false)) {
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

    valids.splice(index, 1);
    setValids(valids);
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
                  error={!valids[index]}
                  placeholder="Enter cell or number"
                  helperText={valids[index] ? '' : 'Enter cell or number'}
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
                error={!startCellValid}
                helperText={startCellValid ? '' : 'Enter cell'}
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
                error={!endCellValid}
                helperText={endCellValid ? '' : 'Enter cell'}
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
