import styled from 'styled-components';

const CHORD_COLORS = {
  BASE: '#333',
};

export const ChordStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #aaa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
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
