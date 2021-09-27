// TODO: look at the user input in the text field and turn it into valid
// Visual Basic code for Excel. This is a very basic parser that has a 
// lot of room for improvement. There's a lot of error handling that can
// be done here

const functions = {
  "summation": "SUM(",
  "average": "AVERAGE(",
  "minimum": "MIN(",
  "maximum": "MAX"
};

const createFormula = (userInput) => {
  userInput = formatUserInput(userInput);
  if (userInput === "") {
    return "No input";
  }
  let userInputIndex = 0;
  let formula = "=";
  while (userInputIndex < userInput.length) {
    // eslint-disable-next-line no-loop-func
    Object.keys(functions).forEach(f => {
      const substr = userInput.substr(userInputIndex, f.length);
      if (substr === f) {
        userInputIndex = userInputIndex + f.length;
        formula = formula + functions[f];
        userInputIndex = parseWhitespace(userInputIndex, userInput);
        if (userInput.charAt(userInputIndex) !== "(") {
          return "";
        }
        else {
          userInputIndex = userInputIndex + 1;
        }
        userInputIndex = parseWhitespace(userInputIndex, userInput);
        if (userInput.substr(userInputIndex, 4) === "from") {
          userInputIndex = userInputIndex + 4;
          const parseRangeResult = parseRange(userInputIndex, userInput, formula);
          formula = parseRangeResult[0];
          userInputIndex = parseRangeResult[1];
        }
        else {
          //parseIndividualParameters();
        }
      }
    });
    formula = formula + userInput.substr(userInputIndex, 1);
    userInputIndex = userInputIndex + 1;
  };
  return formula;
};

//the index is right after the "from"
const parseRange = (index, userInput, formula) => {
  index = parseWhitespace(index, userInput);
  const from = parseParameter(index, userInput);
  index = index + from.length;
  index = parseWhitespace(index, userInput);
  const toLiteral = parseWord(index, userInput); //parse the "to" keyword
  if (toLiteral === "to") {
    index = index + 2;
  }
  else {
    return ["", -1]; //error
  }
  index = parseWhitespace(index, userInput);
  const to = parseParameter(index, userInput);
  index = index + to.length;
  index = parseWhitespace(index, userInput);
  index = index + 1; // consume the closing parentheses
  index = parseWhitespace(index, userInput);
  formula = formula + from + ":" + to + ")";
  return [formula, index];
};

const parseParameter = (index, userInput) => {
  let word = "";
  while (index < userInput.length && userInput.substr(index, 1) !== " " && userInput.substr(index, 1) !== ",") {
    word = word + userInput.charAt(index);
    index = index + 1;
  }
  return word;
};

const parseWord = (index, userInput) => {
  let word = "";
  while (index < userInput.length && userInput.substr(index, 1) !== " ") {
    word = word + userInput.charAt(index);
    index = index + 1;
  }
  return word;
};

const parseWhitespace = (index, userInput) => {
  while (index < userInput.length && userInput.substr(index, 1) === " ") {
    index = index + 1;
  }
  return index;
};

const keywords = {
  "+": " + ",
  "-": " - ",
  "×": " * ",
  "÷": " / ",
  "(": "( ",
  ")": " )"
};

const formatUserInput = (userInput) => {
  Object.keys(keywords).forEach(keyword => {
    userInput = userInput.replace(keyword, " " + keywords[keyword] + " ");
  });
  return userInput.trim();
};

export { createFormula }
