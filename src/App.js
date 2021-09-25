import './App.css';
import React from 'react';
import { AddForm } from './Forms/AddForm';
import { AverageForm } from './Forms/AverageForm';
import { DivideForm } from './Forms/DivideForm';
import { MinForm } from './Forms/MinForm';
import { MaxForm } from './Forms/MaxForm';
import { MultiplyForm } from './Forms/MultiplyForm';
import { SubtractForm } from './Forms/SubtractForm';
import { SummationForm } from './Forms/SummationForm';

// treat this as an enum
const functions = {
  ADD: "add",
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  MIN: "min",
  MAX: "max",
  SUMMATION: "summation",
  AVERAGE: "average"
}

const forms = {
  "add": AddForm,
  "subtract": SubtractForm,
  "multiply": MultiplyForm,
  "divide": DivideForm,
  "min": MinForm,
  "max": MaxForm,
  "summation": SummationForm,
  "average": AverageForm
}

function App() {
  const [activeFunction, setActiveFunction] = React.useState(functions.ADD);
  const [formComponent, setFormComponent] = React.useState(forms[functions.ADD]);

  const handleFunctionClick = (f) => {
    setActiveFunction(f);
    setFormComponent(forms[f]);
  }

  return (
    <div>
      <h1>Simplifunction</h1>
      <button className="button" onClick={e => handleFunctionClick(functions.ADD)}>
        Add
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.SUBTRACT)}>
        Subtract
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.MULTIPLY)}>
        Multiply
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.DIVIDE)}>
        Divide
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.MIN)}>
        Min
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.MAX)}>
        Max
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.SUMMATION)}>
        Summation
      </button>
      <button className="button" onClick={e => handleFunctionClick(functions.AVERAGE)}>
        Average
      </button>
      <h2>Calculate {activeFunction}:</h2>
      {formComponent}
    </div>
  );
}

export default App;
