import styled from 'styled-components';
import { themeConstants } from '@/themeConstants';
import { IStyledWithThemeProps } from '@/types';
import { IChordStyledProps } from './types';

export const ChordStyled = styled.div<IChordStyledProps & IStyledWithThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid
    ${(props: IChordStyledProps & IStyledWithThemeProps) =>
      props.$active
        ? themeConstants[props.theme].chordActiveBorderColor
        : themeConstants[props.theme].chordBorderColor};
  box-shadow: ${(props: IChordStyledProps & IStyledWithThemeProps) =>
    props.$active ? themeConstants[props.theme].chordActiveBoxShadow : themeConstants[props.theme].chordBoxShadow};
  background: ${(props: IChordStyledProps & IStyledWithThemeProps) =>
    props.$active
      ? themeConstants[props.theme].chordActiveBackgroundColor
      : themeConstants[props.theme].chordBackgroundColor};
  font-family: Arial, sans-serif;
  text-anchor: middle;
`;

export const ChordSVGStyled = styled.svg`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

export const GuitarChordStyled = styled(ChordStyled)<IStyledWithThemeProps>``;

export const UkuleleChordStyled = styled(ChordStyled)<IStyledWithThemeProps>``;

export const ChordNameStyled = styled.text<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordNameFill};
`;

export const NeckStyled = styled.rect<IStyledWithThemeProps>`
  fill: none;
  stroke: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordNeckStroke};
`;

export const NutStyled = styled.line<IStyledWithThemeProps>`
  fill: none;
  stroke: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordNutStroke};
`;

export const StringStyled = styled.line<IStyledWithThemeProps>`
  fill: none;
  stroke: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordStringStroke};
`;

export const FretStyled = styled.line<IStyledWithThemeProps>`
  fill: none;
  stroke: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordFretStroke};
`;

export const OpenStringStyled = styled.circle<IStyledWithThemeProps>`
  fill: none;
  stroke: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordOpenStringStroke};
`;

export const UnusedStringStyled = styled.text<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordUnusedStringFill};
`;

export const StartFretStyled = styled.text<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordStartFretFill};
`;

export const DotStyled = styled.circle<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordDotFill};
`;

export const BarreDotStyled = styled.circle<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordBarreDotFill};
`;

export const BarreStyled = styled.rect<IStyledWithThemeProps>`
  fill: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].chordBarreFill};
`;
