import { mdiArrowLeft, mdiCloseCircle } from '@mdi/js';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { EButtonTheme } from '@/components/Button/constants';
import { Button } from '@/components/Button';
import { Chord } from '@/components/Chord';
import { Search } from '@/components/Search';
import { SearchNoResults } from '@/components/Search/components/NoResults';
import { useBackButton } from '@/hooks/useBackButton';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
import { useSong } from './hooks';
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
  const {
    settingsStore: { instrument, theme },
  } = useStores();

  const { handleBackButtonClick } = useBackButton();

  const {
    chords,
    chordsSearch,
    listChordsWithGroups,
    noChordsFound,
    song,
    handleChordClick,
    handleChordRemoveButtonClick,
    handleChordsSearchChange,
    isActiveChord,
    setChordsSearch,
  } = useSong();

  return (
    <SongPageStyled>
      <SongPageContentStyled theme={theme}>
        <SongPageHeaderStyled theme={theme}>
          <SongPageBackButtonStyled>
            <Button
              buttonTheme={EButtonTheme.transparent}
              icon={mdiArrowLeft}
              iconColor={themeConstants[theme].songPageBackButton}
              iconSize={0.8}
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
                    <SongPageChordRemoveButtonStyled theme={theme}>
                      <Button
                        buttonTheme={EButtonTheme.transparentDanger}
                        icon={mdiCloseCircle}
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
        <SongPageHeaderStyled theme={theme}>
          <SongPageHeaderTitleStyled>All chords</SongPageHeaderTitleStyled>
        </SongPageHeaderStyled>

        <SongPageChordSearchContainerStyled theme={theme}>
          <Search value={chordsSearch} onChange={handleChordsSearchChange} />
        </SongPageChordSearchContainerStyled>

        <SongPageChordsContainerStyled>
          {noChordsFound ? <SearchNoResults text="No chords found" onClickReset={() => setChordsSearch('')} /> : null}

          {Object.entries(listChordsWithGroups).map(([group, groupChords]) => (
            <SongPageChordsGroupStyled key={group}>
              <SongPageChordsGroupTitleStyled theme={theme}>{group}</SongPageChordsGroupTitleStyled>
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
