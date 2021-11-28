import { ExcelFunction, ExcelFunctionCategory, ParameterType, ParameterFormat } from './commonTypes';

const conversionFunction = {
  commonName: '',
  description: '',
  category: ExcelFunctionCategory.Math,
  parameterFormat: ParameterFormat.CONVERSION,
  parameterType: ParameterType.number,
  documentationLink: ''
};

const trigonometryFunction = {
  commonName: '',
  description: '',
  category: ExcelFunctionCategory.Math,
  parameterFormat: ParameterFormat.TRIGONOMETRY,
  parameterType: ParameterType.number,
  documentationLink: ''
};

const functionTranslation: Record<string, string> = {
  Summation: 'SUM',
  Power: 'POWER',
  Minimum: 'MIN',
  Maximum: 'MAX',
  Geometric_mean: 'GEOMEAN',
  Absolute_value: 'ABS',
  Round_up: 'CEILING',
  Round_down: 'FLOOR',
  Square_root: 'SQRT',
  Modulo: 'MOD',
  'Log₁₀': 'LOG10',
  Log: 'LOG',
  Choose_random_number: 'CHOOSE',

  'Hyperbolic_Sin⁻¹': 'ASINH',
  Hyperbolic_Sin: 'SINH',
  'Sin⁻¹': 'ASIN',
  Sin: 'SIN',

  'Hyperbolic_Tan⁻¹': 'ATANH',
  Hyperbolic_Tan: 'TANH',
  'Tan⁻¹': 'ATAN',
  Tan: 'TAN',

  'Hyperbolic_Cos⁻¹': 'ACOSH',
  Hyperbolic_Cos: 'COSH',
  'Cos⁻¹': 'ACOS',
  Cos: 'COS',

  'Hyperbolic_Cot⁻¹': 'ACOTH',
  Hyperbolic_Cot: 'COTH',
  'Cot⁻¹': 'ACOT',
  Cot: 'COT',

  Average: 'AVERAGE',
  Median: 'MEDIAN',
  Normal_distribution: 'NORMDIST',
  Harmonic_mean: 'HARMEAN',
  Standard_deviation: 'STDEV',
  Binomial_distribution: 'BINOMDIST',
  Mode: 'MODE.SNGL',
  Left_shift: 'BITLSHIFT',
  Right_shift: 'BITRSHIFT',
  Bitwise_OR: 'BITOR',
  Bitwise_AND: 'BITAND',
  Bitwise_XOR: 'BITXOR',

  Text_concatenation: 'CONCAT',
  Text_Substitution: 'SUBSTITUTE',
  To_lowercase: 'LOWER',
  To_uppercase: 'UPPER',
  Trim: 'TRIM',
  Price_format: 'DOLLAR',
  Sort: 'SORT',
  Index: 'INDEX'
};

