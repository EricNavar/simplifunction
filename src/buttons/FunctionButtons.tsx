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
import { ListParameterForm } from '../forms/ListParameterForm';
import { SingleParameterForm } from '../forms/SingleParameterForm';
import { NParameterForm } from '../forms/NParameterForm';
import { ConversionForm } from '../forms/ConversionForm';
import { TrigonometryForm } from '../forms/TrigonometryForm';
import { ExcelFunctionCategory, ExcelFunction, ParameterFormat, FormProps } from '../commonTypes';
import { FunctionButton } from './FunctionButton';

type FunctionButtonsProps = {
  addToUserInput: (strToAdd: string, focus: boolean) => void,
  setDialogOpen: (value: boolean) => void,
  mobile: boolean,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function FunctionButtons(props: FunctionButtonsProps) {
  const { addToUserInput, setDialogOpen, mobile, setForm } = props;

  React.useEffect(() => {}, [mobile]);

  const [searchInput, setSearchInput] = React.useState('');
  const [searchedFunctions, setSearchedFunctions] = React.useState(functions);

  function onChangeSearchInput(e: any) {
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

  const conversionOnClick = () => {
    setForm(
      <ConversionForm
        addToUserInput={addToUserInput}
        setDialogOpen={setDialogOpen}
        // the excel function passed in here isn't considered, so it can be anything
        excelFunction={functions[0]}
      />
    );
    setDialogOpen(true);
  }

  const trigonometryOnClick = () => {
    setForm(
      <TrigonometryForm
        addToUserInput={addToUserInput}
        setDialogOpen={setDialogOpen}
        // the excel function passed in here isn't considered, so it can be anything
        excelFunction={functions[0]}
      />
    );
    setDialogOpen(true);
  }

  return (
    <Grid item container xs={12} sm={6} spacing={mobile ? 0 : 2} component='section'>
      {!mobile &&
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
        {ExcelFunctionTypeArray.map((functionType: any, index1: number) => {
          const categorizedFunctions = searchedFunctions.filter((func: ExcelFunction) =>
            func.category === functionType
          );
          if (categorizedFunctions.length === 0) {
            return <></>
          }
          return (
            <React.Fragment>
              <SectionHeader>
                {functionType}
              </SectionHeader>
              {categorizedFunctions.filter(
                (f: ExcelFunction) => f.category === functionType).map((obj: ExcelFunction, index2: number) => {
                  let FormComponent:(props:FormProps)=>JSX.Element = NParameterForm;
                  if (obj.parameterFormat === ParameterFormat.LIST) {
                    FormComponent = ListParameterForm;
                  }
                  else if (obj.parameterFormat === ParameterFormat.SINGLE) {
                    FormComponent = SingleParameterForm;
                  }
                  const onClick = () => {
                    setForm(
                      <FormComponent
                        addToUserInput={addToUserInput}
                        setDialogOpen={setDialogOpen}
                        excelFunction={obj}
                      />
                    );
                    setDialogOpen(true);
                  }
                  return (
                    <FunctionButton
                      key={index2}
                      label={obj.commonName}
                      onClick={onClick}
                    />
                  );
                }
              )}
            </React.Fragment>
          )
        })}
        <SectionHeader>
          Number Base Conversion
        </SectionHeader>
        <FunctionButton
          label="Conversion functions"
          onClick={conversionOnClick}
        />
        <SectionHeader>
          Trigonometry functions
        </SectionHeader>
        <FunctionButton
          label="Trigonometry functions"
          onClick={trigonometryOnClick}
        />
      </Grid>
    </Grid>
  );
}

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

type FunctionButtonsAccordionProps = {
  children: React.ReactNode
}
function FunctionButtonsAccordion(props: FunctionButtonsAccordionProps) {
  const [expanded, setExpanded] = React.useState(false);
  function handleChange() {
    setExpanded(!expanded);
  };

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
        {props.children}
      </AccordionDetails>
    </Accordion>
  )
}

type FunctionButtonsWrapperProps = {
  mobile: boolean,
  addToUserInput: (strToAdd: string, focus: boolean) => void,
  setDialogOpen: (open: boolean) => void,
  setForm: (form: React.SetStateAction<JSX.Element>) => void,
}

function FunctionButtonsWrapper(props: FunctionButtonsWrapperProps) {
  const { mobile, addToUserInput, setDialogOpen, setForm } = props;
  React.useEffect(() => { /*console.log("FunctionButtonsWrapper useEffect()")*/ }, [mobile]);

  const content = (<FunctionButtons
    mobile={mobile}
    setDialogOpen={setDialogOpen}
    addToUserInput={addToUserInput}
    setForm={setForm}
  />);

  if (mobile) {
    return (<FunctionButtonsAccordion>
      {content}
    </FunctionButtonsAccordion>)
  }
  else {
    return content;
  }
};

export { FunctionButtonsWrapper };
