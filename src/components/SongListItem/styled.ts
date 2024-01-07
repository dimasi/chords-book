import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';

export const SongListItemStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  height: 75px;
  padding: 0 5px 0 15px;
  margin: 0 0 10px;
  box-shadow: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemBoxShadow};
  border: 1px solid ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemBorderColor};
  cursor: pointer;
`;

export const SongListItemTitleStyled = styled.div`
  flex: 0 0 auto;
`;

export const SongListItemNameStyled = styled(Highlighter)<IStyledWithThemeProps>`
  display: block;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemNameColor};
  font-weight: 700;
`;

export const SongListItemAuthorStyled = styled(Highlighter)<IStyledWithThemeProps>`
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemNameColor};
`;

export const SongListItemChordsStyled = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px 0 auto;
`;

export const SongListItemChordContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 55px;
  position: relative;
`;

export const SongListItemChordsMoreStyled = styled.div<IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemChordsMoreColor};
  font-size: 20px;
  font-weight: 700;
`;

export const SongListItemSpacerStyled = styled.div<IStyledWithThemeProps>`
  width: 3px;
  height: 42px;
  border: 1px solid ${(props: IStyledWithThemeProps) => themeConstants[props.theme].songListItemSpacerBorderColor};
`;
