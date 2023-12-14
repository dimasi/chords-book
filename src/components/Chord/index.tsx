import uniqueId from 'lodash.uniqueid';
import { EInstrument } from '@/domain/constants';
import { TChordData } from '@/domain/types';
import {
  IBarreProps,
  IChordNameProps,
  IDotsProps,
  IFretsProps,
  INeckProps,
  IOpenStringsProps,
  IStartFretProps,
  IStringsProps,
  IUnusedStringsProps,
} from './types';
import {
  BarreStyled,
  BarreDotStyled,
  ChordNameStyled,
  DotStyled,
  FretStyled,
  GuitarChordStyled,
  NeckStyled,
  OpenStringStyled,
  StartFretStyled,
  StringStyled,
  UkuleleChordStyled,
  UnusedStringStyled,
} from './styled';

const viewBoxWidth = {
  [EInstrument.guitar]: 632,
  [EInstrument.ukulele]: 440,
};

const viewBox = {
  [EInstrument.guitar]: `0 0 ${viewBoxWidth[EInstrument.guitar]} 660`,
  [EInstrument.ukulele]: `0 0 ${viewBoxWidth[EInstrument.ukulele]} 660`,
};

const chordNameX = {
  [EInstrument.guitar]: viewBoxWidth[EInstrument.guitar] / 2,
  [EInstrument.ukulele]: viewBoxWidth[EInstrument.ukulele] / 2,
};

const neckX = 76;
const neckY = 171;

const neckWidth = {
  [EInstrument.guitar]: 480,
  [EInstrument.ukulele]: 288,
};

const stringsCount = {
  [EInstrument.guitar]: 6,
  [EInstrument.ukulele]: 4,
};

const spaceBetweenStrings = 96;

const fretsDotsCYPositions = [230, 346, 462, 578];

const ChordName = ({ chordData, instrument }: IChordNameProps) => (
  <ChordNameStyled x={chordNameX[instrument]} y="84" fontSize="78">
    {chordData.name}
  </ChordNameStyled>
);

const Neck = ({ instrument }: INeckProps) => (
  <NeckStyled x={neckX} y={neckY} width={neckWidth[instrument]} height="464" strokeWidth="5" />
);

const Strings = ({ instrument }: IStringsProps) => {
  const stringsX = Array.from(
    { length: stringsCount[instrument] },
    (_, stringIndex) => neckX + stringIndex * spaceBetweenStrings,
  );

  return (
    <>
      {stringsX.map((stringX) => (
        <StringStyled key={uniqueId('string')} x1={stringX} x2={stringX} y1={neckY} y2="635" strokeWidth="5" />
      ))}
    </>
  );
};

const Frets = ({ instrument }: IFretsProps) => {
  const fretsY = [287, 403, 519];
  const fretX2 = neckX + neckWidth[instrument];

  return (
    <>
      {fretsY.map((fretY) => (
        <FretStyled key={uniqueId('fret')} x1={neckX} x2={fretX2} y1={fretY} y2={fretY} strokeWidth="5" />
      ))}
    </>
  );
};

const OpenStrings = ({ chordData }: IOpenStringsProps) => (
  <>
    {chordData.dots.map((dotPosition, stringIndex) =>
      dotPosition === 0 ? (
        <OpenStringStyled
          key={uniqueId('openString')}
          cx={neckX + stringIndex * spaceBetweenStrings}
          cy="140"
          r="16"
          strokeWidth="3"
        />
      ) : null,
    )}
  </>
);

const UnusedStrings = ({ chordData }: IUnusedStringsProps) => (
  <>
    {chordData.dots.map((dotPosition, stringIndex) =>
      dotPosition === -1 ? (
        <UnusedStringStyled
          key={uniqueId('unusedString')}
          x={neckX + stringIndex * spaceBetweenStrings}
          y="140"
          dy="15"
          fontSize="56"
        >
          x
        </UnusedStringStyled>
      ) : null,
    )}
  </>
);

const StartFret = ({ chordData, instrument }: IStartFretProps) => {
  const startFretX = viewBoxWidth[instrument] - 22;

  return chordData.fret && chordData.fret > 1 ? (
    <StartFretStyled x={startFretX} y="242" fontSize="42">
      {chordData.fret}
    </StartFretStyled>
  ) : null;
};

