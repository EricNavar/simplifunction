import React from 'react';
import { ListParameteredForm } from '../FunctionForms/ListParameteredForm';
import '../styling/Calculator.css';
import { FunctionButton } from './FunctionButton';
import { ExcelFunction } from '../commonTypes';


type ListParameteredFunctionButtonProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function ListParameteredFunctionButton(props: ListParameteredFunctionButtonProps) {
  function onClick() {
    props.setForm(
      <ListParameteredForm
        addToUserInput={props.addToUserInput}
        setDialogOpen={props.setDialogOpen}
        excelFunction={props.excelFunction}
      />
    );
    props.setDialogOpen(true);
  }
  return <FunctionButton
    label={props.excelFunction.commonName}
    onClick={onClick}
  />
}

export { ListParameteredFunctionButton }
