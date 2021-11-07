import React from 'react';
import { NParameterForm } from '../FunctionForms/NParameterForm';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton';
import { Parameter } from '../commonTypes';

type NParameterFunctionButtonProps = {
  label: string,
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  description: string,
  syntacticalName: string,
  parameterSchema: Array<Parameter>
}

function NParameterFunctionButton(props:NParameterFunctionButtonProps) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    setDialogOpen={props.setDialogOpen}
    form={
      <NParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={props.addToUserInput}
        parameterSchema={props.parameterSchema}
        inputRef={props.inputRef}
        setDialogOpen={props.setDialogOpen}
      />
    }
  />
}

export { NParameterFunctionButton }
