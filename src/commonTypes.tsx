export enum ExcelFunctionCategory {
  Math = "Math",
  Trigonometry = "Trigonometry",
  Statistics = "Statistics",
  Bitwise = "Bitwise",
  Conversion = "Conversion",
  Text = "Text",
  Date = "Date",
  Lookup = "Lookup",
  Web = "Web"
}

export enum ParameterFormat {
  SINGLE,
  N,
  LIST
}

export enum ParameterType {
  string,
  number,
  date
}

export type Parameter = {
  name: string,
  helperText?: string,
  required: boolean,
  type: ParameterType
};

export type ExcelFunction = {
  commonName: string,
  // yes, this could easily be calculated, but I am favoring speed over memory usage.
  // only store this data for functions where the common name has spaces
  commonNameNoSpaces?: string,
  syntacticalName: string,
  description:  string,
  category: ExcelFunctionCategory,
  parameterFormat: ParameterFormat,
  parameterSchema?: Array<Parameter>,
  // this is for single parameter and list parameters because all they all have parameters of the same type
  parameterType?: ParameterType,
  remarks?: Array<string>,
  documentationLink: string
}

export type FormProps = {
  excelFunction: ExcelFunction,
  addToUserInput: (strToAdd: string, focus:boolean) => void,
  setDialogOpen: (value: boolean) => void,
}
