import { ReactNode } from 'react';

export interface IFormFieldProps {
  children: ReactNode;
  errorMessage?: string;
  label?: string;
}
