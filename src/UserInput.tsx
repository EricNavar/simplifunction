import React from 'react';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import { ClearIcon } from './assets/ClearIcon';

type UserInputProps = {
  setUserInput: (input: string) => void,
  setInputRef: (ref: HTMLInputElement | null) => void,
  userInput: string
}

function UserInput(props: UserInputProps) {
  const { setUserInput, setInputRef, userInput } = props;
  function onType(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  };
  function clearInput() {
    setUserInput('');
  }
  return (
    <FormControl variant="filled">
      <FilledInput
        value={userInput}
        onChange={onType}
        inputRef={ref => { setInputRef(ref); }}
        fullWidth
        type="text"
        placeholder="Enter your calculation"
        endAdornment={userInput === "" ? <></> :
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={clearInput}
              edge="end"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export { UserInput }
