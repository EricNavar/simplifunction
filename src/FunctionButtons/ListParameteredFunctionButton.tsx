import React from 'react';
import { ListParameteredForm } from '../FunctionForms/ListParameteredForm';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton';

type ListParameteredFunctionButtonProps = {
  label: string,
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  description: string,
  syntacticalName: string
}

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function ListParameteredFunctionButton(props:ListParameteredFunctionButtonProps) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <ListParameteredForm
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

export { ListParameteredFunctionButton }
