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
import { useSongListItem } from './hooks';

export const SongListItem = observer(
  ({ id, author, name, chords: chordsNames, onClick, searchWords }: ISongListItemProps) => {
    const {
      settingsStore: { instrument },
    } = useStores();

    const { chords, moreChordsCounter, handleRemoveButtonClick } = useSongListItem({ author, chordsNames, id, name });

    return (
      <SongListItemStyled onClick={onClick}>
        <SongListItemTitleStyled>
          <SongListItemNameStyled searchWords={searchWords} textToHighlight={name} />
          <SongListItemAuthorStyled searchWords={searchWords} textToHighlight={author || ''} />
        </SongListItemTitleStyled>

        <SongListItemChordsStyled>
          {chords.map((chord, index) =>
            chord && index < 5 ? (
              <SongListItemChordContainerStyled key={chord.name}>
                <Chord chordData={chord} instrument={instrument} />
              </SongListItemChordContainerStyled>
            ) : null,
          )}
          {moreChordsCounter ? <SongListItemChordsMoreStyled>+{moreChordsCounter}</SongListItemChordsMoreStyled> : null}
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
  },
);
