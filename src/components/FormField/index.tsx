import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores/rootStoreContext';
import {
  FormFieldControlStyled,
  FormFieldErrorMessageStyled,
  FormFieldLabelStyled,
  FormFieldStyled,
  FormFieldWrapperStyled,
} from './styled';
import { IFormFieldProps } from './types';

export const FormField = observer(({ children, errorMessage, label }: IFormFieldProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <FormFieldStyled>
      <FormFieldWrapperStyled>
        {label ? <FormFieldLabelStyled theme={theme}>{label}</FormFieldLabelStyled> : null}
        <FormFieldControlStyled>{children}</FormFieldControlStyled>
      </FormFieldWrapperStyled>
      {errorMessage ? <FormFieldErrorMessageStyled>{errorMessage}</FormFieldErrorMessageStyled> : null}
    </FormFieldStyled>
  );
});
