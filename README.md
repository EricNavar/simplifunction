
# SimpliFunction

SimpliFunction is a cool and epic solution for writing calculations in Excel without needing to know the stupid Visual Basic syntax.

## Files
- assets directory
	- any icons and images
- FunctionButtons directory
	- This contains components for the buttons on the website. They contain the logic to when clicked spawn the correct dialog and pass props to it
	- FunctionButtons.ts
		- This contains the grid to display the individual buttons, and on mobile, it's all enclosed in a collapsible accordion.
	- FunctionButton.ts
		- This is a general button, and more specific button components will be a wrapper around this component
	- ConversionButton.tsx
		- spawns ConversionForm.tsx
	- ListParameteredFunctionButton.tsx
		- spawns ListParameterForm.tsx
	- NParameteredFunctionButton.tsx
		- spawns NParameteredForm.tsx
	- SingleParameterFunctionButton.tsx
		- spawns SingleParameterFunctionButton.tsx
- functions.ts
	- This is the data for all the functions. It's a list where each entry contains the data for an excel function including the following data
	- common name
	- syntactical name
	- parameters
	- data types
	- documentation link
	

## About React

  

### `yarn start`

  

Runs the app in the development mode.\

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
