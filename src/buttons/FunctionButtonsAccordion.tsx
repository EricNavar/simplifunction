import React from 'react';
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import '../styling/Calculator.css';

type FunctionButtonsAccordionProps = {
  children: React.ReactNode
}
function FunctionButtonsAccordion(props: FunctionButtonsAccordionProps):JSX.Element {
  const [expanded, setExpanded] = React.useState(false);
  function handleChange() {
    setExpanded(!expanded);
  }

  return (
    <Accordion expanded={expanded} onChange={handleChange} className="accordion" >
      <AccordionSummary
        expandIcon={<div>{expanded ? '-' : '+'}</div>}
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
  );
}

export { FunctionButtonsAccordion };
