const functionTypes = [
  "Math",
  "Trigonometry",
  "Statistics",
  "Engineering",
  "Text",
  "Date"
];

const functions = [
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
    n: 2,
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
  {
    commonName: "Binary to decimal",
    syntacticalName: "BIN2DEC",
    description: "Converts a binary number to decimal",
    type: "Engineering",
    parameterType: "single"
  },
  {
    commonName: "Decimal to binary",
    syntacticalName: "DEC2BIN",
    description: "Converts a decimal number to binary",
    type: "Engineering",
    parameterType: "single"
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
]

export { functions, functionTypes };
