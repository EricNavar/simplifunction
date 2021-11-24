import React from 'react';
import { ConversionForm } from '../FunctionForms/ConversionForm';
import { FunctionButton } from './FunctionButton';
import '../styling/Calculator.css';

type ConversionButtonProps = {
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function ConversionButton(props: ConversionButtonProps) {
  function onClick() {
    props.setForm(
      <ConversionForm
        addToUserInput={props.addToUserInput}
        setDialogOpen={props.setDialogOpen}
      />
    );
    props.setDialogOpen(true);
  }
  return <FunctionButton
    label="Number Base Conversion"
    onClick={onClick}
  />
}

export { ConversionButton }
