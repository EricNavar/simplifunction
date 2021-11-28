/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParameterType, Parameter } from '../commonTypes';

export function validateList(parameters: Array<string>, type: ParameterType): Array<boolean> {
  return parameters.map((parameter: string) => validateParameter(parameter, type));
}

// The parameter value must be of the given type, or it must be a valid cell.
// This website can't tell if the cell would be of the correct type, so there's
// that uncertainty.
export function validateParameter(parameter: string, type: ParameterType): boolean {
  if (parameter === '') {
    return false;
  }
  else if (type === ParameterType.string) {
    return validateSingleStringParameter(parameter);
  }
  else if (type === ParameterType.number) {
    return validateNumberParameter(parameter);
  }
  else { //else type is date
    return true; // TODO: implement correct logic
  }
}

function validateSingleStringParameter(parameter: string): boolean {
  return isString(parameter) || isCell(parameter);
}

function validateNumberParameter(parameter: string): boolean {
  return isNumber(parameter) || isCell(parameter);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isString(parameter: string): boolean {
  return true; //TODO
}

export function validateNParameters(parameterValues: Array<Array<string>>, parameterSchema: Array<Parameter>): Array<boolean> {
  return parameterValues!.map((parameter: Array<string>, index: number) => {
    const type:ParameterType = parameterSchema![index].type;
    if (type == ParameterType.range) {
      return isCell(parameter[0]) && isCell(parameter[1]);
    }
    return validateParameter(parameter[0], type);
  });
}

// Javascript is so dumb like why do I have to do this stupid roundabout logic?
function isNumber(parameter: string): boolean {
  return !isNaN(Number(parameter));
}

export function isCell(parameter: string): boolean {
  const regex = /[A-Z]+[0-9]+/;
  return regex.test(parameter);
}
