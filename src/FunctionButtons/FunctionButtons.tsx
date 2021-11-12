import React from 'react';
import {
  Typography,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  IconButton
} from '@mui/material';
import '../styling/Calculator.css';
import { functions } from '../functions';
import { SearchIcon } from '../assets/SearchIcon';
import { ListParameteredFunctionButton } from './ListParameteredFunctionButton';
import { SingleParameterFunctionButton } from './SingleParameterFunctionButton';
import { NParameterFunctionButton } from './NParameterFunctionButton';
import { ExcelFunctionCategory, ExcelFunction, ParameterFormat } from '../commonTypes';

type FunctionButtonContainerProps = {
  inputRef: HTMLInputElement,
  addToUserInput: (strToAdd: string, inputRef: HTMLInputElement) => Promise<void>,
  setDialogOpen: (value: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
  mobile: boolean
}

function FunctionButtonContainer(props: FunctionButtonContainerProps) {
  const [searchInput, setSearchInput] = React.useState('');
  const [filteredFunctions, setFilteredFunctions] = React.useState(functions);
  const [searchBarExpanded, setSearchBarExpanded] = React.useState(false);

  const onChangeSearchInput = (e: any) => {
    setSearchInput(e.target.value);
    setFilteredFunctions(functions.filter((f: ExcelFunction) => f.commonName.toLowerCase().includes(e.target.value)));
  };

  const ExcelFunctionTypeArray = [
    ExcelFunctionCategory.Math,
    ExcelFunctionCategory.Trigonometry,
    ExcelFunctionCategory.Statistics,
    ExcelFunctionCategory.Bitwise,
    ExcelFunctionCategory.Conversion,
    ExcelFunctionCategory.Text,
    ExcelFunctionCategory.Date,
    ExcelFunctionCategory.Lookup,
    ExcelFunctionCategory.Web
  ];

  const toggleSearchBarExpanded = () => {
    setSearchBarExpanded(!searchBarExpanded);
  };

  return (
    <Grid item container xs={12} sm={6} md={4} spacing={2} className="function-buttons">
      {!props.mobile &&
        <Typography component="h2" variant='h4' style={{ width: '100%' }}>
          Functions
        </Typography>
      }
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <IconButton disableRipple={searchBarExpanded} onClick={toggleSearchBarExpanded}>
          <SearchIcon />
        </IconButton>
        <div className={'function-textfield' + (searchBarExpanded ? "" : " not-expanded-textfield")}>
          <TextField
            id="function-search"
            placeholder="Search function"
            value={searchInput}
            onChange={onChangeSearchInput}
            variant="outlined"
            size='small'
          />
        </div>
      </div>
      <Grid item container spacing={2} className="function-buttons-grid-container">
        {ExcelFunctionTypeArray.map((functionType: any, index: number) =>
          <React.Fragment key={index}>
            <SectionHeader>
              {functionType}
            </SectionHeader>
            {filteredFunctions.filter((f: ExcelFunction) => f.category === functionType).map((obj: ExcelFunction, index: number) => {
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
            <div style={{ height: 16, width: '100%' }} />
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  );
}

type SectionHeaderProps = {
  children: React.ReactNode,
}
function SectionHeader(props: SectionHeaderProps) {
  return (
    <Typography component="p" variant="h5" className="sectionHeader" style={{ width: '100%' }}>
      {props.children}
    </Typography>
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
          <Typography component='h2' variant='body1' sx={{ width: '33%', flexShrink: 0 }}>
            Functions
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
