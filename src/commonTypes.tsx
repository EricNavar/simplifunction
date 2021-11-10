export enum ExcelFunctionCategory {
  Math = "Math",
  Trigonometry = "Trigonometry",
  Statistics = "Statistics",
  Bitwise = "Bitwise",
  Conversion = "Conversion",
  Text = "Text",
  Date = "Date",
  Lookup = "Lookup"
}

export enum ParameterType {
  SINGLE,
  N,
  LIST
}

export type Parameter = {
  name: string,
  helperText?: string,
  required: boolean,
};

export type ExcelFunction = {
  commonName: string,
  syntacticalName: string,
  description:  string,
  category: ExcelFunctionCategory,
  parameterFormat: ParameterType,
  parameterSchema?: Array<Parameter>
}
