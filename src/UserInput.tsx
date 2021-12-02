import React from 'react';
import {
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel
} from '@mui/material';
import { ClearIcon } from './assets/ClearIcon';
import { CopyIcon } from './assets/CopyIcon';
import toast, { Toaster } from 'react-hot-toast';

type UserInputProps = {
  setUserInput: (input: string) => void,
  inputRef: HTMLInputElement | null,
  setInputRef: (ref: HTMLInputElement | null) => void,
}

function UserInput(props: UserInputProps):JSX.Element {
  const { setUserInput, inputRef, setInputRef } = props;
  function onType(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }
  function clearInput() {
    setUserInput('');
  }
  function copyInput() {
    let notify: () => void;
    if (inputRef) {
      navigator.clipboard.writeText(inputRef.value);
      notify = () => toast.success('Copied to clipboard!');
    } else {
      notify = () => toast.error('unable to copy to clipboard');
    }
    notify();
  }
  return (
    <FormControl variant="filled" style={{ width: '100%' }}>
      <InputLabel shrink>Your input</InputLabel>
      <FilledInput
        style={{ width: '100%' }}
        onChange={onType}
        inputRef={ref => { setInputRef(ref); }}
        fullWidth
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="clear input"
              onClick={clearInput}
              edge="end"
            >
              <ClearIcon />
            </IconButton>
            <IconButton
              aria-label="copy to clipboard"
              onClick={copyInput}
              edge="end"
            >
              <CopyIcon />
              <Toaster />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export { UserInput };
