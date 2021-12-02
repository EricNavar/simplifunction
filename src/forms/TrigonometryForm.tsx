import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Checkbox
} from '@mui/material';
import '../styling/Calculator.css';
import { validateParameter } from '../util/validator';
import { ParameterType, FormProps } from '../commonTypes';

const TrigonometryForm = React.memo(function TrigonometryForm(props: FormProps) {
  const [number, setNumber] = React.useState('');
  const [func, setFunc] = React.useState('Sin');
  const [inverse, setInverse] = React.useState(false);
  const [hyperbolic, setHyperbolic] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function onChangeFunc(e: React.ChangeEvent<HTMLInputElement>) {
    setFunc(e.target.value);
  }

  function onChangeInverse(e: React.ChangeEvent<HTMLInputElement>) {
    setInverse(e.target.value === 'true');
  }

  function onChangeHyperbolic(e: React.ChangeEvent<HTMLInputElement>) {
    setHyperbolic(e.target.value === 'true');
  }

  function onChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }

  function handleDoneClick() {
    const newError = validateParameter(number, ParameterType.number);
    setError(newError);
    if (typeof newError !== 'string') {
      let formula = func;
      if (inverse) {
        formula += '⁻¹';
      }
      if (hyperbolic) {
        formula = 'Hyperbolic_' + formula;
      }
      props.addToUserInput(formula, true);
      closeDialog();
    }
  }

  function closeDialog() {
    props.setDialogOpen(false);
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        Trigonometry Functions
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" style={{ marginRight: 50 }}>
          <RadioGroup
            aria-label="function"
            defaultValue="decimal"
            name="radio-buttons-group"
            value={func}
            onChange={onChangeFunc}
          >
            <FormControlLabel value="Sin" control={<Radio />} label="Sin" />
            <FormControlLabel value="Cos" control={<Radio />} label="Cos" />
            <FormControlLabel value="Tan" control={<Radio />} label="Tan" />
            <FormControlLabel value="Cot" control={<Radio />} label="Cot" />
          </RadioGroup>
        </FormControl>
        <div style={{display:'inline-grid'}}>
          <FormControlLabel
            control={<Checkbox value={inverse} onChange={onChangeInverse} />}
            label="Inverse"
          />
          <FormControlLabel
            control={<Checkbox value={hyperbolic} onChange={onChangeHyperbolic} />}
            label="Hyperbolic"
          />
        </div>
        <TextField
          size="small"
          type="text"
          className="text-field"
          value={number}
          onChange={onChangeNumber}
          placeholder="Enter number or cell"
          error={!!error}
          helperText={error ? error : undefined}
        />
        {/*
        <TextField
          size="small"
          type="text"
          className="text-field"
          value={number}
          onChange={onChangePlaces}
          placeholder="Decimal places"
        />
        */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick}>
          DONE
        </Button>
        <Button id='close-button' onClick={closeDialog}>CANCEL</Button>
      </DialogActions>
    </>
  );
});

export { TrigonometryForm };
