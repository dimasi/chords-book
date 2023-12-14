import styled from 'styled-components';

const CHORD_COLORS = {
  BASE: '#333',
};

export const ChordStyled = styled.div`
  padding: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  font-family: Arial, sans-serif;
  text-anchor: middle;
`;

export const GuitarChordStyled = styled(ChordStyled)`
  width: 287.27272727272725px;
  background: aqua;
`;

export const UkuleleChordStyled = styled(ChordStyled)`
  width: 200px;
  background: wheat;
`;

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
