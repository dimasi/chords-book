import { IFormFieldProps } from './types';
import {
  FormFieldControlStyled,
  FormFieldErrorMessageStyled,
  FormFieldLabelStyled,
  FormFieldStyled,
  FormFieldWrapperStyled,
} from './styled';

export const FormField = ({ children, errorMessage, label }: IFormFieldProps) => (
  <FormFieldStyled>
    <FormFieldWrapperStyled>
      {label ? <FormFieldLabelStyled>{label}</FormFieldLabelStyled> : null}
      <FormFieldControlStyled>{children}</FormFieldControlStyled>
    </FormFieldWrapperStyled>
    {errorMessage ? <FormFieldErrorMessageStyled>{errorMessage}</FormFieldErrorMessageStyled> : null}
  </FormFieldStyled>
);
