/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  DialogContentText,
  Link,
  Typography
} from '@mui/material';
import '../styling/Calculator.css';
import { FormProps, Parameter, ParameterType } from '../commonTypes';
import { validateNParameters } from '../util/validator';

const NParameterForm = React.memo(function NParameterForm(props: FormProps) {
  const [parameters, setParameters] = React.useState<Array<Array<string>>>(()=>{
    const schema: Array<Parameter> = props.excelFunction.parameterSchema!;
    return schema.map((param:Parameter)=> param.type === ParameterType.range ? ['',''] : ['']);
  });
  const [parameterTypes] = React.useState<Array<ParameterType>>(
    props.excelFunction.parameterSchema!.map((param: Parameter) => param.type)
  );
  const [valids, setValids] = React.useState(
    new Array(props.excelFunction.parameterSchema!.length).fill(true)
  );

  function onChangeParameter(event: React.ChangeEvent<HTMLInputElement>, parameterIndex: number, textfieldIndex: number) {
    setParameters(parameters.map((param: Array<string>, iter: number) => {
      if (iter === parameterIndex) {
        param[textfieldIndex] = event.target.value;
      }
      return param;
    }));
  }

  function createFormulaFromParameters() {
    let formula = props.excelFunction.commonName.replace(' ', '_') + '(';
    parameters.forEach((parameter: Array<string>, index: number) => {
      if (index !== 0) {
        formula = formula + ',';
      }
      if (parameterTypes[index] == ParameterType.range) {
        console.log(parameter);
        formula = formula + ' from ' + parameter[0] + ' to ' + parameter[1];
      }
      else {
        formula = formula + parameter;
      }
    });
    formula = formula + ')';
    return formula;
  }

  function handleDoneClick() {
    const newValids = validateNParameters(parameters, props.excelFunction.parameterSchema!);
    setValids(newValids);
    setValids(valids);
    if (!newValids.includes(false)) {
      const formula = createFormulaFromParameters();
      props.addToUserInput(formula, true);
      closeDialog();
    }
  }

  function closeDialog() {
    props.setDialogOpen(false);
  }

  return (
    <React.Fragment>
      <DialogTitle id={`${props.excelFunction.commonName}-title`}>
        {props.excelFunction.commonName}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={`${props.excelFunction.commonName}-description`}>
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
        {parameters.map((parameter: Array<string>, index: number) => {
          if (parameterTypes[index] != ParameterType.range) {
            return (
              <div key={`${props.excelFunction.commonName.replace(' ', '_')}-form-${index}`}>
                <TextField
                  label={props.excelFunction.parameterSchema![index].name}
                  size="small"
                  type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeParameter(e, index, 0)}
                  className="text-field"
                  helperText={props.excelFunction.parameterSchema![index].helperText}
                  value={parameter[0]}
                  required={props.excelFunction.parameterSchema![index].required}
                  error={!valids[index]}
                  placeholder="Enter cell or number"
                />
              </div>
            );
          }
          else {
            return (
              <React.Fragment key={`${props.excelFunction.commonName.replace(' ', '_')}-form-${index}`}>
                <Typography variant='body2' style={{marginTop: 8, marginBottom: 8}}>
                  {props.excelFunction.parameterSchema![index].name}
                </Typography>
                <span style={{display:'flex'}}>
                  <span className="from-to-button" style={{marginRight: 12, marginBottom: 6}}>From</span>
                  <TextField
                    label="Start cell"
                    size="small"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeParameter(e, index, 0)}
                    className="text-field cell-text-field"
                    helperText={props.excelFunction.parameterSchema![index].helperText}
                    value={parameter[0]}
                    required={props.excelFunction.parameterSchema![index].required}
                    error={!valids[index]}
                    placeholder="Enter cell or number"
                  />
                  <span className="from-to-button" style={{marginRight: 12, marginLeft: 12, marginBottom: 6}}>to</span>
                  <TextField
                    label="End cell"
                    size="small"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeParameter(e, index, 1)}
                    className="text-field cell-text-field"
                    helperText={props.excelFunction.parameterSchema![index].helperText}
                    value={parameter[1]}
                    required={props.excelFunction.parameterSchema![index].required}
                    error={!valids[index]}
                    placeholder="Enter cell or number"
                  />
                </span>
              </React.Fragment>
            );
          }
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDoneClick} autoFocus>
          DONE
        </Button>
        <Button onClick={closeDialog}>CANCEL</Button>
      </DialogActions>
    </React.Fragment>
  );
});

export { NParameterForm };
