import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import { Chord } from '@/components/Chord';
import { ISongListItemProps } from './types';
import {
  SongListItemAuthorStyled,
  SongListItemChordContainerStyled,
  SongListItemChordsStyled,
  SongListItemChordsMoreStyled,
  SongListItemNameStyled,
  SongListItemRemoveStyled,
  SongListItemStyled,
  SongListItemSpacerStyled,
  SongListItemTitleStyled,
} from './styled';
import { useStores } from '@/stores/rootStoreContext';

export const SongListItem = observer(({ author, name, chords: chordsNames, onClick }: ISongListItemProps) => {
  const {
    chordsStore: { chords: allChords },
    settingsStore: { instrument },
  } = useStores();

  const chords = chordsNames.map((chordName) => allChords[instrument].find((chord) => chord.name === chordName));

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

      <SongListItemRemoveStyled>
        <Icon path={mdiDeleteOutline} size={1} color="#232323" />
      </SongListItemRemoveStyled>
    </SongListItemStyled>
  );
});
