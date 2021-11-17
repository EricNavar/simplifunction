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
  const [to, setTo] = React.useState("DEC");
  const [from, setFrom] = React.useState("BIN");
  const [number, setNumber] = React.useState("BIN");
  const [places, setPlaces] = React.useState("BIN");

  const onChangeTo = (e:any) => {
    setTo(e.target.value);
  }

  const onChangeFrom = (e:any) => {
    setFrom(e.target.value);
  }

  const onChangeNumber = (e:any) => {
    setNumber(e.target.value);
  }

  const onChangePlaces = (e:any) => {
    setPlaces(e.target.value);
  }

  const onClickDone = (e:any) => {
    // let formula = `${from}2${to}( ${number}`;
    // if (places)
    //   formula = formula + ', ' + places;
    // formula = formula + ' )';
  }

  return (
    <>
      <DialogTitle id="alert-dialog-title">
        Number Base Conversion
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`conversion-description`} style={{marginBottom:20}}>
          description here
        </DialogContentText>
        <FormControl component="fieldset" style={{marginRight:50}}>
          <FormLabel component="legend">Converting from</FormLabel>
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
          <FormLabel component="legend">Converting to</FormLabel>
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
          placeholder="Enter cell or number"
        />
        <TextField
          size="small"
          type="text"
          className="text-field"
          value={number}
          onChange={onChangePlaces}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickDone}>
          Done
        </Button>
        <Button onChange={(e:any) => props.setDialogOpen(false)}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { ConversionForm };
