import React from 'react';
import {
  Typography,
  Grid,
  TextField,
  InputAdornment,
  ListSubheader
} from '@mui/material';
import '../styling/Calculator.css';
import { functions, conversionFunction, trigonometryFunction } from '../functions';
import { SearchIcon } from '../assets/SearchIcon';
import { ExcelFunctionCategory, ExcelFunction } from '../commonTypes';
import { FunctionButton } from './FunctionButton';
import { FunctionButtonsAccordion } from './FunctionButtonsAccordion';

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
  functionButtonOnClick: (excelFunction: ExcelFunction) => void
}

function FunctionButtons(props: FunctionButtonsProps) {
  const { mobile, functionButtonOnClick } = props;

  React.useEffect(() => { }, [mobile]);

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
                  return (
                    <FunctionButton
                      key={index2}
                      label={obj.commonName}
                      onClick={ ()=> { functionButtonOnClick(obj) } }
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
          onClick={() => { functionButtonOnClick(conversionFunction) }}
        />
        <SectionHeader>
          Trigonometry functions
        </SectionHeader>
        <FunctionButton
          label="Trigonometry functions"
          onClick={() => { functionButtonOnClick(trigonometryFunction) }}
        />
      </Grid>
    </Grid>
  );
}

type FunctionButtonsWrapperProps = {
  mobile: boolean,
  functionButtonOnClick: (excelFunction: ExcelFunction) => void
}

function FunctionButtonsWrapper(props: FunctionButtonsWrapperProps) {
  const { mobile, functionButtonOnClick } = props;
  React.useEffect(() => { console.log("FunctionButtonsWrapper useEffect()") }, [mobile]);

  const content = (<FunctionButtons
    mobile={mobile}
    functionButtonOnClick={functionButtonOnClick}
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
