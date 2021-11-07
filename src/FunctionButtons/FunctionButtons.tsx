import React from 'react';
import {
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  InputAdornment
} from '@mui/material';
import '../Calculator.css';
import { functions } from './functions';
import { SearchIcon } from '../SearchIcon';
import { ListParameteredFunctionButton } from './ListParameteredFunctionButton';
import { SingleParameterFunctionButton } from './SingleParameterFunctionButton';
import { NParameterFunctionButton } from './NParameterFunctionButton';
import { ParameterType, ExcelFunctionType } from '../commonTypes';

type FunctionButtonContainerProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function FunctionButtonContainer(props: FunctionButtonContainerProps) {
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredFunctions, setFilteredFunctions] = React.useState(functions);

  const onChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
    setFilteredFunctions(functions.filter(f => f.commonName.toLowerCase().includes(e.target.value)));
  };

  const ExcelFunctionTypeArray = [
    ExcelFunctionType.Math,
    ExcelFunctionType.Trigonometry,
    ExcelFunctionType.Statistics,
    ExcelFunctionType.Bitwise,
    ExcelFunctionType.Conversion,
    ExcelFunctionType.Text,
    ExcelFunctionType.Date,
    ExcelFunctionType.Lookup
  ];

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
      </div>
      <Grid item container xs={12} sm={6} md={4} spacing={2} className="function-button-container">
        {ExcelFunctionTypeArray.map((functionType:any, index:number) =>
          <React.Fragment key={index}>
            <SectionHeader>
              {functionType}
            </SectionHeader>
            {filteredFunctions.filter(f => f.type === functionType).map((obj, index) => {
              if (obj.parameterType === ParameterType.LIST) {
                return (<ListParameteredFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  setForm={props.setForm}
                  setDialogOpen={props.setDialogOpen}
                />)
              }
              else if (obj.parameterType === ParameterType.SINGLE) {
                return (<SingleParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  setDialogOpen={props.setDialogOpen}
                  setForm={props.setForm}
                />)
              }
              else {
                return (<NParameterFunctionButton
                  label={obj.commonName}
                  syntacticalName={obj.syntacticalName}
                  description={obj.description}
                  key={index}
                  parameterSchema={obj.parameterSchema!}
                  inputRef={props.inputRef}
                  addToUserInput={props.addToUserInput}
                  setDialogOpen={props.setDialogOpen}
                  setForm={props.setForm}
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

type SectionHeaderProps = {
  children: React.ReactNode,
}
function SectionHeader(props: SectionHeaderProps) {
  return (
    <Grid item xs={12}>
      <Typography component="p" variant="h5" className="sectionHeader">
        {props.children}
      </Typography>
    </Grid>
  );
}

type FunctionButtonsProps = {
  mobile: boolean,
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (open: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}
function FunctionButtons(props: FunctionButtonsProps) {
  const { mobile, inputRef, addToUserInput, setDialogOpen, setForm } = props;
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
          <FunctionButtonContainer setDialogOpen={setDialogOpen} inputRef={inputRef} addToUserInput={addToUserInput} setForm={setForm} />
        </AccordionDetails>
      </Accordion>
    )
  }
  else {
    return <FunctionButtonContainer setDialogOpen={setDialogOpen} inputRef={inputRef} addToUserInput={addToUserInput} setForm={setForm} />
  }
};

export { FunctionButtons };
