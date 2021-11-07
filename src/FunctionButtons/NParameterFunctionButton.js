import React from 'react';
import { NParameterForm } from '../FunctionForms/NParameterForm.js';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton';

function NParameterFunctionButton(props) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
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
