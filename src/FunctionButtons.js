import React from 'react';
import {
  Typography,
  Grid,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  InputAdornment
} from '@mui/material';
import { ListParameteredForm } from './ListParameteredForm.js';
import { SingleParameterForm } from './SingleParameterForm.js';
import { NParameterForm } from './NParameterForm.js';
import './Calculator.css';
import { functions, functionTypes } from './functions';
import { SearchIcon } from './SearchIcon.js';

function FunctionButton(props) {
  const onClick = e => {
    props.setForm(props.form);
    props.openDialog();
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
        onClose={props.closeDialog}
        inputRef={props.inputRef}
      />
    }
  />
}

function SingleParameterFunctionButton(props) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    form={
      <SingleParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={props.addToUserInput}
        onClose={props.closeDialog}
        inputRef={props.inputRef}
      />
    }
  />
}

function NParameterFunctionButton(props) {
  return <FunctionButton
    label={props.label}
    setForm={props.setForm}
    form={
      <NParameterForm
        commonName={props.label}
        syntacticalName={props.syntacticalName}
        description={props.description}
        addToUserInput={props.addToUserInput}
        onClose={props.closeDialog}
        parameterSchema={props.parameterSchema}
        inputRef={props.inputRef}
      />
    }
  />
}

function FunctionButtonContainer(props) {
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredFunctions, setFilteredFunctions] = React.useState(functions);
  const [userInput, setUserInput] = React.useState('');

  const onChangeSearchInput = e => {
    setSearchInput(e.target.value);
    //setFilteredFunctions(functions.filter(f => f.commonName.toLowerCase().includes(e.target.value)));
  };

  const onType = e => {
    setUserInput(e.target.value);
  };

  return (
    <>
      <div className="functions-header-container" >
        <Typography component="h2" variant='h4'>
          Functions
        </Typography>
        <TextField
          id="function-search"
          placeholder="Search function"
          value={searchInput}
          onChange={onChangeSearchInput}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <TextField
          autoFocus
          fullWidth
          type="text"
          onChange={onType}
          value={userInput}
          className="user-input-text-field"
          placeholder="Enter your calculation"
          label="input"
          variant='filled'
        />
      </div>
      <Grid item container xs={12} sm={6} md={4} spacing={2} className="function-button-container">
        {functionTypes.map((functionType, index) =>
          <React.Fragment key={index}>
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
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  setForm={props.setForm}
                  openDialog={props.openDialog}
                  closeDialog={props.closeDialog}
                />)
              }
              else if (obj.parameterType === "single") {
                return (<SingleParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  closeDialog={props.closeDialog}
                />)
              }
              else {
                return (<NParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  parameterSchema={obj.parameterSchema}
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  closeDialog={props.closeDialog}
                />)
              }
            }
            )}
          </React.Fragment>
        )}
      </Grid>
    </>
  );
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

function FunctionButtons({ setForm, openDialog, closeDialog, addToUserInput, mobile, inputRef }) {
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
          <FunctionButtonContainer inputRef={inputRef} />
        </AccordionDetails>
      </Accordion>
    )
  }
  else {
    return <FunctionButtonContainer />
  }
};

export { FunctionButtons };
