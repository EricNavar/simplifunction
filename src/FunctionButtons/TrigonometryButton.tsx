import React from 'react';
import { TrigonometryForm } from '../FunctionForms/TrigonometryForm';
import { FunctionButton } from './FunctionButton';
import '../styling/Calculator.css';

type TrigonometryButtonProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function TrigonometryButton(props: TrigonometryButtonProps) {
  return <FunctionButton
    label="Trigonometry"
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <TrigonometryForm
        addToUserInput={props.addToUserInput}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
        setForm={props.setForm}
      />
    }
  />
}

export { TrigonometryButton }
