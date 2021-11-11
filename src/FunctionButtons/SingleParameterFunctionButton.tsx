import React from 'react';
import { SingleParameterForm } from '../FunctionForms/SingleParameterForm';
import { FunctionButton } from './FunctionButton';
import '../styling/Calculator.css';
import { ExcelFunction } from '../commonTypes';

type SingleParameterFunctionButtonProps = {
  excelFunction: ExcelFunction,
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function SingleParameterFunctionButton(props: SingleParameterFunctionButtonProps) {
  return <FunctionButton
    label={props.excelFunction.commonName}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <SingleParameterForm
        addToUserInput={props.addToUserInput}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
        excelFunction={props.excelFunction}
      />
    }
  />
}

export { SingleParameterFunctionButton }
