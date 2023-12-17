import { ChangeEventHandler } from 'react';

export interface IInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
