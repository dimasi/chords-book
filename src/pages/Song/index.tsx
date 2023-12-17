import { mdiArrowLeft } from '@mdi/js';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TSong } from '@/domain/types';
import { TChordWithActiveFlag } from '@/components/Chord/types';
import { EButtonTheme } from '@/components/Button/constants';
import { useBackButton } from '@/hooks/useBackButton';
import { useStores } from '@/stores/rootStoreContext';
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

export const SongPage = observer(() => {
  const { songId } = useParams();
  const {
    chordsStore: { chords: allChords },
    settingsStore: { instrument },
    songsStore: { songs },
  } = useStores();
  const { handleBackButtonClick } = useBackButton();

  const song = songs.find(({ id }) => `${id}` === songId) as TSong;

  const chords = song.chords.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

  const allChordsByGroups = allChords[instrument].reduce(
    (chordsByGroups: Record<string, TChordWithActiveFlag[]>, chord) => {
      // eslint-disable-next-line no-param-reassign
      if (!chordsByGroups[chord.group]) chordsByGroups[chord.group] = [];
      chordsByGroups[chord.group].push({
        ...chord,
        active: song.chords.includes(chord.name),
      });
      return chordsByGroups;
    },
    {},
  );

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

          <SongPageNameStyled>{song.name}</SongPageNameStyled>
          {song.author ? <SongPageAuthorStyled>by {song.author}</SongPageAuthorStyled> : null}
        </SongPageHeaderStyled>

        <SongPageSongChordsContainerStyled>
          <SongPageGridStyled>
            {chords.map((chord) =>
              chord ? (
                <SongPageGridItemStyled key={chord.name}>
                  <SongPageGridItemHeightHolder>
                    <Chord chordData={chord} instrument={instrument} />
                  </SongPageGridItemHeightHolder>
                </SongPageGridItemStyled>
              ) : null,
            )}
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
                      <Chord chordData={chordData} instrument={instrument} active={chordData.active} />
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
});
