import React from 'react';
import { ListParameteredForm } from '../FunctionForms/ListParameteredForm.js';
import '../Calculator.css';
import { FunctionButton } from './FunctionButton';

// these functions take in a list as parameter. Either as a 
// range or a comma separated list
function ListParameteredFunctionButton(props) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    openDialog={props.openDialog}
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
