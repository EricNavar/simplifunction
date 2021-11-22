import React from 'react';
import {
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  InputAdornment,
  ListSubheader
} from '@mui/material';
import '../styling/Calculator.css';
import { functions } from '../functions';
import { SearchIcon } from '../assets/SearchIcon';
import { ListParameteredFunctionButton } from './ListParameteredFunctionButton';
import { SingleParameterFunctionButton } from './SingleParameterFunctionButton';
import { NParameterFunctionButton } from './NParameterFunctionButton';
import { ExcelFunctionCategory, ExcelFunction, ParameterFormat } from '../commonTypes';
import { ConversionButton } from './ConversionButton';
import { TrigonometryButton } from './TrigonometryButton';

type FunctionButtonContainerProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  mobile: boolean,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function FunctionButtonContainer(props: FunctionButtonContainerProps) {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchedFunctions, setSearchedFunctions] = React.useState(functions);

  const onChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setSearchedFunctions(functions);
    }
    setSearchedFunctions(functions.filter((f: ExcelFunction) => f.commonName.toLowerCase().includes(e.target.value)));
  };

  const ExcelFunctionTypeArray = [
    ExcelFunctionCategory.Math,
    ExcelFunctionCategory.Statistics,
    ExcelFunctionCategory.Bitwise,
    ExcelFunctionCategory.Text,
    ExcelFunctionCategory.Date,
    ExcelFunctionCategory.Lookup,
    ExcelFunctionCategory.Web
  ];

  return (
    <Grid item container xs={12} sm={6} spacing={props.mobile ? 0 : 2} className="function-buttons" component='section'>
      {!props.mobile &&
        <Typography component="h2" variant='h4' style={{ width: '100%' }}>
          Excel Functions
        </Typography>
      }
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <div className='function-textfield'>
          <TextField
            id="function-search"
            placeholder="Search function"
            value={searchInput}
            onChange={onChangeSearchInput}
            variant="outlined"
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: {
                borderRadius: 20
              }
            }}
          />
        </div>
      </div>
      <Grid item container spacing={2} className="function-buttons-grid-container">
        {ExcelFunctionTypeArray.map((functionType: any, index: number) => {
          const categorizedFunctions = searchedFunctions.filter((func: ExcelFunction) => func.category === functionType);
          if (categorizedFunctions.length === 0) {
            return <></>
          }
          return (
            <React.Fragment key={index}>
              <SectionHeader>
                {functionType}
              </SectionHeader>
              {categorizedFunctions.filter((f: ExcelFunction) => f.category === functionType).map((obj: ExcelFunction, index: number) => {
                if (obj.parameterFormat === ParameterFormat.LIST) {
                  return (<ListParameteredFunctionButton
                    key={index}
                    inputRef={props.inputRef}
                    addToUserInput={props.addToUserInput}
                    setForm={props.setForm}
                    setDialogOpen={props.setDialogOpen}
                    excelFunction={obj}
                  />)
                }
                else if (obj.parameterFormat === ParameterFormat.SINGLE) {
                  return (<SingleParameterFunctionButton
                    key={index}
                    inputRef={props.inputRef}
                    addToUserInput={props.addToUserInput}
                    setDialogOpen={props.setDialogOpen}
                    setForm={props.setForm}
                    excelFunction={obj}
                  />)
                }
                else {
                  return (<NParameterFunctionButton
                    key={index}
                    inputRef={props.inputRef}
                    addToUserInput={props.addToUserInput}
                    setDialogOpen={props.setDialogOpen}
                    setForm={props.setForm}
                    excelFunction={obj}
                  />)
                }
              }
              )}
            </React.Fragment>
          )
        })}
        <SectionHeader>
          Number Base Conversion
        </SectionHeader>
        <ConversionButton
          inputRef={props.inputRef}
          addToUserInput={props.addToUserInput}
          setDialogOpen={props.setDialogOpen}
          setForm={props.setForm}
        />
        <SectionHeader>
          Trigonometry functions
        </SectionHeader>
        <TrigonometryButton
          inputRef={props.inputRef}
          addToUserInput={props.addToUserInput}
          setDialogOpen={props.setDialogOpen}
          setForm={props.setForm}
        />
      </Grid>
    </Grid>
  );
}

/*        
        */

type SectionHeaderProps = {
  children: React.ReactNode,
}
function SectionHeader(props: SectionHeaderProps) {
  return (
    <ListSubheader className="section-header">
      <Typography component="p" variant="h5">
        {props.children}
      </Typography>
    </ListSubheader>
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
      <Accordion expanded={expanded} onChange={handleChange} className="accordion" >
        <AccordionSummary
          expandIcon={<div>{expanded ? "-" : "+"}</div>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component='h2' variant='body1' sx={{ width: '100%', flexShrink: 0 }}>
            Excel Functions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FunctionButtonContainer
            mobile={mobile}
            setDialogOpen={setDialogOpen}
            inputRef={inputRef}
            addToUserInput={addToUserInput}
            setForm={setForm}
          />
        </AccordionDetails>
      </Accordion>
    )
  }
  else {
    return (
      <FunctionButtonContainer
        mobile={mobile}
        setDialogOpen={setDialogOpen}
        inputRef={inputRef}
        addToUserInput={addToUserInput}
        setForm={setForm}
      />
    )
  }
};

export { FunctionButtons };
