import { ExcelFunction, ExcelFunctionCategory, ParameterType, ParameterFormat } from './commonTypes';

/* functions to add
- all the web functions
- concatenate
- subsitute
- trim
- csc
- cot
- cos
- pi
- degrees to radians
- radians to degrees
- random (choose)
- today
*/

const functions:Array<ExcelFunction> = [
  // ==== Math ====
  {
    commonName: "Summation",
    syntacticalName: "SUM",
    description: "Use this function to add the values in cells.",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Geometric mean",
    syntacticalName: "GEOMEAN",
    description: "Returns the geometric mean",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Minimum",
    syntacticalName: "MIN",
    description: "Returns the minimum value in a list of arguments",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Maximum",
    syntacticalName: "MAX",
    description: "Returns the maximum value in a list of arguments",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Absolute value",
    syntacticalName: "ABS",
    description: "Returns the absolute value of a number",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Round up",
    syntacticalName: "CEILING",
    description: "Rounds a number to the nearest integer or to the nearest multiple of significance",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: "number to round",
        type: ParameterType.number,
        required: true
      },
      {
        name: "step",
        type: ParameterType.number,
        required: false
      },
    ]
  },
  {
    commonName: "Power",
    syntacticalName: "POWER",
    description: "Returns the result of a number raised to a power",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
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
    commonName: "Square root",
    syntacticalName: "SQRT",
    description: "Returns a positive square root",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Choose random number",
    syntacticalName: "CHOOSE",
    description: "Use this function to select one of up to 254 values based on the index number. For example, if value1 through value7 are the days of the week, CHOOSE returns one of the days when a number between 1 and 7 is used as index_num.",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Log₁₀",
    syntacticalName: "LOG10",
    description: "Returns the base-10 logarithm of a number",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Log",
    syntacticalName: "LOG",
    description: "Returns the logarithm of a number to a specified base",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
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
    commonName: "Round down",
    syntacticalName: "FLOOR",
    description: "Rounds a number down, toward zero",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: "number to round",
        type: ParameterType.number,
        required: true
      },
      {
        name: "step",
        type: ParameterType.number,
        required: false
      },
    ]
  },
  {
    commonName: "Modulo",
    syntacticalName: "MOD",
    description: "Returns the remainder from division",
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
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
  // ==== Trigonometry ====
  {
    commonName: "Sin",
    syntacticalName: "SIN",
    description: "Returns the sine of the given angle",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Cos",
    syntacticalName: "COS",
    description: "Returns the cosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Tan",
    syntacticalName: "TAN",
    description: "Returns the tangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Sin⁻¹",
    syntacticalName: "ASIN",
    description: "Returns the arcsine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Cos⁻¹",
    syntacticalName: "ACOS",
    description: "Returns the arccosine of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Tan⁻¹",
    syntacticalName: "ATAN",
    description: "Returns the arctangent of a number",
    category: ExcelFunctionCategory.Trigonometry,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  // Statistics
  {
    commonName: "Normal distribution",
    syntacticalName: "NORM.DIST",
    description: "Returns the normal cumulative distribution",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.N,
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
    commonName: "Average",
    syntacticalName: "AVG",
    description: "Returns the average of its arguments",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Harmonic mean",
    syntacticalName: "HARMEAN",
    description: "Returns the harmonic mean",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Median",
    syntacticalName: "MEDIAN",
    description: "Returns the median of the given numbers",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Mode",
    syntacticalName: "MODE",
    description: "Returns the most common value in a data set",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Standard deviation",
    syntacticalName: "STDEV",
    description: "Estimates standard deviation based on a sample",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Binomial distribution",
    syntacticalName: "BINOM.DIST",
    description: "Returns the individual term binomial distribution probability",
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
  // Bitwise operations
  {
    commonName: "Left shift",
    syntacticalName: "BITLSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    syntacticalName: "BITRSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    syntacticalName: "BITOR",
    description: "Returns a Bitwise OR of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    commonName: "Bitwise OR",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise OR of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    syntacticalName: "BITOR",
    description: "Returns a Bitwise AND of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    syntacticalName: "BITXOR",
    description: "Returns a Bitwise AND of 2 numbers",
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
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
    commonName: "Binary to decimal",
    syntacticalName: "BIN2DEC",
    description: "Converts a binary number to decimal",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number
  },
  {
    commonName: "Decimal to binary",
    syntacticalName: "DEC2BIN",
    description: "Converts a decimal number to binary",
    category: ExcelFunctionCategory.Conversion,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  // ==== Text ====
  {
    commonName: "Text concatenation",
    syntacticalName: "CONCAT",
    description: "Combines the Text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.",
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: "Number",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Decimals",
        helperText: "The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.",
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: "To lowercase",
    syntacticalName: "LOWER",
    description: "Converts Text to lowercase",
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "To uppercase",
    syntacticalName: "UPPER",
    description: "Converts Text to uppercase",
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.SINGLE,
    parameterType: ParameterType.number,
  },
  {
    commonName: "Price format",
    syntacticalName: "DOLLAR",
    description: "Converts a number to Text, using the $ (dollar) currency format",
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: "Number",
        type: ParameterType.number,
        required: true
      },
      {
        name: "Decimals",
        helperText: "The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.",
        type: ParameterType.number,
        required: true
      },
    ]
  },
  // ==== Date ====
  {
    commonName: "Date",
    syntacticalName: "DATE",
    description: "",
    category: ExcelFunctionCategory.Date,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: "Year",
        helperText: "4 digits",
        type: ParameterType.string,
        required: true
      },
      {
        name: "Month",
        type: ParameterType.string,
        required: true
      },
      {
        name: "Day",
        type: ParameterType.string,
        required: true
      }
    ]
  },
  // ==== LOOKUP AND REFERENCE ====
  {
    commonName: "Sort",
    syntacticalName: "SORT",
    description: "Sorts the contents of a range or array",
    category: ExcelFunctionCategory.Lookup,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
  },
]

export { functions };
