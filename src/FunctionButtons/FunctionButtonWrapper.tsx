import React from 'react';
import '../styling/Calculator.css';
import { FunctionButton } from './FunctionButton';
import { ExcelFunction, FormProps } from '../commonTypes';

type FunctionButtonWrapperProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  FormComponent: (props:FormProps) => JSX.Element
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function FunctionButtonWrapper(props: FunctionButtonWrapperProps) {
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
  return <FunctionButton
    label={excelFunction.commonName}
    onClick={onClick}
  />
}

export { FunctionButtonWrapper }
