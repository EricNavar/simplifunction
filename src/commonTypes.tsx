export enum ExcelFunctionCategory {
  BasicMath = 'Basic Math',
  Algebra = 'Algebra',
  Statistics = 'Statistics',
  Bitwise = 'Bitwise',
  Text = 'Text',
  Date = 'Date',
  Lookup = 'Lookup',
  Web = 'Web',
}

export enum ParameterFormat {
  N,
  LIST,
  TRIGONOMETRY,
  CONVERSION
}

export enum ParameterType {
  string,
  number,
  date,
  range
}
// a range is a range of cells

export type Parameter = {
  name: string,
  helperText?: string,
  required: boolean,
  type: ParameterType
};

export type Variant = {
  alternativeName: string,
  condition: string
}

export type ExcelFunction = {
  commonName: string,
  // yes, this could easily be calculated, but I am favoring speed over memory usage.
  // only store this data for functions where the common name has spaces
  description: string,
  category: ExcelFunctionCategory,
  parameterFormat: ParameterFormat,
  parameterSchema?: Array<Parameter>,
  // this is for single parameter and list parameters because all they all have parameters of the same type
  parameterType?: ParameterType,
  remarks?: Array<string>,
  documentationLink: string,
  variant?: Variant
}

export type FormProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, focus: boolean) => void,
  setDialogOpen: (value: boolean) => void,
}
