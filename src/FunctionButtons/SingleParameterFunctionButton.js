import React from 'react';
import { SingleParameterForm } from '../FunctionForms/SingleParameterForm.js';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton.js';

function SingleParameterFunctionButton(props) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    form={
      <SingleParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={props.addToUserInput}
        onClose={props.closeDialog}
        inputRef={props.inputRef}
      />
    }
  />
}

export { SingleParameterFunctionButton }
