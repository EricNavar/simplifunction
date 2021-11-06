import React from 'react';
import { Typography, Grid, Button, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ListParameteredForm } from './ListParameteredForm.js';
import { SingleParameterForm } from './SingleParameterForm.js';
import { NParameterForm } from './NParameterForm.js';
import './Calculator.css';
import { functions, functionTypes } from './functions';

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
      <ListParameteredForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={addToUserInput}
        onClose={closeDialog}
      />
    } />
  }

  function SingleParameterFunctionButton(props) {
    return <FunctionButton label={props.label} form={
      <SingleParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={addToUserInput}
        onClose={closeDialog}
      />
    } />
  }

  function NParameterFunctionButton(props) {
    return <FunctionButton label={props.label} form={
      <NParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={addToUserInput}
        onClose={closeDialog}
        parameterSchema={props.parameterSchema}
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
        {functionTypes.map(functionType =>
          <>
            <SectionHeader>
              {functionType}
            </SectionHeader>
            {functions.filter(f => f.type === functionType).map((obj, index) => {
              if (obj.parameterType === "list") {
                return (<ListParameteredFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                />)
              }
              else if (obj.parameterType === "single") {
                return (<SingleParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                />)
              }
              else {
                return (<NParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  parameterSchema={obj.parameterSchema}
                />)
              }
            }
            )}
          </>
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
