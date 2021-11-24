// TODO: look at the user input in the text field and turn it into valid
// Visual Basic code for Excel. This is a very basic parser that has a 
// lot of room for improvement. There's a lot of error handling that can
// be done here

import { parse } from '../util/parser';

function createFormula(userInput: string):string {
  userInput = formatUserInput(userInput);
  if (userInput === "") {
    return "No input";
  }
  return parse(userInput);
};

const keywords: Record<string, string> = {
  "+": " + ",
  "-": " - ",
  "×": " * ",
  "÷": " / ",
  "(": "( ",
  ")": " )"
};

function formatUserInput(userInput: string):string {
  Object.keys(keywords).forEach(keyword => {
    userInput = userInput.replace(keyword, " " + keywords[keyword] + " ");
  });
  return userInput.trim();
};

export { createFormula }
