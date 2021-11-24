import React from 'react';
import { NParameterForm } from '../FunctionForms/NParameterForm';
import '../styling/Calculator.css';
import { FunctionButton } from './FunctionButton';
import { ExcelFunction } from '../commonTypes';

type NParameterFunctionButtonProps = {
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  excelFunction: ExcelFunction
}

function NParameterFunctionButton(props: NParameterFunctionButtonProps) {
  function onClick() {
    props.setForm(
      <NParameterForm
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

export { NParameterFunctionButton }
