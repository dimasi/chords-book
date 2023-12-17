import styled from 'styled-components';
import { IChordStyledProps } from './types';

const CHORD_COLORS = {
  BASE: '#333',
};

export const ChordStyled = styled.div<IChordStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props: IChordStyledProps) => (props.$active ? '#76b471' : '#aaa')};
  box-shadow: 0 0 5px ${(props: IChordStyledProps) => (props.$active ? 'rgba(21, 204, 7, 0.6)' : 'rgba(0, 0, 0, 0.4)')};
  background: ${(props: IChordStyledProps) => (props.$active ? '#73fa6b' : '#fff')};
  font-family: Arial, sans-serif;
  text-anchor: middle;
`;

export const ChordSVGStyled = styled.svg`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
`;

export const GuitarChordStyled = styled(ChordStyled)``;

export const UkuleleChordStyled = styled(ChordStyled)``;

export const ChordNameStyled = styled.text`
  fill: ${CHORD_COLORS.BASE};
`;

export const NeckStyled = styled.rect`
  fill: none;
  stroke: ${CHORD_COLORS.BASE};
`;

export const StringStyled = styled.line`
  fill: none;
  stroke: ${CHORD_COLORS.BASE};
`;

export const FretStyled = styled.line`
  fill: none;
  stroke: ${CHORD_COLORS.BASE};
`;

export const OpenStringStyled = styled.circle`
  fill: none;
  stroke: ${CHORD_COLORS.BASE};
`;

export const UnusedStringStyled = styled.text``;

export const StartFretStyled = styled.text``;

export const DotStyled = styled.circle`
  fill: ${CHORD_COLORS.BASE};
`;

export const BarreDotStyled = styled.circle`
  fill: ${CHORD_COLORS.BASE};
`;

export const BarreStyled = styled.rect`
  fill: ${CHORD_COLORS.BASE};
`;
