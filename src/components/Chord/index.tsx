import uniqueId from 'lodash.uniqueid';
import { observer } from 'mobx-react-lite';
import { EInstrument } from '@/domain/constants';
import { TChord } from '@/domain/types';
import { useStores } from '@/stores/rootStoreContext';
import {
  IBarreProps,
  IChordNameProps,
  IChordProps,
  IDotsProps,
  IFretsProps,
  INeckProps,
  INutProps,
  IOpenStringsProps,
  IStartFretProps,
  IStringsProps,
  IUnusedStringsProps,
} from './types';
import {
  BarreStyled,
  BarreDotStyled,
  ChordNameStyled,
  ChordSVGStyled,
  DotStyled,
  FretStyled,
  GuitarChordStyled,
  NeckStyled,
  NutStyled,
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
  [EInstrument.ukulele]: `0 0 ${viewBoxWidth[EInstrument.ukulele]} 700`,
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

const ChordName = observer(({ chordData, instrument }: IChordNameProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <ChordNameStyled x={chordNameX[instrument]} y="84" fontSize="78" theme={theme}>
      {chordData.name}
    </ChordNameStyled>
  );
});

const Neck = observer(({ instrument }: INeckProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return <NeckStyled x={neckX} y={neckY} width={neckWidth[instrument]} height="464" strokeWidth="5" theme={theme} />;
});

const Nut = observer(({ chordData, instrument }: INutProps) => {
  if (chordData.fret !== null) return null;

  const {
    settingsStore: { theme },
  } = useStores();

  const nutX = neckX - 2.5;
  const nutX2 = neckX + neckWidth[instrument] + 2.5;
  const nutY = neckY;

  return <NutStyled key={uniqueId('nut')} x1={nutX} x2={nutX2} y1={nutY} y2={nutY} strokeWidth="18" theme={theme} />;
});

const Strings = observer(({ instrument }: IStringsProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  const stringsX = Array.from(
    { length: stringsCount[instrument] },
    (_, stringIndex) => neckX + stringIndex * spaceBetweenStrings,
  );

  return (
    <>
      {stringsX.map((stringX) => (
        <StringStyled
          key={uniqueId('string')}
          x1={stringX}
          x2={stringX}
          y1={neckY}
          y2="635"
          strokeWidth="5"
          theme={theme}
        />
      ))}
    </>
  );
});

const Frets = observer(({ instrument }: IFretsProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  const fretsY = [287, 403, 519];
  const fretX2 = neckX + neckWidth[instrument];

  return (
    <>
      {fretsY.map((fretY) => (
        <FretStyled key={uniqueId('fret')} x1={neckX} x2={fretX2} y1={fretY} y2={fretY} strokeWidth="5" theme={theme} />
      ))}
    </>
  );
});

const OpenStrings = observer(({ chordData }: IOpenStringsProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <>
      {chordData.dots.map((dotPosition, stringIndex) =>
        dotPosition === 0 ? (
          <OpenStringStyled
            key={uniqueId('openString')}
            cx={neckX + stringIndex * spaceBetweenStrings}
            cy="140"
            r="16"
            strokeWidth="3"
            theme={theme}
          />
        ) : null,
      )}
    </>
  );
});

const UnusedStrings = observer(({ chordData }: IUnusedStringsProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <>
      {chordData.dots.map((dotPosition, stringIndex) =>
        dotPosition === -1 ? (
          <UnusedStringStyled
            key={uniqueId('unusedString')}
            x={neckX + stringIndex * spaceBetweenStrings}
            y="140"
            dy="15"
            fontSize="56"
            theme={theme}
          >
            x
          </UnusedStringStyled>
        ) : null,
      )}
    </>
  );
});

const StartFret = observer(({ chordData, instrument }: IStartFretProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  const startFretX = viewBoxWidth[instrument] - 36;

  return chordData.fret && chordData.fret > 1 ? (
    <StartFretStyled x={startFretX} y="182" fontSize="42" theme={theme}>
      {chordData.fret}
    </StartFretStyled>
  ) : null;
});

const Dots = observer(({ chordData }: IDotsProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

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
                theme={theme}
              />
            ),
        ),
      )}
    </>
  );
});

const Barre = observer(({ chordData }: IBarreProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

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
                theme={theme}
              />
              {isNextStringIsAlsoUsed(stringIndex) ? (
                <BarreStyled
                  x={getBarreCxByStringIndex(stringIndex)}
                  y={getBarreCyByBarreFret(barreFret)}
                  width="96"
                  height="60"
                  theme={theme}
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
              theme={theme}
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
              theme={theme}
            />
          );
        }

        return null;
      })}
    </>
  );
});

const ChordSvg = ({ chordData, instrument }: { chordData: TChord; instrument: EInstrument }) => (
  <ChordSVGStyled viewBox={viewBox[instrument]}>
    <ChordName chordData={chordData} instrument={instrument} />
    <Neck instrument={instrument} />
    <Nut chordData={chordData} instrument={instrument} />
    <Strings instrument={instrument} />
    <Frets instrument={instrument} />
    <OpenStrings chordData={chordData} />
    <UnusedStrings chordData={chordData} />
    <StartFret chordData={chordData} instrument={instrument} />
    <Dots chordData={chordData} />
    <Barre chordData={chordData} />
  </ChordSVGStyled>
);

export const Chord = observer(({ chordData, instrument, active, onClick }: IChordProps) => {
  const {
    settingsStore: { theme },
  } = useStores();

  return (
    <>
      {instrument === EInstrument.ukulele ? (
        <UkuleleChordStyled $active={active} theme={theme} onClick={onClick && (() => onClick(chordData))}>
          <ChordSvg chordData={chordData} instrument={instrument} />
        </UkuleleChordStyled>
      ) : null}

      {instrument === EInstrument.guitar ? (
        <GuitarChordStyled $active={active} theme={theme} onClick={onClick && (() => onClick(chordData))}>
          <ChordSvg chordData={chordData} instrument={instrument} />
        </GuitarChordStyled>
      ) : null}
    </>
  );
});
