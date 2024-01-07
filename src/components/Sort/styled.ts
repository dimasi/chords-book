import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const SortStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 0 auto;
  font-size: 14px;
  white-space: nowrap;
`;

export const SortTitleStyled = styled.div<IStyledWithThemeProps>`
  margin: 0 5px 0 0;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].sortTitleColor};
`;

export const SortItemStyled = styled.div<IStyledWithThemeProps>`
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].sortItemColor};
  cursor: pointer;
`;

export const SortActiveItemStyled = styled(SortItemStyled)<IStyledWithThemeProps>`
  padding: 0 20px 0 0;
  position: relative;
  font-weight: 700;
`;

export const SortActiveItemChevronStyled = styled(SortItemStyled)<IStyledWithThemeProps>`
  position: absolute;
  right: 0;
  top: 0;
  font-weight: 700;
`;
