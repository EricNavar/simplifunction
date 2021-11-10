// TODO: look at the user input in the text field and turn it into valid
// Visual Basic code for Excel. This is a very basic parser that has a 
// lot of room for improvement. There's a lot of error handling that can
// be done here

const createFormula = (userInput: string) => {
  userInput = formatUserInput(userInput);
  if (userInput === "") {
    return "No input";
  }
  let userInputIndex = 0;
  //every function starts with an equals sign
  let formula: string = "=";
  while (userInputIndex < userInput.length) {
    // eslint-disable-next-line no-loop-func
    formula = formula + userInput.substr(userInputIndex, 1);
    userInputIndex = userInputIndex + 1;
  };
  return formula;
};

const keywords:Record<string,string> = {
  "+": " + ",
  "-": " - ",
  "×": " * ",
  "÷": " / ",
  "(": "( ",
  ")": " )"
};

const formatUserInput = (userInput: string) => {
  Object.keys(keywords).forEach(keyword => {
    userInput = userInput.replace(keyword, " " + keywords[keyword] + " ");
  });
  return userInput.trim();
};

export { createFormula }
