import React from 'react';
import { NParameterForm } from '../FunctionForms/NParameterForm';
import '../styling/Calculator.css';
import { FunctionButton } from './FunctionButton';
import { ExcelFunction } from '../commonTypes';

type NParameterFunctionButtonProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  excelFunction: ExcelFunction
}

function NParameterFunctionButton(props: NParameterFunctionButtonProps) {
  return <FunctionButton
    label={props.excelFunction.commonName}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <NParameterForm
        addToUserInput={props.addToUserInput}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
        excelFunction={props.excelFunction}
      />
    }
  />
}

export { NParameterFunctionButton }
