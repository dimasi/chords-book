import { ChangeEventHandler } from 'react';

export interface ISearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
