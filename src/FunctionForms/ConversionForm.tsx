import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import '../styling/Calculator.css';

type ConversionFormProps = {
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  inputRef: HTMLInputElement,
}
function ConversionForm(props: ConversionFormProps) {
  const [to, setTo] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [number, setNumber] = React.useState("");
  //const [places, setPlaces] = React.useState("");
  const [valid, setValid] = React.useState(true);
  const [helperText, setHelperText] = React.useState("");

  const onChangeTo = (e:any) => {
    setTo(e.target.value);
  }

  const onChangeFrom = (e:any) => {
    setFrom(e.target.value);
  }

  const onChangeNumber = (e:any) => {
    setNumber(e.target.value);
  }

  // const onChangePlaces = (e:any) => {
  //   setPlaces(e.target.value);
  // }

  const handleDoneClick = () => {
    if (number === "") {
      setValid(false);
      setHelperText("Input number to convert");
    }
    else if (from === "" || to === "") {
      setValid(false);
      setHelperText("Select base converting both TO and FROM");
    }
    else if (from === to) {
      setValid(false);
      setHelperText("Base converting TO and FROM must be different");
    }
    else {
      let formula = `${from}_to_${to}( ${number}`;
      //if (places)
      //formula = formula + ', ' + places;
      formula = formula + ' )';
      props.addToUserInput(formula, props.inputRef);
      closeDialog();
    }
  }

  const closeDialog = () => {
    props.setDialogOpen(false);
  };

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        Number Base Conversion
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`conversion-description`} style={{marginBottom:20}}>
          Convert a number to a different base
        </DialogContentText>
        <FormControl component="fieldset" style={{marginRight:50}}>
          <FormLabel component="legend" style={{color:'rgb(95, 87, 242)'}}>Converting from</FormLabel>
          <RadioGroup
            aria-label="convert from"
            defaultValue="decimal"
            name="radio-buttons-group"
            value={to}
            onChange={onChangeTo}
          >
            <FormControlLabel value="binary" control={<Radio />} label="binary" />
            <FormControlLabel value="octal" control={<Radio />} label="octal" />
            <FormControlLabel value="decimal" control={<Radio />} label="decimal" />
            <FormControlLabel value="hexadecimal" control={<Radio />} label="hexadecimal" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{color:'rgb(95, 87, 242)'}}>Converting to</FormLabel>
          <RadioGroup
            aria-label="convert to"
            defaultValue="binary"
            name="radio-buttons-group"
            value={from}
            onChange={onChangeFrom}
          >
            <FormControlLabel value="binary" control={<Radio />} label="binary" />
            <FormControlLabel value="octal" control={<Radio />} label="octal" />
            <FormControlLabel value="decimal" control={<Radio />} label="decimal" />
            <FormControlLabel value="hexadecimal" control={<Radio />} label="hexadecimal" />
          </RadioGroup>
        </FormControl>
        <TextField
          size="small"
          type="text"
          className="text-field"
          value={number}
          onChange={onChangeNumber}
          placeholder="Enter number or cell to convert"
          error={!valid}
          helperText={valid?null:helperText}
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

export { ConversionForm };
