import React from 'react';
import './Forms.css';

function SummationForm(props) {
  const [parameterCount, setParameterCount] = React.useState(2);
  const [parameters, setParameters] = React.useState(["", ""]);
  const [inputMode, setInputMode] = React.useState("range");
  const [startCell, setStartCell] = React.useState("A1");
  const [endCell, setEndCell] = React.useState("A2");

  React.useEffect = (() => {
  }, [parameterCount, inputMode, startCell, endCell]);

  const addParameter = () => {
    let newParameters = parameters;
    newParameters.push("");
    setParameters(newParameters);
    setParameterCount(parameterCount + 1);
  }

  const onChangeParameter = (e, index) => {
    parameters[index] = e.target.value;
    props.setFormula(createFormulaFromParameters());
  }

  const createFormulaFromRange = () => {
    return `SUM(${startCell}:${endCell})`;
  }

  const createFormulaFromParameters = () => {
    let formula = "=SUM(";
    parameters.forEach((parameter, index) => {
      if (index !== 0)
      formula = formula + ",";
      formula = formula + parameter
    });
    formula = formula + ")";
    return formula;
  };

  const switchInputMode = (e) => {
    setInputMode(e.target.value);
  };

  const onRadioLabelClick = (inputMode) => {
    setInputMode(inputMode);
  }

  const onChangeStartCell = e => {
    setStartCell(e.target.value);
    props.setFormula(createFormulaFromRange());
  };

  const onChangeEndCell = e => {
    console.log("onChangeEndCell");
    setEndCell(e.target.value);
    props.setFormula(createFormulaFromRange());
  };

  return (
    <div>
      <div >
        <input type="radio" name="drone" onChange={switchInputMode} value="individual" checked={inputMode === "individual"} />
        <label onClick={e => onRadioLabelClick("individual")}>Individual Cells</label>
      </div>

      <div value="range" className="bottom-radio">
        <input type="radio" name="drone" onChange={switchInputMode} value="range" checked={inputMode === "range"} />
        <label onClick={e => onRadioLabelClick("range")}>Range</label>
      </div>

      {inputMode === "individual" && 
        <>
          {parameters.map((parameter, index) =>
            <div key={`summation-form-${index}`}>
              <label className="label">{`Parameter ${index + 1}`}</label>
              <input type="text" id="fname" name="fname" onChange={e => onChangeParameter(e, index)} />
            </div>
          )}
          <button onClick={addParameter} className="add-parameter-button">
            + Add parameter
          </button>
        </>
      }
      {inputMode === "range" && (
        <div >
          <label className="label">Start cell</label>
          <input type="text" id="fname" name="fname" onChange={onChangeStartCell} />
          <br />
          <label className="label">End cell</label>
          <input type="text" id="fname" name="fname" onChange={onChangeEndCell} />
        </div>
      )}
    </div>
  );
}

export { SummationForm };
