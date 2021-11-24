import React from 'react';
import '../styling/Calculator.css';
import { Grid, Button } from '@mui/material';
import { ExcelFunction, FormProps } from '../commonTypes';

type FunctionButtonProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  FormComponent: (props:FormProps) => JSX.Element
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function FunctionButton(props: FunctionButtonProps) {
  React.useEffect(()=>{},[]);
  const { excelFunction, addToUserInput, setDialogOpen, setForm, FormComponent } = props;
  function onClick() {
    setForm(
      <FormComponent
        addToUserInput={addToUserInput}
        setDialogOpen={setDialogOpen}
        excelFunction={excelFunction}
      />
    );
    setDialogOpen(true);
  }
  return (
    <Grid item xs={6} className='function-buttons-grid-item'>
      <Button
        className="button function-button"
        variant='contained'
        onClick={onClick}
        aria-label={excelFunction.commonName}
        disableRipple
      >
        {excelFunction.commonName.trim()}
      </Button>
    </Grid>
  );
}

export { FunctionButton }
