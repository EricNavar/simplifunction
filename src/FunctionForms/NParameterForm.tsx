import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
  Link
} from '@mui/material';
import '../styling/Calculator.css';
import { ExcelFunction } from '../commonTypes';
import { validateNParameters } from '../util/validator';

type NParameterFormProps = {
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  inputRef: HTMLInputElement,
  excelFunction: ExcelFunction
};
function NParameterForm(props: NParameterFormProps) {
  const [parameters, setParameters] = React.useState(
    new Array(props.excelFunction.parameterSchema!.length).fill("")
  );
  const [valids, setValids] = React.useState(
    new Array(props.excelFunction.parameterSchema!.length).fill(true)
  );

  const onChangeParameter = (event: any, index: number) => {
    setParameters(parameters.map((param: string, iter: number) => (iter !== index ? param : event.target.value)));
  }

  const createFormulaFromParameters = () => {
    let formula = props.excelFunction.commonName.replace(" ", "_") + "(";
    parameters.forEach((parameter, index) => {
      if (index !== 0)
        formula = formula + ",";
      formula = formula + parameter
    });
    formula = formula + ")";
    return formula;
  };

  const handleDoneClick = () => {
    const newValids = validateNParameters(parameters, props.excelFunction.parameterSchema!);
    setValids(newValids);
    if (!newValids.includes(false)) {
      const formula = createFormulaFromParameters();
      props.addToUserInput(formula, props.inputRef);
      closeDialog();
    }
  };

  const closeDialog = () => {
    props.setDialogOpen(false);
  };

  return (
    <>
      <DialogTitle id={`${props.excelFunction.syntacticalName}-title`}>
        {props.excelFunction.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.excelFunction.syntacticalName}-description`}>
          {props.excelFunction.description}
        </DialogContentText>
        <Link
          variant='overline'
          href={props.excelFunction.documentationLink}
          className="docs-link"
          color='primary'
          target='_blank'
        >
          DOCS
        </Link>
        {parameters.map((parameter, index) =>
          <div key={`${props.excelFunction.commonName.replace(" ", "_")}-form-${index}`}>
            <TextField
              label={props.excelFunction.parameterSchema![index].name}
              size="small"
              type="text"
              onChange={e => onChangeParameter(e, index)}
              className="text-field"
              helperText={props.excelFunction.parameterSchema![index].helperText}
              value={parameter}
              required={props.excelFunction.parameterSchema![index].required}
              error={!valids[index]}
              placeholder="Enter cell or number"
            />
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          Done
        </Button>
        <Button onClick={closeDialog}>Cancel</Button>
      </DialogActions>
    </>
  );
}

export { NParameterForm };
