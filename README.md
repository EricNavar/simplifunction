

# SimpliFunction  

SimpliFunction is a cool and epic solution for writing calculations in Excel without needing to know the stupid Visual Basic syntax.

## What's changed since the last report

- I added support for more excel functions, including the more popular ones.
- What you're supposed to copy is more obvious. The output is highlighted temporarily so that it's visible. There is also now a copy button next to the output
- The website is now much faster, with respect to generating output and also typing/backspacing in the input field
- It's more obvious how to clear the input because I added an X button in the field
- Input validation for like half of the functions is broken at the moment
- visual changes

## Theme

https://coolors.co/f2dfd7-fef9ff-d4c1ec-9f9fed-736ced

## Files

- **assets/ directory**
	- any icons and images

- **buttons/**
	- This contains components for the buttons on the website. They contain the logic to when clicked spawn the correct dialog and pass props to it

	- **BasicButtons.tsx**
		- Buttons for the 4 basic functions and parentheses.
		- On mobile, it adds buttons for the 10 digits, a backspace, and a decimal point

	- **FunctionButtonsWrapper.tsx**
		- Contains the search bar and filters functions to pass to FunctionButtons
		- Will render the accordion if it's on mobile. 

	- **FunctionButtonsAccordion.tsx**
		- Puts the content from FunctionButtonsWrapper into an accordion for mobile

	- **FunctionButtons.tsx**
		- This contains the grid to display the individual buttons

	- **FunctionButton.tsx**
		- This is a general button, and more specific button components will be a wrapper around this component

- **util/**
	- **parser.ts**
		- parses the user input and creates valid Visual Basic for Applications code
	- **validator.ts**
		- The forms components use this file to validate the fields

- **functions.ts**

	- This is the data for all the functions. It's a list where each entry contains the data for an excel function including, but not limited to the following data
		- common name
		- parameters
		- data types
		- documentation link
- **MyDialog.tsx**
	- This is the website's dialog. A form can be passed into it
- **UserInput.tsx**
	- This is the input text field at the top of the website
- **Calculator.tsx**
	- The starting point of the website
- **commonTypes.ts**
	- Common types that are reused
## Other tools like this

- https://calcforme.com/loan-calculator
