import { mdiDeleteOutline } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
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

export const SongListItem = observer(
  ({ id, author, name, chords: chordsNames, onClick, searchWords }: ISongListItemProps) => {
    const {
      chordsStore: { chords: allChords },
      settingsStore: { instrument },
      songsStore: { removeSong },
    } = useStores();

    const chords = chordsNames.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

    const handleRemoveButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      confirmAlert({
        title: `${name} ${author ? ` by ${author}` : ''}`,
        message: `The song will be remove. Continue?`,
        buttons: [
          {
            label: 'Yes',
            onClick: () => removeSong(id),
          },
          {
            label: 'No',
          },
        ],
      });
    };

    return (
      <SongListItemStyled onClick={onClick}>
        <SongListItemTitleStyled>
          <SongListItemNameStyled searchWords={searchWords} textToHighlight={name} />
          <SongListItemAuthorStyled searchWords={searchWords} textToHighlight={author || ''} />
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
  },
);