const functions: Array<ExcelFunction> = [
  // ==== Math ====
  { // add IMSUM
    commonName: 'Summation',
    description: 'Use this function to add the values in cells.',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89'
  },
  { // add IMPOWER
    commonName: 'Power',
    description: 'Returns the result of a number raised to a power',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/power-function-d3f2908b-56f4-4c3f-895a-07fb519c362a',
    parameterSchema: [
      {
        name: 'Base',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Exponent',
        type: ParameterType.number,
        required: true
      },
    ]
  },
  { // DMIN
    commonName: 'Minimum',
    description: 'Returns the minimum value in a list of arguments',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152',
  },
  {
    commonName: 'Maximum',
    description: 'Returns the maximum value in a list of arguments',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098'
  },
  {
    commonName: 'Geometric mean',
    description: 'Returns the geometric mean',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/geomean-function-db1ac48d-25a5-40a0-ab83-0b38980e40d5'
  },
  { //IMABS
    commonName: 'Absolute value',
    description: 'Returns the absolute value of a number',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c',
    parameterSchema: [
      {
        name: 'Number or cell',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Round up',
    description: 'Rounds a number to the nearest integer or to the nearest multiple of significance',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/ceiling-function-0a5cd7c8-0720-4f0a-bd2c-c943e510899f',
    parameterSchema: [
      {
        name: 'number to round',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Significant decimals',
        helperText: 'The number of digits to which you want to round number',
        type: ParameterType.number,
        required: false
      },
    ]
  },
  {
    commonName: 'Round down',
    description: 'Rounds a number down, toward zero',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/floor-function-14bb497c-24f2-4e04-b327-b0b4de5a8886',
    remarks: [
      'ROUNDUP behaves like ROUND, except that it always rounds a number up.',
      'If num_digits is greater than 0 (zero), then number is rounded up to the specified number of decimal places.',
      'If num_digits is 0, then number is rounded up to the nearest integer.',
      'If num_digits is less than 0, then number is rounded up to the left of the decimal point.'
    ],
    parameterSchema: [
      {
        name: 'number to round',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'step',
        type: ParameterType.number,
        helperText: 'The number of digits to which you want to round number',
        required: false
      },
    ]
  },
  { // IMSQRT
    commonName: 'Square root',
    description: 'Returns a positive square root',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'Number or cell',
        type: ParameterType.number,
        required: true
      }
    ],
    documentationLink: 'https://support.microsoft.com/en-us/office/sqrt-function-654975c2-05c4-4831-9a24-2c65e4040fdf',
  },
  {
    commonName: 'Modulo',
    description: 'Returns the remainder from division',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3',
    parameterSchema: [
      {
        name: '',
        type: ParameterType.number,
        required: true
      },
      {
        name: '',
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: 'Log₁₀',
    description: 'Returns the base-10 logarithm of a number',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'Number or cell',
        type: ParameterType.number,
        required: true
      }
    ],
    documentationLink: 'https://support.microsoft.com/en-us/office/log10-function-c75b881b-49dd-44fb-b6f4-37e3486a0211',
  },
  {
    commonName: 'Log',
    description: 'Returns the logarithm of a number to a specified base',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/log-function-4e82f196-1ca9-4747-8fb0-6c4a3abb3280',
    parameterSchema: [
      {
        name: 'Number',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Base',
        type: ParameterType.number,
        required: true
      },
    ]
  },
  {
    commonName: 'Choose random number',
    description: 'Use this function to select one of up to 254 values based on the index number. For example, if value1 through value7 are the days of the week, CHOOSE returns one of the days when a number between 1 and 7 is used as index_num.',
    category: ExcelFunctionCategory.Math,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'Number or cell',
        type: ParameterType.number,
        required: true
      }
    ],
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/choose-function-fc5c184f-cb62-4ec7-a46e-38653b98f5bc'
  },
  // Statistics
  {
    commonName: 'Average',
    description: 'Returns the average of its arguments',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6c',
    remarks: ['Arguments that are error values or text that cannot be translated into numbers cause errors.']
  },
  {
    commonName: 'Median',
    description: 'Returns the median of the given numbers',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/median-function-d0916313-4753-414c-8537-ce85bdd967d2'
  },
  {
    commonName: 'Normal distribution',
    description: 'Returns the normal cumulative distribution',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/normdist-function-126db625-c53e-4591-9a22-c9ff422d6d58',
    parameterSchema: [
      {
        name: 'X',
        helperText: 'The value for which you want the distribution.',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Mean',
        type: ParameterType.number,
        required: false
      },
      {
        name: 'Standard dev',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Cumulative',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Harmonic mean',
    description: 'Returns the harmonic mean',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/harmean-function-5efd9184-fab5-42f9-b1d3-57883a1d3bc6'
  },
  {
    commonName: 'Standard deviation',
    description: 'Estimates standard deviation based on a sample',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    remarks: [
      'STDEV assumes that its arguments are a sample of the population. If your data represents the entire population, then compute the standard deviation using STDEVP.',
      'The standard deviation is calculated using the "n-1" method.'
    ],
    documentationLink: 'https://support.microsoft.com/en-us/office/stdev-function-51fecaaa-231e-4bbb-9230-33650a72c9b0'
  },
  {
    commonName: 'Binomial distribution',
    description: 'Returns the individual term binomial distribution probability',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/binomdist-function-506a663e-c4ca-428d-b9a8-05583d68789c'
  },
  {
    commonName: 'Mode',
    description: 'Returns the most common value in a data set',
    category: ExcelFunctionCategory.Statistics,
    parameterFormat: ParameterFormat.LIST,
    parameterType: ParameterType.number,
    documentationLink: 'https://support.microsoft.com/en-us/office/mode-sngl-function-f1267c16-66c6-4386-959f-8fba5f8bb7f8'
  },
  // Bitwise operations
  {
    commonName: 'Left shift',
    description: 'Returns a value number shifted left by shift_amount bits',
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitlshift-function-c55bb27e-cacd-4c7c-b258-d80861a03c9c',
    parameterSchema: [
      {
        name: 'Number',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Places to shift',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Right shift',
    description: 'Returns a value number shifted left by shift_amount bits',
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitrshift-function-274d6996-f42c-4743-abdb-4ff95351222c',
    parameterSchema: [
      {
        name: 'Number',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Places to shift',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Bitwise OR',
    description: 'Returns a Bitwise OR of 2 numbers',
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: 'Operand 1',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Operand 2',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Bitwise AND',
    description: 'Returns a Bitwise AND of 2 numbers',
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: 'Operand 1',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Operand 2',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  {
    commonName: 'Bitwise XOR',
    description: 'Returns a Bitwise AND of 2 numbers',
    category: ExcelFunctionCategory.Bitwise,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2',
    parameterSchema: [
      {
        name: 'Operand 1',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Operand 2',
        type: ParameterType.number,
        required: true
      }
    ]
  },
  // ==== Text ====
  {
    commonName: 'Text concatenation',
    description: 'Combines the Text from multiple ranges and/or strings, but it doesn\'t provide the delimiter or IgnoreEmpty arguments.',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d',
    parameterSchema: [
      {
        name: 'Text 1',
        type: ParameterType.string,
        required: true
      },
      {
        name: 'Text 2',
        type: ParameterType.string,
        required: true
      },
    ]
  },
  {
    commonName: 'Text Substitution',
    description: 'Substitutes new text for old text in a text string',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332',
    parameterSchema: [
      {
        name: 'Text',
        type: ParameterType.string,
        required: true
      },
      {
        name: 'Old text',
        type: ParameterType.string,
        required: true
      },
      {
        name: 'New text',
        type: ParameterType.string,
        required: true
      },
    ]
  },
  {
    commonName: 'To lowercase',
    description: 'Converts Text to lowercase',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'String or cell',
        type: ParameterType.string,
        required: true
      }
    ],
    parameterType: ParameterType.string,
    documentationLink: 'https://support.microsoft.com/en-us/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4'
  },
  {
    commonName: 'To uppercase',
    description: 'Converts Text to uppercase',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'String or cell',
        type: ParameterType.string,
        required: true
      }
    ],
    parameterType: ParameterType.string,
    documentationLink: 'https://support.microsoft.com/en-us/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6',
  },
  {
    commonName: 'Trim',
    description: 'Removes spaces from text',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'string or cell',
        type: ParameterType.number,
        required: true
      }
    ],
    parameterType: ParameterType.string,
    documentationLink: 'https://support.microsoft.com/en-us/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9',
  },
  {
    commonName: 'Price format',
    description: 'Converts a number to Text, using the $ (dollar) currency format',
    category: ExcelFunctionCategory.Text,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/dollar-function-a6cd05d9-9740-4ad3-a469-8109d18ff611',
    remarks: ['Generally, you should use the Format Cells dialog (Ctrl+1) or Home > Number > Accounting Number Format option to apply a currency formatting to a cell. This is because the DOLLAR function returns the number provided as text. Numbers stored as text are a common cause of spreadsheet errors, because many functions ignore them, such as SUM, AVERAGE, MIN, MAX, etc.'],
    parameterSchema: [
      {
        name: 'Number',
        type: ParameterType.number,
        required: true
      },
      {
        name: 'Decimals',
        helperText: 'The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.',
        type: ParameterType.number,
        required: true
      },
    ]
  },
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
  // ==== LOOKUP AND REFERENCE ====
  {
    commonName: 'Sort',
    description: 'Sorts the contents of a range or array',
    category: ExcelFunctionCategory.Lookup,
    parameterFormat: ParameterFormat.N,
    parameterSchema: [
      {
        name: 'Number or cell',
        type: ParameterType.string,
        required: true
      }
    ],
    documentationLink: 'https://support.microsoft.com/en-us/office/sort-function-22f63bd0-ccc8-492f-953d-c20e8e44b86c'
  },
  {
    commonName: 'Index',
    description: 'Returns the value of an element in a table or an array, selected by the row and column number indexes. Use the array form if the first argument to INDEX is an array constant.',
    category: ExcelFunctionCategory.Lookup,
    parameterFormat: ParameterFormat.N,
    documentationLink: 'https://support.microsoft.com/en-us/office/date-function-e36c0c8c-4104-49da-ab83-82328b832349',
    parameterSchema: [
      {
        name: 'Array',
        helperText: 'array to search',
        type: ParameterType.range,
        required: true
      },
      {
        name: 'Row',
        type: ParameterType.string,
        helperText: 'column to index',
        required: true
      },
      {
        name: 'Col',
        type: ParameterType.string,
        helperText: 'row to index',
        required: true
      }
    ]
  },
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
];

export { functions, functionTranslation, conversionFunction, trigonometryFunction };

//sin    asin     sinh    asinh
//cos    acos     cosh    acosh
//tan    atan     tanh    atahnh
//cot    acot     coth    acoth
//csc             csch           
//sec             sech