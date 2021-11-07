const functionTypes = [
  "Math",
  "Trigonometry",
  "Statistics",
  "Bitwise",
  "Conversion",
  "Text",
  "Date",
  "Lookup"
];

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

const functions = [
  // ==== MATH ====
  {
    commonName: "Summation",
    syntacticalName: "SUM",
    description: "Use this function to add the values in cells.",
    type: "Math",
    parameterType: "list"
  },
  {
    commonName: "Geometric mean",
    syntacticalName: "GEOMEAN",
    description: "Returns the geometric mean",
    type: "Math",
    parameterType: "list"
  },
  {
    commonName: "Minimum",
    syntacticalName: "MIN",
    description: "Returns the minimum value in a list of arguments",
    type: "Math",
    parameterType: "list"
  },
  {
    commonName: "Maximum",
    syntacticalName: "MAX",
    description: "Returns the maximum value in a list of arguments",
    type: "Math",
    parameterType: "list"
  },
  {
    commonName: "Absolute value",
    syntacticalName: "ABS",
    description: "Returns the absolute value of a number",
    type: "Math",
    parameterType: "single"
  },
  {
    commonName: "Round up",
    syntacticalName: "CEILING",
    description: "Rounds a number to the nearest integer or to the nearest multiple of significance",
    type: "Math",
    parameterType: "n",
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
    type: "Math",
    parameterType: "n",
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
    type: "Math",
    parameterType: "single",
  },
  {
    commonName: "Choose random number",
    syntacticalName: "CHOOSE",
    description: "Use this function to select one of up to 254 values based on the index number. For example, if value1 through value7 are the days of the week, CHOOSE returns one of the days when a number between 1 and 7 is used as index_num.",
    type: "Math",
    parameterType: "single",
  },
  {
    commonName: "Log₁₀",
    syntacticalName: "LOG10",
    description: "Returns the base-10 logarithm of a number",
    type: "Math",
    parameterType: "single",
  },
  {
    commonName: "Log",
    syntacticalName: "LOG",
    description: "Returns the logarithm of a number to a specified base",
    type: "Math",
    parameterType: "n",
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
    type: "Math",
    parameterType: "n",
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
    type: "Math",
    parameterType: "n",
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
    type: "Trigonometry",
    parameterType: "single"
  },
  {
    commonName: "Cos",
    syntacticalName: "COS",
    description: "Returns the cosine of a number",
    type: "Trigonometry",
    parameterType: "single"
  },
  {
    commonName: "Tan",
    syntacticalName: "TAN",
    description: "Returns the tangent of a number",
    type: "Trigonometry",
    parameterType: "single"
  },
  {
    commonName: "Sin⁻¹",
    syntacticalName: "ASIN",
    description: "Returns the arcsine of a number",
    type: "Trigonometry",
    parameterType: "single"
  },
  {
    commonName: "Cos⁻¹",
    syntacticalName: "ACOS",
    description: "Returns the arccosine of a number",
    type: "Trigonometry",
    parameterType: "single"
  },
  {
    commonName: "Tan⁻¹",
    syntacticalName: "ATAN",
    description: "Returns the arctangent of a number",
    type: "Trigonometry",
    parameterType: "single"
  },
  // STATISTICS
  {
    commonName: "Normal distribution",
    syntacticalName: "NORM.DIST",
    description: "Returns the normal cumulative distribution",
    type: "Statistics",
    parameterType: "n",
    parameterSchema: [
      {
        name: "X",
        description: "The value for which you want the distribution.",
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
    type: "Statistics",
    parameterType: "list"
  },
  {
    commonName: "Harmonic mean",
    syntacticalName: "HARMEAN",
    description: "Returns the harmonic mean",
    type: "Statistics",
    parameterType: "list"
  },
  {
    commonName: "Median",
    syntacticalName: "MEDIAN",
    description: "Returns the median of the given numbers",
    type: "Statistics",
    parameterType: "list"
  },
  {
    commonName: "Mode",
    syntacticalName: "MODE",
    description: "Returns the most common value in a data set",
    type: "Statistics",
    parameterType: "list"
  },
  {
    commonName: "Standard deviation",
    syntacticalName: "STDEV",
    description: "Estimates standard deviation based on a sample",
    type: "Statistics",
    parameterType: "list"
  },
  {
    commonName: "Binomial distribution",
    syntacticalName: "BINOM.DIST",
    description: "Returns the individual term binomial distribution probability",
    type: "Statistics",
    parameterType: "list"
  },
  // Bitwise operations
  {
    commonName: "Left shift",
    syntacticalName: "BITLSHIFT",
    description: "Returns a value number shifted left by shift_amount bits",
    type: "Bitwise",
    parameterType: "n",
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
    type: "Bitwise",
    parameterType: "n",
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
    description: "Returns a bitwise OR of 2 numbers",
    type: "Bitwise",
    parameterType: "n",
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
    description: "Returns a bitwise OR of 2 numbers",
    type: "Bitwise",
    parameterType: "n",
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
    description: "Returns a bitwise AND of 2 numbers",
    type: "Bitwise",
    parameterType: "n",
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
    description: "Returns a bitwise AND of 2 numbers",
    type: "Bitwise",
    parameterType: "n",
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
  // ==== CONVERSION ====
  {
    commonName: "Binary to decimal",
    syntacticalName: "BIN2DEC",
    description: "Converts a binary number to decimal",
    type: "Conversion",
    parameterType: "single"
  },
  {
    commonName: "Decimal to binary",
    syntacticalName: "DEC2BIN",
    description: "Converts a decimal number to binary",
    type: "Conversion",
    parameterType: "single"
  },
  // ==== TEXT ====
  {
    commonName: "Text concatenation",
    syntacticalName: "CONCAT",
    description: "Combines the text from multiple ranges and/or strings, but it doesn't provide the delimiter or IgnoreEmpty arguments.",
    type: "Text",
    parameterType: "n",
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
    description: "Converts text to lowercase",
    type: "Text",
    parameterType: "single"
  },
  {
    commonName: "To uppercase",
    syntacticalName: "UPPER",
    description: "Converts text to uppercase",
    type: "Text",
    parameterType: "single"
  },
  {
    commonName: "Price format",
    syntacticalName: "DOLLAR",
    description: "Converts a number to text, using the $ (dollar) currency format",
    type: "Text",
    parameterType: "n",
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
  // ==== DATE ====
  {
    commonName: "Date",
    syntacticalName: "DATE",
    description: "Converts a number to text, using the $ (dollar) currency format",
    type: "Date",
    parameterType: "n",
    parameterSchema: [
      {
        name: "Year",
        description: "4 digits",
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
    type: "Lookup",
    parameterType: "list"
  },
]

export { functions, functionTypes };
