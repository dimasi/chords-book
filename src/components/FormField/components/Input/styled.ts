import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const InputStyled = styled.input<IStyledWithThemeProps>`
  width: 100%;
  height: 36px;
  padding: 0 12px;
  background: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].inputBackground};
  border: 1px solid ${(props: IStyledWithThemeProps) => themeConstants[props.theme].inputBorderColor};
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].inputColor};
  &:focus {
    outline: none;
  }
`;
