import React from 'react';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel
} from '@mui/material';
import { ClearIcon } from './assets/ClearIcon';

type UserInputProps = {
  setUserInput: (input: string) => void,
  setInputRef: (ref: HTMLInputElement | null) => void,
}

function UserInput(props: UserInputProps):JSX.Element {
  const { setUserInput, setInputRef } = props;
  function onType(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }
  function clearInput() {
    setUserInput('');
  }
  return (
    <FormControl variant="filled" style={{ width: '100%' }}>
      <InputLabel shrink>Your input</InputLabel>
      <FilledInput
        style={{ width: 'max-content' }}
        onChange={onType}
        inputRef={ref => { setInputRef(ref); }}
        fullWidth
        type="text"
        endAdornment={
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

export { UserInput };
