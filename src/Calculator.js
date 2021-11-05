import './Calculator.css';
import React from 'react';
import { Typography, Grid, Button, TextField } from '@mui/material';
import { RangeParametersForm } from './RangeParametersForm.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MyDialog } from './MyDialog.js';
import { createFormula } from './createFormula';
import { useTheme } from '@mui/material/styles';

function Calculator() {
  const [formula, setFormula] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const [form, setForm] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const theme = useTheme();
  const mobile = !useMediaQuery(theme.breakpoints.up('sm'));

  const addToUserInput = async (strToAdd) => {
    const selectionStart = inputRef.selectionStart;
    const selectionEnd = inputRef.selectionEnd;
    const newUserInput = userInput.substring(0, selectionStart) + strToAdd + userInput.substring(selectionEnd);
    inputRef.focus();

    setUserInput(newUserInput);
  };

  const clearInput = () => {
    setUserInput("");
  };

  const onEqualsClick = () => {
    setFormula(createFormula(userInput));
  };

  const onType = e => {
    setUserInput(e.target.value);
  };

  let inputRef = React.createRef();

  function InputButton(props) {
    return (
      <Button
        className="button small-button"
        variant="outlined"
        onClick={e => addToUserInput(props.input)}
        aria-label="open parentheses"
        disableRipple
      >
        {props.input}
      </Button>
    );
  }

  function FunctionButton(props) {
    const onClick = e => {
      setForm(props.form);
      setDialogOpen(true);
    }
    return (
      <Button
        className="function-button"
        variant='contained'
        onClick={onClick}
        aria-label={props.label}
      >
        {props.label.trim()}
      </Button>
    );
  };

  function closeDialog() {
    setDialogOpen(false);
  }

  return (
    <div className="App" >
      <h1>SimpliFunction</h1>
      <Grid container className="input-container">
        <TextField
          autoFocus
          fullWidth
          type="text"
          onChange={onType}
          inputRef={ref => { inputRef = ref; }}
          value={userInput}
          for="calculation"
          className="user-input-text-field"
        />

        <Grid item xs={12} sm={6} md={4}>
          <Typography component="p" variant="h5" className="sectionHeader">
            Math
          </Typography>
          <FunctionButton
            label="summation"
            form={<RangeParametersForm
              commonName="summation"
              syntacticalName="SUM"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="geometric product"
            form={<RangeParametersForm
              commonName="Geometric_mean"
              syntacticalName="GEOMEAN"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="minimum"
            form={<RangeParametersForm
              commonName="minimum"
              syntacticalName="MIN"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="maximum"
            form={<RangeParametersForm
              commonName="maximum"
              syntacticalName="MAX"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="absolute value"
            form={<RangeParametersForm
              commonName="Absolute_value"
              syntacticalName="ABS"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />

          <Typography component="p" variant="h5" className="sectionHeader">
            Geometry
          </Typography>
          <FunctionButton
            label="sin"
            form={<RangeParametersForm
              commonName="sin"
              syntacticalName="SIN"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="cos"
            form={<RangeParametersForm
              commonName="cos"
              syntacticalName="COS"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="tan"
            form={<RangeParametersForm
              commonName="tan"
              syntacticalName="TAN"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />

          <Typography component="p" variant="h5" className="sectionHeader">
            Statistics
          </Typography>
          <FunctionButton
            label="average"
            form={<RangeParametersForm
              commonName="average"
              syntacticalName="AVG"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="median"
            form={<RangeParametersForm
              commonName="median"
              syntacticalName="MEDIAN"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="mode"
            form={<RangeParametersForm
              commonName="mode"
              syntacticalName="MODE"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
          <FunctionButton
            label="standard deviation"
            form={<RangeParametersForm
              commonName="standard_deviation"
              syntacticalName="STDEV"
              addToUserInput={addToUserInput}
              onClose={closeDialog}
            />
            }
          />
        </Grid>
        <Grid item container xs={12} sm={6} md={8} className="small-button-container">
          <Grid item xs={12}>
            <InputButton input="( " />
            <InputButton input=" )" />
          </Grid>
          {mobile &&
            <Grid item xs={9} spacing={0}>
              {[...Array(10).keys()].reverse().map((num) => // number buttons
                <InputButton input={num} key={num} />
              )}
              <InputButton input="." />
            </Grid>
          }
          <Grid item xs={3} sm={12} spacing={0}>
            <InputButton input=" + " />
            <InputButton input=" - " />
            <InputButton input=" × " />
            <InputButton input=" ÷ " />
          </Grid>
          <Grid xs={12}>
            <Button
              className="button utility-button clear-button"
              variant="outlined"
              onClick={clearInput}
              aria-label="clear input"
              disableRipple
            >
              clear
            </Button>
            <Button
              className="button utility-button equals-button"
              variant="outlined"
              onClick={onEqualsClick}
              aria-label="equals"
              disableRipple
            >
              equals
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {formula && <Typography>Here is your formula:</Typography>}
      <p className="formula">{formula}</p>
      <MyDialog open={dialogOpen} onClose={e => setDialogOpen(false)} form={form} />
    </div>
  );
};

export { Calculator };
