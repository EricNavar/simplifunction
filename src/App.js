import './App.css';
import React from 'react';
import { AverageForm } from './Forms/AverageForm';
import { DivideForm } from './Forms/DivideForm';
import { MinForm } from './Forms/MinForm';
import { MaxForm } from './Forms/MaxForm';
import { MultiplyForm } from './Forms/MultiplyForm';
import { SubtractForm } from './Forms/SubtractForm';
import { SummationForm } from './Forms/SummationForm';

// treat this as an enum
const functions = {
  SUBTRACT: "subtract",
  MULTIPLY: "multiply",
  DIVIDE: "divide",
  MIN: "min",
  MAX: "max",
  SUMMATION: "summation",
  AVERAGE: "average"
}

function App() {
  const [activeFunction, setActiveFunction] = React.useState(functions.SUMMATION);
  // this is the end result, the formula that the user can type into Excel
  const [formula, setFormula] = React.useState('');

  const handleFunctionClick = (f) => {
    setActiveFunction(f);
  };

  React.useEffect = (() => {
    console.log("App.js use effect");
  }, [activeFunction]);

  const getForm = (f) => {
    //there's weird behavior when I make this a hashtable, so I'm
    //making it a big if-else chain instead
    if (f === "subtract")
      return <SubtractForm setFormula={setFormula} />;
    else if (f === "multiply")
      return <MultiplyForm setFormula={setFormula} />;
    else if (f === "divide")
      return <DivideForm setFormula={setFormula} />;
    else if (f === "min")
      return <MinForm setFormula={setFormula} />;
    else if (f === "max")
      return <MaxForm setFormula={setFormula} />;
    else if (f === "summation")
      return <SummationForm setFormula={setFormula} />
    else if (f === "average")
      return <AverageForm setFormula={setFormula} />
    return <></>
  };

  return (
    <div className="App">
      <h1>Simplifunction</h1>
      <div className="function-button-container">
        <button className="function-button button" onClick={e => handleFunctionClick(functions.SUMMATION)}>
          + Summation
        </button>
        <button className="function-button button" onClick={e => handleFunctionClick(functions.SUBTRACT)}>
          - Subtract
        </button>
        <button className="function-button button" onClick={e => handleFunctionClick(functions.MULTIPLY)}>
          x Multiply
        </button>
        <button className="function-button button" onClick={e => handleFunctionClick(functions.DIVIDE)}>
          ÷ Divide
        </button>
      </div>
      <div className="function-button-container">
        <button className="small-function-button button" onClick={e => handleFunctionClick(functions.MIN)}>
          Min
        </button>
        <button className="small-function-button button" onClick={e => handleFunctionClick(functions.MAX)}>
          Max
        </button>
        <button className="function-button button" onClick={e => handleFunctionClick(functions.AVERAGE)}>
          Average
        </button>
      </div>
      <h2>Calculate {activeFunction}:</h2>
      {getForm(activeFunction)}

      <p><b>Here is your formula:</b></p>
      <p className="formula">{formula}</p>
    </div>
  );
}

export default App;
