import React from 'react';
import Dialog from '@mui/material/Dialog';
import './Calculator.css';

function MyDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      {props.form ? props.form : null}
    </Dialog>
  );
}

export { MyDialog };
