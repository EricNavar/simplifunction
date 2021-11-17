import React from 'react';
import { ConversionForm } from '../FunctionForms/ConversionForm';
import { FunctionButton } from './FunctionButton';
import '../styling/Calculator.css';

type ConversionButtonProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function ConversionButton(props: ConversionButtonProps) {
  return <FunctionButton
    label="Number Base Conversion"
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <ConversionForm
        addToUserInput={props.addToUserInput}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
        setForm={props.setForm}
      />
    }
  />
}

export { ConversionButton }
