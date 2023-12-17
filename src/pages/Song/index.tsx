import { mdiArrowLeft, mdiCloseCircle } from '@mdi/js';
import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { TChord, TSong } from '@/domain/types';
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
  SongPageChordRemoveButtonStyled,
  SongPageChordsContainerStyled,
  SongPageChordSearchContainerStyled,
  SongPageChordsGridItemHeightHolderStyled,
  SongPageChordsGridItemStyled,
  SongPageChordsGridStyled,
  SongPageChordsGroupStyled,
  SongPageChordsGroupTitleStyled,
  SongPageContentStyled,
  SongPageGridItemHeightHolderStyled,
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
    songsStore: { songs, toggleChordInSong, removeChordFromSong },
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

  const handleChordClick = (chord: TChord) => {
    toggleChordInSong({
      songId: song.id,
      chordName: chord.name,
    });
  };

  const handleChordRemoveButtonClick = (chord: TChord) => {
    removeChordFromSong({
      songId: song.id,
      chordName: chord.name,
    });
  };

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
                  <SongPageGridItemHeightHolderStyled>
                    <SongPageChordRemoveButtonStyled>
                      <Button
                        icon={mdiCloseCircle}
                        theme={EButtonTheme.transparentDanger}
                        iconSize={1}
                        onClick={() => handleChordRemoveButtonClick(chord)}
                      />
                    </SongPageChordRemoveButtonStyled>
                    <Chord chordData={chord} instrument={instrument} />
                  </SongPageGridItemHeightHolderStyled>
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
                    <SongPageChordsGridItemHeightHolderStyled>
                      <Chord
                        chordData={chordData}
                        instrument={instrument}
                        active={chordData.active}
                        onClick={handleChordClick}
                      />
                    </SongPageChordsGridItemHeightHolderStyled>
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
