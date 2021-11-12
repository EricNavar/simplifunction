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
