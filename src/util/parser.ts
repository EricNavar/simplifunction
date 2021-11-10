import { ExcelFunction } from '../commonTypes';

function parse(userInput: string, userInputIndex: number, formula: string, functions: Record<string, string>) {
  Object.keys(functions).forEach((f: string) => {
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
        formula = parseRangeResult.formula;
        userInputIndex = parseRangeResult.index;
      }
      else {
        //parseIndividualParameters(); //TODO
      }
    }
  });
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

function convertCommonNameToSyntactical(commonName:string, functions:Array<ExcelFunction>): string {
  return functions.filter((f:ExcelFunction) => f.commonName === commonName)[0].syntacticalName;
}

export { parse };
