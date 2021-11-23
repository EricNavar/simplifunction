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
import { ParameterType } from '../commonTypes';

type TrigonometryFormProps = {
  addToUserInput: (strToAdd: string) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}
function TrigonometryForm(props: TrigonometryFormProps) {
  const [number, setNumber] = React.useState("");
  const [func, setFunc] = React.useState("Sin");
  const [inverse, setInverse] = React.useState(false);
  const [hyperbolic, setHyperbolic] = React.useState(false);
  const [valid, setValid] = React.useState(true);

  const onChangeFunc = (e: any) => {
    setFunc(e.target.value);
  }

  const onChangeInverse = (e: any) => {
    setInverse(e.target.value);
  }

  const onChangeHyperbolic = (e: any) => {
    setHyperbolic(e.target.value);
  }

  const onChangeNumber = (e: any) => {
    setNumber(e.target.value);
  }

  const handleDoneClick = () => {
    const newValid = validateParameter(number, ParameterType.number);
    setValid(newValid);
    console.log(newValid);
    if (newValid) {
      let formula = func;
      if (inverse) {
        formula += "⁻¹";
      }
      if (hyperbolic) {
        formula = "Hyperbolic_" + formula;
      }
      props.addToUserInput(formula);
      closeDialog();
    }
  }

  const closeDialog = () => {
    props.setDialogOpen(false);
  };

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
          error={!valid}
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
          Done
        </Button>
        <Button id='close-button' onClick={closeDialog}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { TrigonometryForm };
