import { ExcelFunction, ExcelFunctionType, ParameterType } from '../commonTypes';

/* functions to add

all the web functions
concatenate
subsitute
trim
csc
cot
cos
pi
degrees to radians
radians to degrees
random (choose)
today
*/

const functions:Array<ExcelFunction> = [
  // ==== Math ====
  {
    commonName: "Summation",
    syntacticalName: "SUM",
    description: "Use this function to add the values in cells.",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.LIST,
  },
  {
    commonName: "Geometric mean",
    syntacticalName: "GEOMEAN",
    description: "Returns the geometric mean",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.LIST,
  },
  {
    commonName: "Minimum",
    syntacticalName: "MIN",
    description: "Returns the minimum value in a list of arguments",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.LIST,
  },
  {
    commonName: "Maximum",
    syntacticalName: "MAX",
    description: "Returns the maximum value in a list of arguments",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.LIST,
  },
  {
    commonName: "Absolute value",
    syntacticalName: "ABS",
    description: "Returns the absolute value of a number",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.SINGLE,
  },
  {
    commonName: "Round up",
    syntacticalName: "CEILING",
    description: "Rounds a number to the nearest integer or to the nearest multiple of significance",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "number to round",
        required: true
      },
      {
        name: "step",
        required: false
      },
    ]
  },
  {
    commonName: "Power",
    syntacticalName: "POWER",
    description: "Returns the result of a number raised to a power",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Base",
        required: true
      },
      {
        name: "Exponent",
        required: true
      },
    ]
  },
  {
    commonName: "Square root",
    syntacticalName: "SQRT",
    description: "Returns a positive square root",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.SINGLE,
  },
  {
    commonName: "Choose random number",
    syntacticalName: "CHOOSE",
    description: "Use this function to select one of up to 254 values based on the index number. For example, if value1 through value7 are the days of the week, CHOOSE returns one of the days when a number between 1 and 7 is used as index_num.",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.SINGLE,
  },
  {
    commonName: "Log₁₀",
    syntacticalName: "LOG10",
    description: "Returns the base-10 logarithm of a number",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.SINGLE,
  },
  {
    commonName: "Log",
    syntacticalName: "LOG",
    description: "Returns the logarithm of a number to a specified base",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Number",
        required: true
      },
      {
        name: "Base",
        required: true
      },
    ]
  },
  {
    commonName: "Round down",
    syntacticalName: "FLOOR",
    description: "Rounds a number down, toward zero",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "number to round",
        required: true
      },
      {
        name: "step",
        required: false
      },
    ]
  },
  {
    commonName: "Modulo",
    syntacticalName: "MOD",
    description: "Returns the remainder from division",
    type: ExcelFunctionType.Math,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "",
        required: true
      },
      {
        name: "",
        required: true
      },
    ]
  },
  // ==== Trigonometry ====
  {
    commonName: "Sin",
    syntacticalName: "SIN",
    description: "Returns the sine of the given angle",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Cos",
    syntacticalName: "COS",
    description: "Returns the cosine of a number",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Tan",
    syntacticalName: "TAN",
    description: "Returns the tangent of a number",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Sin⁻¹",
    syntacticalName: "ASIN",
    description: "Returns the arcsine of a number",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Cos⁻¹",
    syntacticalName: "ACOS",
    description: "Returns the arccosine of a number",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Tan⁻¹",
    syntacticalName: "ATAN",
    description: "Returns the arctangent of a number",
    type: ExcelFunctionType.Trigonometry,
    parameterType: ParameterType.SINGLE
  },
  // Statistics
  {
    commonName: "Normal distribution",
    syntacticalName: "NORM.DIST",
    description: "Returns the normal cumulative distribution",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "X",
        helperText: "The value for which you want the distribution.",
        required: true
      },
      {
        name: "Mean",
        required: false
      },
      {
        name: "Standard dev",
        required: true
      },
      {
        name: "Cumulative",
        required: true
      }
    ]
  },
  {
    commonName: "Average",
    syntacticalName: "AVG",
    description: "Returns the average of its arguments",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  {
    commonName: "Harmonic mean",
    syntacticalName: "HARMEAN",
    description: "Returns the harmonic mean",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  {
    commonName: "Median",
    syntacticalName: "MEDIAN",
    description: "Returns the median of the given numbers",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  {
    commonName: "Mode",
    syntacticalName: "MODE",
    description: "Returns the most common value in a data set",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  {
    commonName: "Standard deviation",
    syntacticalName: "STDEV",
    description: "Estimates standard deviation based on a sample",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  {
    commonName: "Binomial distribution",
    syntacticalName: "BINOM.DIST",
    description: "Returns the individual term binomial distribution probability",
    type: ExcelFunctionType.Statistics,
    parameterType: ParameterType.LIST
  },
  // Bitwise operations
  {
    commonName: "Left shift",
    syntacticalName: "BITLSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Number",
        required: true
      },
      {
        name: "Places to shift",
        required: true
      }
    ]
  },
  {
    commonName: "Right shift",
    syntacticalName: "BITRSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Number",
        required: true
      },
      {
        name: "Places to shift",
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise OR",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise OR of 2 numbers",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Operand 1",
        required: true
      },
      {
        name: "Operand 2",
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise OR",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise OR of 2 numbers",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Operand 1",
        required: true
      },
      {
        name: "Operand 2",
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise AND",
    syntacticalName: "BITOR",
    description: "Returns a Bitwise AND of 2 numbers",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Operand 1",
        required: true
      },
      {
        name: "Operand 2",
        required: true
      }
    ]
  },
  {
    commonName: "Bitwise XOR",
    syntacticalName: "BITXOR",
    description: "Returns a Bitwise AND of 2 numbers",
    type: ExcelFunctionType.Bitwise,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Operand 1",
        required: true
      },
      {
        name: "Operand 2",
        required: true
      }
    ]
  },
  // ==== Conversion ====
  {
    commonName: "Binary to decimal",
    syntacticalName: "BIN2DEC",
    description: "Converts a binary number to decimal",
    type: ExcelFunctionType.Conversion,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Decimal to binary",
    syntacticalName: "DEC2BIN",
    description: "Converts a decimal number to binary",
    type: ExcelFunctionType.Conversion,
    parameterType: ParameterType.SINGLE
  },
  // ==== Text ====
  {
    commonName: "Text concatenation",
    syntacticalName: "CONCAT",
    description: "Combines the Text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.",
    type: ExcelFunctionType.Text,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Number",
        required: true
      },
      {
        name: "Decimals",
        helperText: "The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.",
        required: true
      },
    ]
  },
  {
    commonName: "To lowercase",
    syntacticalName: "LOWER",
    description: "Converts Text to lowercase",
    type: ExcelFunctionType.Text,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "To uppercase",
    syntacticalName: "UPPER",
    description: "Converts Text to uppercase",
    type: ExcelFunctionType.Text,
    parameterType: ParameterType.SINGLE
  },
  {
    commonName: "Price format",
    syntacticalName: "DOLLAR",
    description: "Converts a number to Text, using the $ (dollar) currency format",
    type: ExcelFunctionType.Text,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Number",
        required: true
      },
      {
        name: "Decimals",
        helperText: "The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.",
        required: true
      },
    ]
  },
  // ==== Date ====
  {
    commonName: "Date",
    syntacticalName: "DATE",
    description: "",
    type: ExcelFunctionType.Date,
    parameterType: ParameterType.N,
    parameterSchema: [
      {
        name: "Year",
        helperText: "4 digits",
        required: true
      },
      {
        name: "Month",
        required: true
      },
      {
        name: "Day",
        required: true
      }
    ]
  },
  // ==== LOOKUP AND REFERENCE ====
  {
    commonName: "Sort",
    syntacticalName: "SORT",
    description: "Sorts the contents of a range or array",
    type: ExcelFunctionType.Lookup,
    parameterType: ParameterType.LIST
  },
]

export { functions };
