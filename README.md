

# SimpliFunction  

SimpliFunction is a cool and epic solution for writing calculations in Excel without needing to know the stupid Visual Basic syntax.

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
## About React

### `yarn start`
  

Runs the app in the development mode.


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
