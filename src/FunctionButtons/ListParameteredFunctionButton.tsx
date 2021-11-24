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
  return <FunctionButton
    label={props.excelFunction.commonName}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <ListParameteredForm
        addToUserInput={props.addToUserInput}
        setDialogOpen={props.setDialogOpen}
        excelFunction={props.excelFunction}
      />
    }
  />
}

export { ListParameteredFunctionButton }
