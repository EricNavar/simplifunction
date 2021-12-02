import React from 'react';
import {
  Typography,
  ListSubheader
} from '@mui/material';
import '../styling/Calculator.css';
import { conversionFunction, trigonometryFunction } from '../functions';
import { ExcelFunctionCategory, ExcelFunction } from '../commonTypes';
import { FunctionButton } from './FunctionButton';

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
  functionButtonOnClick: (excelFunction: ExcelFunction) => void,
  searchedFunctions: Array<ExcelFunction>,
}

export function FunctionButtons(props: FunctionButtonsProps):JSX.Element {
  const { functionButtonOnClick, searchedFunctions } = props;

  const ExcelFunctionTypeArray = [
    ExcelFunctionCategory.BasicMath,
    ExcelFunctionCategory.Algebra,
    ExcelFunctionCategory.Text,
    ExcelFunctionCategory.Lookup,
    ExcelFunctionCategory.Statistics,
    ExcelFunctionCategory.Date,
    ExcelFunctionCategory.Bitwise,
    ExcelFunctionCategory.Web
  ];

  return (
    <div className="function-buttons-grid-container">
      {ExcelFunctionTypeArray.map((functionType: ExcelFunctionCategory, index1: number) => {
        const categorizedFunctions = searchedFunctions.filter((func: ExcelFunction) =>
          func.category === functionType
        );
        if (categorizedFunctions.length === 0) {
          return <></>;
        }
        return (
          <div className="flex flex-col" key={index1}>
            <SectionHeader>
              {functionType}
            </SectionHeader>
            <div className="function-button-container">
              {categorizedFunctions.filter((f: ExcelFunction) => f.category === functionType).map((obj: ExcelFunction, index2: number) => (
                <FunctionButton
                  key={index2}
                  label={obj.commonName}
                  onClick={() => { functionButtonOnClick(obj); } } />
              ))}
            </div>
          </div>
        );
      })}
      <SectionHeader>
        Number Base Conversion
      </SectionHeader>
      <FunctionButton
        label='Conversion functions'
        onClick={() => { functionButtonOnClick(conversionFunction); }}
      />
      <SectionHeader>
        Trigonometry functions
      </SectionHeader>
      <FunctionButton
        label='Trigonometry functions'
        onClick={() => { functionButtonOnClick(trigonometryFunction); }}
      />
    </div>
  );
}
