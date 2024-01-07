import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInputStyled = styled.input<IStyledWithThemeProps>`
  flex: 1 0 auto;
  min-width: 0;
  border: 0 none;
  background: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].searchInputBackground};
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].searchInputColor};
  &:hover,
  &:focus {
    outline: 0 none;
  }
`;