const Dots = ({ chordData }: IDotsProps) => {
  const fretsIndexes = Array.from({ length: 4 }, (_, fretIndex) => fretIndex);

  const getCxByStringIndex = (stringIndex: number) => neckX + stringIndex * spaceBetweenStrings;
  const getCyByFretIndex = (fretIndex: number) => fretsDotsCYPositions[fretIndex];

  return (
    <>
      {fretsIndexes.map((fretIndex) =>
        chordData.dots.map(
          (dotPosition, stringIndex) =>
            dotPosition === fretIndex + 1 && (
              <DotStyled
                key={uniqueId('dot')}
                cx={getCxByStringIndex(stringIndex)}
                cy={getCyByFretIndex(fretIndex)}
                r="30"
              />
            ),
        ),
      )}
    </>
  );
};

function Barre({ chordData }: IBarreProps) {
  if (!chordData.barre) return null;

  const isFirstBarreString = (stringIndex: number) => !(chordData.barre as Array<number | null>)[stringIndex - 1];
  const isLastBarreString = (stringIndex: number) => !(chordData.barre as Array<number | null>)[stringIndex + 1];
  const isNextStringIsAlsoUsed = (stringIndex: number) => !!(chordData.barre as Array<number | null>)[stringIndex + 1];
  const isPrevStringIsAlsoUsed = (stringIndex: number) => !!(chordData.barre as Array<number | null>)[stringIndex - 1];

  const getBarreCxByStringIndex = (stringIndex: number) => neckX + stringIndex * spaceBetweenStrings;
  const getBarreDotCyByBarreFret = (barreFret: number) => fretsDotsCYPositions[barreFret - 1];
  const getBarreCyByBarreFret = (barreFret: number) => getBarreDotCyByBarreFret(barreFret) - 30;

  return (
    <>
      {chordData.barre.map((barreFret, stringIndex) => {
        if (!barreFret) return null;

        if (isFirstBarreString(stringIndex)) {
          return (
            <g key={uniqueId('barre')}>
              <BarreDotStyled
                cx={getBarreCxByStringIndex(stringIndex)}
                cy={getBarreDotCyByBarreFret(barreFret)}
                r="30"
              />
              {isNextStringIsAlsoUsed(stringIndex) ? (
                <BarreStyled
                  x={getBarreCxByStringIndex(stringIndex)}
                  y={getBarreCyByBarreFret(barreFret)}
                  width="96"
                  height="60"
                />
              ) : null}
            </g>
          );
        }

        if (isLastBarreString(stringIndex)) {
          return (
            <BarreDotStyled
              key={uniqueId('barre')}
              cx={getBarreCxByStringIndex(stringIndex)}
              cy={getBarreDotCyByBarreFret(barreFret)}
              r="30"
            />
          );
        }

        if (isPrevStringIsAlsoUsed(stringIndex)) {
          return (
            <BarreStyled
              key={uniqueId('barre')}
              x={getBarreCxByStringIndex(stringIndex)}
              y={getBarreCyByBarreFret(barreFret)}
              width="96"
              height="60"
            />
          );
        }

        return null;
      })}
    </>
  );
}

function ChordSvg({ chordData, instrument }: { chordData: TChordData; instrument: EInstrument }) {
  return (
    <svg viewBox={viewBox[instrument]}>
      <ChordName chordData={chordData} instrument={instrument} />
      <Neck instrument={instrument} />
      <Strings instrument={instrument} />
      <Frets instrument={instrument} />
      <OpenStrings chordData={chordData} />
      <UnusedStrings chordData={chordData} />
      <StartFret chordData={chordData} instrument={instrument} />
      <Dots chordData={chordData} />
      <Barre chordData={chordData} />
    </svg>
  );
}

export default function Chord({ chordData, instrument }: { chordData: TChordData; instrument: EInstrument }) {
  return (
    <>
      {instrument === EInstrument.ukulele ? (
        <UkuleleChordStyled>
          <ChordSvg chordData={chordData} instrument={instrument} />
        </UkuleleChordStyled>
      ) : null}

      {instrument === EInstrument.guitar ? (
        <GuitarChordStyled>
          <ChordSvg chordData={chordData} instrument={instrument} />
        </GuitarChordStyled>
      ) : null}
    </>
  );
}
