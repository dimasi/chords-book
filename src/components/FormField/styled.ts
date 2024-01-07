import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const FormFieldStyled = styled.div``;

export const FormFieldWrapperStyled = styled.div``;

export const FormFieldLabelStyled = styled.div<IStyledWithThemeProps>`
  margin: 0 0 5px;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].formFieldLabelColor};
`;

export const FormFieldControlStyled = styled.div``;

export const FormFieldErrorMessageStyled = styled.div``;
