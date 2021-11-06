import React from 'react';
import { NParameterForm } from '../FunctionForms/NParameterForm.js';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton.js';

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
        onClose={props.closeDialog}
        parameterSchema={props.parameterSchema}
        inputRef={props.inputRef}
      />
    }
  />
}

export { NParameterFunctionButton }
