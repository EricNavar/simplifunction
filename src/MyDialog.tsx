import React from 'react';
import { Dialog } from '@mui/material';
import './styling/Calculator.css';

type MyDialogProps = {
  setDialogOpen: (value: boolean) => void,
  form: JSX.Element,
  open: boolean
}
function MyDialog(props: MyDialogProps) {
  function onClose() {
    props.setDialogOpen(false);
  }
  return (
    <Dialog keepMounted open={props.open} onClose={onClose} >
      {props.form ? props.form : null}
    </Dialog>
  );
}

export { MyDialog };
