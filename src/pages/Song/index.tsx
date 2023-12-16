import { mdiArrowLeft } from '@mdi/js';
import { EInstrument } from '@/domain/constants';
import { TChordData } from '@/domain/types';
import { EButtonTheme } from '@/components/Button/constants';
import { ukuleleChords } from '@/data/ukuleleChords';
import { Button } from '@/components/Button';
import { Chord } from '@/components/Chord';
import { Search } from '@/components/Search';
import {
  SongPageAddFormStyled,
  SongPageAuthorStyled,
  SongPageBackButtonStyled,
  SongPageChordSearchContainerStyled,
  SongPageChordsContainerStyled,
  SongPageChordsGroupStyled,
  SongPageChordsGroupTitleStyled,
  SongPageChordsGridStyled,
  SongPageChordsGridItemStyled,
  SongPageChordsGridItemHeightHolder,
  SongPageContentStyled,
  SongPageGridItemHeightHolder,
  SongPageGridItemStyled,
  SongPageGridStyled,
  SongPageHeaderStyled,
  SongPageHeaderTitleStyled,
  SongPageNameStyled,
  SongPageSongChordsContainerStyled,
  SongPageStyled,
} from './styled';
import { useBackButton } from '@/hooks/useBackButton';

const chords = [
  {
    barre: null,
    dots: [1, 3, 1, 1],
    fret: null,
    group: 'A#',
    name: 'A#7sus4',
  },
  {
    barre: null,
    dots: [0, 0, 0, 3],
    fret: null,
    group: 'C',
    name: 'C',
  },
  {
    barre: null,
    dots: [1, 1, 1, 2],
    fret: null,
    group: 'Db',
    name: 'Db7',
  },
  {
    barre: null,
    dots: [2, 0, 1, 0],
    fret: null,
    group: 'F',
    name: 'F',
  },
  {
    barre: null,
    dots: [0, 0, 0, 3],
    fret: null,
    group: 'C',
    name: 'C',
  },
  {
    barre: null,
    dots: [1, 1, 1, 2],
    fret: null,
    group: 'Db',
    name: 'Db7',
  },
  {
    barre: null,
    dots: [2, 0, 1, 0],
    fret: null,
    group: 'F',
    name: 'F',
  },
];

const allChordsByGroups = ukuleleChords.reduce((chordsByGroups: Record<string, TChordData[]>, chord) => {
  // eslint-disable-next-line no-param-reassign
  if (!chordsByGroups[chord.group]) chordsByGroups[chord.group] = [];
  chordsByGroups[chord.group].push(chord);
  return chordsByGroups;
}, {});

export const SongPage = () => {
  const { handleBackButtonClick } = useBackButton();

  return (
    <SongPageStyled>
      <SongPageContentStyled>
        <SongPageHeaderStyled>
          <SongPageBackButtonStyled>
            <Button
              icon={mdiArrowLeft}
              iconSize={0.8}
              theme={EButtonTheme.transparent}
              onClick={handleBackButtonClick}
            />
          </SongPageBackButtonStyled>

          <SongPageNameStyled>Alps</SongPageNameStyled>
          <SongPageAuthorStyled>by Motorama</SongPageAuthorStyled>
        </SongPageHeaderStyled>

        <SongPageSongChordsContainerStyled>
          <SongPageGridStyled>
            {chords.map((chordData) => (
              <SongPageGridItemStyled key={chordData.name}>
                <SongPageGridItemHeightHolder>
                  <Chord chordData={chordData} instrument={EInstrument.ukulele} />
                </SongPageGridItemHeightHolder>
              </SongPageGridItemStyled>
            ))}
          </SongPageGridStyled>
        </SongPageSongChordsContainerStyled>
      </SongPageContentStyled>

      <SongPageAddFormStyled>
        <SongPageHeaderStyled>
          <SongPageHeaderTitleStyled>All chords</SongPageHeaderTitleStyled>
        </SongPageHeaderStyled>

        <SongPageChordSearchContainerStyled>
          <Search />
        </SongPageChordSearchContainerStyled>

        <SongPageChordsContainerStyled>
          {Object.entries(allChordsByGroups).map(([group, groupChords]) => (
            <SongPageChordsGroupStyled key={group}>
              <SongPageChordsGroupTitleStyled>{group}</SongPageChordsGroupTitleStyled>
              <SongPageChordsGridStyled>
                {groupChords.map((chordData) => (
                  <SongPageChordsGridItemStyled key={chordData.name}>
                    <SongPageChordsGridItemHeightHolder>
                      <Chord chordData={chordData} instrument={EInstrument.ukulele} />
                    </SongPageChordsGridItemHeightHolder>
                  </SongPageChordsGridItemStyled>
                ))}
              </SongPageChordsGridStyled>
            </SongPageChordsGroupStyled>
          ))}
        </SongPageChordsContainerStyled>
      </SongPageAddFormStyled>
    </SongPageStyled>
  );
};
