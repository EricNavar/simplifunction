import { functionTranslation } from '../functions';

function parse(userInput: string):string {
  let userInputIndex = 0;
  //every function starts with an equals sign
  let formula: string = "=";
  while (userInputIndex < userInput.length) {
    // eslint-disable-next-line no-loop-func
    Object.keys(functionTranslation).forEach((commonName: string) => {
      const syntacticalName = functionTranslation[commonName];
      const substr = userInput.substr(userInputIndex, commonName.length);
      if (substr === commonName) {
        userInputIndex = userInputIndex + commonName.length
        formula = formula + syntacticalName + "( ";
        userInputIndex = parseWhitespace(userInputIndex, userInput);
        if (userInput.charAt(userInputIndex) !== "(") {
          userInput = "";
          return;
        }
        else {
          userInputIndex = userInputIndex + 1;
        }
        userInputIndex = parseWhitespace(userInputIndex, userInput);
        if (userInput.substr(userInputIndex, 4) === "from") {
          userInputIndex = userInputIndex + 4;
          const parseRangeResult = parseRange(userInputIndex, userInput, formula);
          formula = parseRangeResult.formula;
          userInputIndex = parseRangeResult.index;
        }
        else {
          //parseIndividualParameters(); //TODO
        }
      }
    });
    formula = formula + userInput.substr(userInputIndex, 1);
    userInputIndex = userInputIndex + 1;
  };
  return formula;
}

//the index is right after the "from"
type ParsedRange = {
  formula: string,
  index: number
}
const parseRange = (index: number, userInput: string, formula: string): ParsedRange => {
  index = parseWhitespace(index, userInput);
  const from = parseParameter(index, userInput);
  index = index + from.length;
  index = parseWhitespace(index, userInput);
  const toLiteral = parseWord(index, userInput); //parse the "to" keyword
  if (toLiteral === "to") {
    index = index + 2;
  }
  else {
    return ({ formula: "", index: -1 }); //this denotes an error
  }
  index = parseWhitespace(index, userInput);
  const to = parseParameter(index, userInput);
  index = index + to.length;
  index = parseWhitespace(index, userInput);
  index = index + 1; // consume the closing parentheses
  index = parseWhitespace(index, userInput);
  formula = formula + from + ":" + to + ")";
  return ({formula, index});
};

const parseParameter = (index: number, userInput: string) => {
  let word = "";
  while (index < userInput.length && userInput.substr(index, 1) !== " " && userInput.substr(index, 1) !== ",") {
    word = word + userInput.charAt(index);
    index = index + 1;
  }
  return word;
};

const parseWord = (index: number, userInput: string) => {
  let word = "";
  while (index < userInput.length && userInput.substr(index, 1) !== " ") {
    word = word + userInput.charAt(index);
    index = index + 1;
  }
  return word;
};

const parseWhitespace = (index: number, userInput: string) => {
  while (index < userInput.length && userInput.substr(index, 1) === " ") {
    index = index + 1;
  }
  return index;
};

export { parse };
