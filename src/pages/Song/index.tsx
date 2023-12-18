import { mdiArrowLeft, mdiCloseCircle } from '@mdi/js';
import React, { useEffect, useState } from 'react';
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
import { TChordsByGroups } from './types';
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
import { SearchNoResults } from '@/components/Search/components/NoResults';

export const SongPage = observer(() => {
  const { songId } = useParams();
  const {
    chordsStore: { chords: allChords, chordsByGroups: allChordsByGroups },
    settingsStore: { instrument },
    songsStore: { songs, toggleChordInSong, removeChordFromSong },
  } = useStores();
  const { handleBackButtonClick } = useBackButton();

  const song = songs.find(({ id }) => `${id}` === songId) as TSong;

  const chords = song.chords.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

  const [chordsSearch, setChordsSearch] = useState('');
  const [noChordsFound, setNoChordsFound] = useState(false);
  const [listChordsWithGroups, setListChordsWithGroups] = useState<TChordsByGroups>(allChordsByGroups[instrument]);

  const isActiveChord = (chord: TChord) => song.chords.includes(chord.name);

  useEffect(() => {
    setNoChordsFound(false);

    if (!chordsSearch.length) {
      setListChordsWithGroups(allChordsByGroups[instrument]);
    } else {
      const filteredListChordsWithGroups = Object.entries(allChordsByGroups[instrument]).reduce(
        (acc: TChordsByGroups, [group, groupChords]) => {
          const filteredGroupChords = groupChords.filter(
            (groupChord: TChordWithActiveFlag) =>
              groupChord.name.toLowerCase().indexOf(chordsSearch.toLowerCase()) > -1,
          );

          if (filteredGroupChords.length) {
            acc[group] = filteredGroupChords;
          }

          return acc;
        },
        {},
      );

      setListChordsWithGroups(filteredListChordsWithGroups);

      if (!Object.keys(filteredListChordsWithGroups).length) {
        setNoChordsFound(true);
      }
    }
  }, [chordsSearch, allChordsByGroups, instrument]);

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

  const handleChordsSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChordsSearch(event.target.value);
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
          <Search value={chordsSearch} onChange={handleChordsSearchChange} />
        </SongPageChordSearchContainerStyled>

        <SongPageChordsContainerStyled>
          {noChordsFound ? <SearchNoResults text="No chords found" onClickReset={() => setChordsSearch('')} /> : null}

          {Object.entries(listChordsWithGroups).map(([group, groupChords]) => (
            <SongPageChordsGroupStyled key={group}>
              <SongPageChordsGroupTitleStyled>{group}</SongPageChordsGroupTitleStyled>
              <SongPageChordsGridStyled>
                {groupChords.map((chordData) => (
                  <SongPageChordsGridItemStyled key={chordData.name}>
                    <SongPageChordsGridItemHeightHolderStyled>
                      <Chord
                        chordData={chordData}
                        instrument={instrument}
                        active={isActiveChord(chordData)}
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
