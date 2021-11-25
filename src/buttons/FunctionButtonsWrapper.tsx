import React from 'react';
import { FunctionButtons } from './FunctionButtons';
import { FunctionButtonsAccordion } from './FunctionButtonsAccordion';
import { ExcelFunction } from '../commonTypes';

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
    return (
      <FunctionButtonsAccordion>
        {content}
      </FunctionButtonsAccordion>
    )
  }
  else {
    return content;
  }
};

export { FunctionButtonsWrapper };
