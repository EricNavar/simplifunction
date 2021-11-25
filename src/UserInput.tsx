import React from 'react';
import {
  FormControl,
  FilledInput,
} from '@mui/material';

type UserInputProps = {
  setUserInput: (input:string) => void,
  setInputRef: (ref:HTMLInputElement|null) => void,
  userInput: string
}

function UserInput(props: UserInputProps) {
  const { setUserInput, setInputRef, userInput } = props;
    function onType(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  };
  return (
    <FormControl variant="filled">
      <FilledInput
        value={userInput}
        onChange={onType}
        inputRef={ref => { setInputRef(ref); }}
        fullWidth
        type="text"
        placeholder="Enter your calculation"
      />
    </FormControl>
  );
}

export { UserInput }
