import React from 'react';
import { SingleParameterForm } from '../FunctionForms/SingleParameterForm';
import { FunctionButton } from './FunctionButton';
import '../Calculator.css';

type SingleParameterFunctionButtonProps = {
  label: string,
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  description: string,
  syntacticalName: string
}

function SingleParameterFunctionButton(props: SingleParameterFunctionButtonProps) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <SingleParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={props.addToUserInput}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
      />
    }
  />
}

export { SingleParameterFunctionButton }
