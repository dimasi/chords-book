import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useStores } from '@/stores/rootStoreContext';
import { IUseSongListItemParams } from './types';

export const useSongListItem = ({ author, chordsNames, id, name }: IUseSongListItemParams) => {
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

  return {
    chords,
    handleRemoveButtonClick,
  };
};
