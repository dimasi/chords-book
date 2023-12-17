import { mdiDeleteOutline } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Chord } from '@/components/Chord';
import { ISongListItemProps } from './types';
import {
  SongListItemAuthorStyled,
  SongListItemChordContainerStyled,
  SongListItemChordsMoreStyled,
  SongListItemChordsStyled,
  SongListItemNameStyled,
  SongListItemSpacerStyled,
  SongListItemStyled,
  SongListItemTitleStyled,
} from './styled';
import { useStores } from '@/stores/rootStoreContext';
import { Button } from '@/components/Button';
import { EButtonTheme } from '@/components/Button/constants';

export const SongListItem = observer(({ id, author, name, chords: chordsNames, onClick }: ISongListItemProps) => {
  const {
    chordsStore: { chords: allChords },
    settingsStore: { instrument },
    songsStore: { removeSong },
  } = useStores();

  const chords = chordsNames.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

  const handleRemoveButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    removeSong(id);
  };

  return (
    <SongListItemStyled onClick={onClick}>
      <SongListItemTitleStyled>
        <SongListItemNameStyled>{name}</SongListItemNameStyled>
        <SongListItemAuthorStyled>{author}</SongListItemAuthorStyled>
      </SongListItemTitleStyled>

      <SongListItemChordsStyled>
        {chords.map((chord) =>
          chord ? (
            <SongListItemChordContainerStyled key={chord.name}>
              <Chord chordData={chord} instrument={instrument} />
            </SongListItemChordContainerStyled>
          ) : null,
        )}
        {chords.length > 3 ? <SongListItemChordsMoreStyled>+3</SongListItemChordsMoreStyled> : null}
      </SongListItemChordsStyled>

      <SongListItemSpacerStyled />

      <Button
        icon={mdiDeleteOutline}
        theme={EButtonTheme.transparentDanger}
        iconSize={1}
        onClick={handleRemoveButtonClick}
      />
    </SongListItemStyled>
  );
});
