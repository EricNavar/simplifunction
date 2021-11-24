import React from 'react';
import { TrigonometryForm } from '../FunctionForms/TrigonometryForm';
import { FunctionButton } from './FunctionButton';
import '../styling/Calculator.css';

type TrigonometryButtonProps = {
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function TrigonometryButton(props: TrigonometryButtonProps) {
  function onClick() {
    props.setForm(
      <TrigonometryForm
        addToUserInput={props.addToUserInput}
        setDialogOpen={props.setDialogOpen}
        setForm={props.setForm}
      />
    );
    props.setDialogOpen(true);
  }
  return <FunctionButton
    label="Trigonometry"
    onClick={onClick}
  />
}

export { TrigonometryButton }
