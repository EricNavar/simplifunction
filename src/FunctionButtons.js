import React from 'react';
import { Typography, Grid, Button, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { RangeParametersForm } from './RangeParametersForm.js';
import './Calculator.css';
import { functions } from './functions';

function FunctionButtons({ setForm, openDialog, closeDialog, addToUserInput, mobile }) {
  function FunctionButton(props) {
    const onClick = e => {
      setForm(props.form);
      openDialog();
    }
    return (
      <Grid item xs={6}>
        <Button
          className="button function-button"
          variant='contained'
          onClick={onClick}
          aria-label={props.label}
          disableRipple
        >
          {props.label.trim()}
        </Button>
      </Grid>
    );
  };

  // these functions take in a list as parameter. Either as a 
  // range or a comma separated list
  function ListParameteredFunctionButton(props) {
    return <FunctionButton label={props.label} form={
      <RangeParametersForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        addToUserInput={addToUserInput}
        onClose={closeDialog}
      />
    } />
  }

  function SectionHeader(props) {
    return (
      <Grid item xs={12}>
        <Typography component="p" variant="h5" className="sectionHeader">
          {props.children}
        </Typography>
      </Grid>
    );
  }

  function FunctionButtonContainer() {
    return (
      <Grid item container xs={12} sm={6} md={4} spacing={2} className="function-button-container">
        <SectionHeader>
          Math
        </SectionHeader>
        {functions.filter(f => f.type === "math").map((obj, index) =>
          obj.parameterType === "list" ?
            <ListParameteredFunctionButton
              label={obj.commonName} syntacticalName={obj.syntacticalName} key={index}
            /> : null
        )
        }
        <SectionHeader>
          Trigonometry
        </SectionHeader>
        {functions.filter(f => f.type === "trigonometry").map((obj, index) =>
          obj.parameterType === "list" ?
            <ListParameteredFunctionButton
              label={obj.commonName} syntacticalName={obj.syntacticalName} key={index}
            /> : null
        )}
        <SectionHeader>
          Statistics
        </SectionHeader>
        {functions.filter(f => f.type === "statistics").map((obj, index) =>
          obj.parameterType === "list" ?
            <ListParameteredFunctionButton
              label={obj.commonName} syntacticalName={obj.syntacticalName} key={index}
            /> : null
        )}
      </Grid>
    );
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  if (mobile) {
    return (
      <Accordion expanded={expanded} onChange={handleChange} >
        <AccordionSummary
          expandIcon={<div>{expanded ? "-" : "+"}</div>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Functions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FunctionButtonContainer />
        </AccordionDetails>
      </Accordion>
    )
  }
  else {
    return <FunctionButtonContainer />
  }
};

export { FunctionButtons };
