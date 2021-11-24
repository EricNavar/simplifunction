import { ExcelFunction, ExcelFunctionCategory, ParameterType, ParameterFormat } from './commonTypes';

const dummyFunction: ExcelFunction = {
  commonName: "",
  syntacticalName: "",
  description: "",
  category: ExcelFunctionCategory.Dummy,
  parameterFormat: ParameterFormat.SINGLE,
  parameterType: ParameterType.number,
  documentationLink: ''
};

const functions: Array<ExcelFunction> = [
  // ==== Math ====
  { // add IMSUM
    commonName: "Summation",
    syntacticalName: "SUM",
    description: "Use this function to add the values in cells.",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89'
  },
  { // add IMPOWER
    commonName: "Power",
    syntacticalName: "POWER",
    description: "Returns the result of a number raised to a power",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/power-function-d3f2908b-56f4-4c3f-895a-07fb519c362a',
    parameterSchema: [
      {
        name: "Base",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Exponent",
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: "Minimum",
    syntacticalName: "MIN",
    description: "Returns the minimum value in a list of arguments",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152'
  },
  {
    commonName: "Maximum",
    syntacticalName: "MAX",
    description: "Returns the maximum value in a list of arguments",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098'
  },
  {
    commonName: "Geometric mean",
    commonNameNoSpaces: "Geometric_mean",
    syntacticalName: "GEOMEAN",
    description: "Returns the geometric mean",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/geomean-function-db1ac48d-25a5-40a0-ab83-0b38980e40d5'
  },
  {
    commonName: "Absolute value",
    commonNameNoSpaces: "Absolute_value",
    syntacticalName: "ABS",
    description: "Returns the absolute value of a number",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c'
  },
  {
    commonName: "Round up",
    commonNameNoSpaces: "Round_up",
    syntacticalName: "CEILING",
    description: "Rounds a number to the nearest integer or to the nearest multiple of significance",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/ceiling-function-0a5cd7c8-0720-4f0a-bd2c-c943e510899f',
    parameterSchema: [
      {
        name: "number to round",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Significant decimals",
        helperText: "The number of digits to which you want to round number",
        type: ParameterType.number,
        required: false
      },
    ]
  },
  {
    commonName: "Round down",
    commonNameNoSpaces: "Round_down",
    syntacticalName: "FLOOR",
    description: "Rounds a number down, toward zero",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/floor-function-14bb497c-24f2-4e04-b327-b0b4de5a8886',
    remarks: [
      "ROUNDUP behaves like ROUND, except that it always rounds a number up.",
      "If num_digits is greater than 0 (zero), then number is rounded up to the specified number of decimal places.",
      "If num_digits is 0, then number is rounded up to the nearest integer.",
      "If num_digits is less than 0, then number is rounded up to the left of the decimal point."
    ],
    parameterSchema: [
      {
        name: "number to round",
        type: ParameterType.number,
        required: true
      },
      {
        name: "step",
        type: ParameterType.number,
        helperText: "The number of digits to which you want to round number",
        required: false
      },
    ]
  },
  {
    commonName: "Square root",
    commonNameNoSpaces: "Square_root",
    syntacticalName: "SQRT",
    description: "Returns a positive square root",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/sqrt-function-654975c2-05c4-4831-9a24-2c65e4040fdf',
  },
  {
    commonName: "Modulo",
    syntacticalName: "MOD",
    description: "Returns the remainder from division",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3',
    parameterSchema: [
      {
        name: "",
        type: ParameterType.number,
        required: true
      },
      {
        name: "",
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: "Log₁₀",
    syntacticalName: "LOG10",
    description: "Returns the base-10 logarithm of a number",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/log10-function-c75b881b-49dd-44fb-b6f4-37e3486a0211',
  },
  {
    commonName: "Log",
    syntacticalName: "LOG",
    description: "Returns the logarithm of a number to a specified base",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/log-function-4e82f196-1ca9-4747-8fb0-6c4a3abb3280',
    parameterSchema: [
      {
        name: "Number",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Base",
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: "Choose random number",
    commonNameNoSpaces: "Choose_random_number",
    syntacticalName: "CHOOSE",
    description: "Use this function to select one of up to 254 values based on the index number. For example, if value1 through value7 are the days of the week, CHOOSE returns one of the days when a number between 1 and 7 is used as index_num.",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/choose-function-fc5c184f-cb62-4ec7-a46e-38653b98f5bc'
  },
  // ==== Trigonometry ====
  {
    commonName: "Sin⁻¹",
    syntacticalName: "ASIN",
    description: "Returns the arcsine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Hyperbolic_Sin⁻¹",
    syntacticalName: "ASINH",
    description: "Returns the arcsine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Sin",
    syntacticalName: "SIN",
    description: "Returns the sine of the given angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Hyperbolic_Sin",
    syntacticalName: "SINH",
    description: "Returns the hyperbolic sine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Cos⁻¹",
    syntacticalName: "ACOS",
    description: "Returns the arccosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3'
  },
  {
    commonName: "Hyperbolic_Cos⁻¹",
    syntacticalName: "ACOSH",
    description: "Returns the hyperbolic arccosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3'
  },
  {
    commonName: "Cos",
    syntacticalName: "COS",
    description: "Returns the cosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },

  {
    commonName: "Cosh",
    syntacticalName: "COSH",
    description: "Returns the hyperbolic cosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Tan⁻¹",
    syntacticalName: "ATAN",
    description: "Returns the arctangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Hyperbolic_Tan⁻¹",
    syntacticalName: "ATANH",
    description: "Returns the hyperbolic arctangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Tan",
    syntacticalName: "TAN",
    description: "Returns the tangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Tanh",
    syntacticalName: "TANH",
    description: "Returns the hyperbolic tangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "Cot⁻¹",
    syntacticalName: "ACOT",
    description: "Returns the cotangent of an angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/acot-function-dc7e5008-fe6b-402e-bdd6-2eea8383d905'
  },
  {
    commonName: "Hyperbolic_Cot⁻¹",
    syntacticalName: "ACOTH",
    description: "Returns the cotangent of an angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/acot-function-dc7e5008-fe6b-402e-bdd6-2eea8383d905'
  },
  {
    commonName: "Cot",
    syntacticalName: "COT",
    description: "Returns the cotangent of an angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/cot-function-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a'
  },
  {
    commonName: "Hyperbolic_Cot",
    syntacticalName: "COTH",
    description: "Returns the cotangent of an angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/cot-function-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a'
  },
  // {
  //   commonName: "Csc",
  //   syntacticalName: "CSC",
  //   description: "Returns the cosecant of an angle",
  //   category: ExcelFunctionCategory.Trigonometry,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.number,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/csc-function-07379361-219a-4398-8675-07ddc4f135c1'
  // },
  // Statistics
  {
    commonName: "Average",
    syntacticalName: "AVERAGE",
    description: "Returns the average of its arguments",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6c',
    remarks: ['Arguments that are error values or text that cannot be translated into numbers cause errors.']
  },
  {
    commonName: "Median",
    syntacticalName: "MEDIAN",
    description: "Returns the median of the given numbers",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/median-function-d0916313-4753-414c-8537-ce85bdd967d2'
  },
  {
    commonName: "Normal distribution",
    commonNameNoSpaces: "Normal distribution",
    syntacticalName: "NORMDIST",
    description: "Returns the normal cumulative distribution",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/normdist-function-126db625-c53e-4591-9a22-c9ff422d6d58',
    parameterSchema: [
      {
        name: "X",
        helperText: "The value for which you want the distribution.",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Mean",
        type: ParameterType.number,
        required: false
      },
      {
        name: "Standard dev",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Cumulative",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: "Harmonic mean",
    commonNameNoSpaces: "Harmonic_mean",
    syntacticalName: "HARMEAN",
    description: "Returns the harmonic mean",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/harmean-function-5efd9184-fab5-42f9-b1d3-57883a1d3bc6'
  },
  {
    commonName: "Standard deviation",
    commonNameNoSpaces: "Standard_deviation",
    syntacticalName: "STDEV",
    description: "Estimates standard deviation based on a sample",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    remarks: [
      "STDEV assumes that its arguments are a sample of the population. If your data represents the entire population, then compute the standard deviation using STDEVP.",
      "The standard deviation is calculated using the \"n-1\" method."
    ],
    documentationLink: 'https://support.microsoft.com/en-us/office/stdev-function-51fecaaa-231e-4bbb-9230-33650a72c9b0'
  },
  {
    commonName: "Binomial distribution",
    commonNameNoSpaces: "Binomial_distribution",
    syntacticalName: "BINOMDIST",
    description: "Returns the individual term binomial distribution probability",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/binomdist-function-506a663e-c4ca-428d-b9a8-05583d68789c'
  },
  {
    commonName: "Mode",
    syntacticalName: "MODE.SNGL",
    description: "Returns the most common value in a data set",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/mode-sngl-function-f1267c16-66c6-4386-959f-8fba5f8bb7f8'
  },
  // Bitwise operations
  {
    commonName: "Left shift",
    commonNameNoSpaces: "Left_shift",
    syntacticalName: "BITLSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitlshift-function-c55bb27e-cacd-4c7c-b258-d80861a03c9c',
    parameterSchema: [
      {
        name: "Number",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Places to shift",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: "Right shift",
    commonNameNoSpaces: "Right_shift",
    syntacticalName: "BITRSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitrshift-function-274d6996-f42c-4743-abdb-4ff95351222c',
    parameterSchema: [
      {
        name: "Number",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Places to shift",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise OR",
    commonNameNoSpaces: "Bitwise_OR",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise OR of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: "Operand 1",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Operand 2",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise AND",
    commonNameNoSpaces: "Bitwise_AND",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise AND of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: "Operand 1",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Operand 2",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise XOR",
    commonNameNoSpaces: "Bitwise_XOR",
    syntacticalName: "BITXOR",
    description: "Returns a Bitwise AND of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: "Operand 1",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Operand 2",
        type: ParameterType.number,
        required: true
      }
    ]
  },
  // ==== Conversion ====
  {
    commonName: "Binary to octal",
    commonNameNoSpaces: "binary_to_octal",
    syntacticalName: "BIN2OCT",
    description: "Converts a binary number to octal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "binary to decimal",
    commonNameNoSpaces: "binary_to_decimal",
    syntacticalName: "BIN2DEC",
    description: "Converts a binary number to decimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/dec2bin-function-0f63dd0e-5d1a-42d8-b511-5bf5c6d43838'
  },
  {
    commonName: "binary to hexcadecimal",
    commonNameNoSpaces: "binary_to_hexcadecimal",
    syntacticalName: "BIN2HEX",
    description: "Converts a binary number to hexadecimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "octal to bin",
    commonNameNoSpaces: "octal_to_bin",
    syntacticalName: "OCT2BIN",
    description: "Converts an octal number to binary",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "octal to decimal",
    commonNameNoSpaces: "octal_to_decimal",
    syntacticalName: "OCT2DEC",
    description: "Converts an octal number to decimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/dec2bin-function-0f63dd0e-5d1a-42d8-b511-5bf5c6d43838'
  },
  {
    commonName: "octal to hexcadecimal",
    commonNameNoSpaces: "octal_to_hexcadecimal",
    syntacticalName: "OCT2HEX",
    description: "Converts an octal number to hexadecimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "hexadecimal to binary",
    syntacticalName: "HEX2BIN",
    description: "Converts a hexadecimal number to binary",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  {
    commonName: "hexadecimal to octal",
    commonNameNoSpaces: "hexadecimal_to_octal",
    syntacticalName: "HEX2OCT",
    description: "Converts a hexadecimal number to octal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/dec2bin-function-0f63dd0e-5d1a-42d8-b511-5bf5c6d43838'
  },
  {
    commonName: "hexadecimal to decimal",
    commonNameNoSpaces: "hexadecimal_to_decimal",
    syntacticalName: "HEX2DEC",
    description: "Converts a hexadecimal number to decimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
  },
  // ==== Text ====
  // {
  //   commonName: "Text concatenation",
  //   syntacticalName: "CONCAT",
  //   description: "Combines the Text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.N,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d',
  //   parameterSchema: [
  //     {
  //       name: "Text 1",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //     {
  //       name: "Text 2",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //   ]
  // },
  // {
  //   commonName: "Text Substitution",
  //   syntacticalName: "SUBSTITUTE",
  //   description: "Substitutes new text for old text in a text string",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.N,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332',
  //   parameterSchema: [
  //     {
  //       name: "Text",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //     {
  //       name: "Old text",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //     {
  //       name: "New text",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //   ]
  // },
  // {
  //   commonName: "To lowercase",
  //   syntacticalName: "LOWER",
  //   description: "Converts Text to lowercase",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4'
  // },
  // {
  //   commonName: "To uppercase",
  //   syntacticalName: "UPPER",
  //   description: "Converts Text to uppercase",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6',
  // },
  // {
  //   commonName: "Trim",
  //   syntacticalName: "TRIM",
  //   description: "Removes spaces from text",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9',
  // },
  // {
  //   commonName: "Price format",
  //   syntacticalName: "DOLLAR",
  //   description: "Converts a number to Text, using the $ (dollar) currency format",
  //   category: ExcelFunctionCategory.Text,
  //   parameterFormat: ParameterFormat.N,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/dollar-function-a6cd05d9-9740-4ad3-a469-8109d18ff611',
  //   remarks: ['Generally, you should use the Format Cells dialog (Ctrl+1) or Home > Number > Accounting Number Format option to apply a currency formatting to a cell. This is because the DOLLAR function returns the number provided as text. Numbers stored as text are a common cause of spreadsheet errors, because many functions ignore them, such as SUM, AVERAGE, MIN, MAX, etc.'],
  //   parameterSchema: [
  //     {
  //       name: "Number",
  //       type: ParameterType.number,
  //       required: true
  //     },
  //     {
  //       name: "Decimals",
  //       helperText: "The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.",
  //       type: ParameterType.number,
  //       required: true
  //     },
  //   ]
  // },
  // // ==== Date ====
  // {
  //   commonName: "Date",
  //   syntacticalName: "DATE",
  //   description: "",
  //   category: ExcelFunctionCategory.Date,
  //   parameterFormat: ParameterFormat.N,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/date-function-e36c0c8c-4104-49da-ab83-82328b832349',
  //   parameterSchema: [
  //     {
  //       name: "Year",
  //       helperText: "4 digits",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //     {
  //       name: "Month",
  //       type: ParameterType.string,
  //       required: true
  //     },
  //     {
  //       name: "Day",
  //       type: ParameterType.string,
  //       required: true
  //     }
  //   ]
  // },
  // // ==== LOOKUP AND REFERENCE ====
  // {
  //   commonName: "Sort",
  //   syntacticalName: "SORT",
  //   description: "Sorts the contents of a range or array",
  //   category: ExcelFunctionCategory.Lookup,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/sort-function-22f63bd0-ccc8-492f-953d-c20e8e44b86c'
  // },
  // // ==== WEB ====
  // {
  //   commonName: "Use web service",
  //   syntacticalName: "WEBSERVICE",
  //   description: "Returns data from a web service",
  //   category: ExcelFunctionCategory.Web,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/webservice-function-0546a35a-ecc6-4739-aed7-c0b7ce1562c4'
  // },
  // {
  //   commonName: "Filter XML",
  //   syntacticalName: "FILTERXML",
  //   description: "Returns specific data from the XML content by using the specified XPath",
  //   category: ExcelFunctionCategory.Web,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/filterxml-function-4df72efc-11ec-4951-86f5-c1374812f5b7'
  // },
  // {
  //   commonName: "Encode string as URL",
  //   syntacticalName: "ENCODEURL",
  //   description: "Returns specific data ",
  //   category: ExcelFunctionCategory.Web,
  //   parameterFormat: ParameterFormat.SINGLE,
  //   parameterType: ParameterType.string,
  //   documentationLink: 'https://support.microsoft.com/en-us/office/encodeurl-function-07c7fb90-7c60-4bff-8687-fac50fe33d0e'
  // }
]

const trigonometricFunctions: Array<Array<Array<string>>> = [
  [
    ["SIN", "COS", "TAN", "COT"],
    ["ASIN", "ACOS", "ATAN", "ACOT"],
  ],
  [
    ["SINH", "COSH", "TANH", "COTH"],
    ["ASINH", "ACOSH", "ATANH", "ACOTH"],
  ]
];

export { dummyFunction, functions, trigonometricFunctions };

//sin    asin     sinh    asinh
//cos    acos     cosh    acosh
//tan    atan     tanh    atahnh
//cot    acot     coth    acoth
//csc             csch           
//sec             sech