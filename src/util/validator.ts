/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ParameterType, Parameter } from '../commonTypes';

export function validateList(parameters: Array<string>, type: ParameterType): Array<string | null> {
  return parameters.map((parameter: string) => validateParameter(parameter, type));
}

// The parameter value must be of the given type, or it must be a valid cell.
// This website can't tell if the cell would be of the correct type, so there's
// that uncertainty.
export function validateParameter(parameter: string, type: ParameterType): string | null {
  if (parameter === '') {
    return 'Please provide an input value.';
  }
  else if (type === ParameterType.string) {
    return validateSingleStringParameter(parameter);
  }
  else if (type === ParameterType.number) {
    return validateNumberParameter(parameter);
  }
  else { //else type is date
    return null; // TODO: implement correct logic
  }
}

function validateSingleStringParameter(parameter: string): string | null {
  return (isString(parameter) === null || isCell(parameter) === null)
    ? null
    : 'Please provide a valid cell or other valid input.';
}

function validateNumberParameter(parameter: string): string | null {
  return (isNumber(parameter) === null || isCell(parameter) === null)
    ? null
    : 'Please provide a valid cell or number.';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isString(parameter: string): boolean {
  return true; //TODO
}

export function validateNParameters(parameterValues: Array<Array<string>>, parameterSchema: Array<Parameter>): Array<string | null> {
  return parameterValues!.map((parameter: Array<string>, index: number) => {
    const type:ParameterType = parameterSchema![index].type;
    if (type == ParameterType.range) {
      return isCell(parameter[0]) && isCell(parameter[1]);
    }
    return validateParameter(parameter[0], type);
  });
}

// Javascript is so dumb like why do I have to do this stupid roundabout logic?
function isNumber(parameter: string): string | null {
  return isNaN(Number(parameter))
    ? 'Please provide a valid number'
    : null;
}

export function isCell(parameter: string): string | null {
  const regex = /^[A-Z]+[0-9]+$/;
  return regex.test(parameter)
    ? null
    : 'Please provide a valid cell.';
}
