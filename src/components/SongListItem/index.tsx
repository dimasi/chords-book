import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';
import { EInstrument } from '@/domain/constants';
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

export const SongListItem = ({ author, name, chords, onClick }: ISongListItemProps) => (
  <SongListItemStyled onClick={onClick}>
    <SongListItemTitleStyled>
      <SongListItemNameStyled>{name}</SongListItemNameStyled>
      <SongListItemAuthorStyled>{author}</SongListItemAuthorStyled>
    </SongListItemTitleStyled>

    <SongListItemChordsStyled>
      {chords.map((chordData) => (
        <SongListItemChordContainerStyled key={chordData.name}>
          <Chord chordData={chordData} instrument={EInstrument.ukulele} />
        </SongListItemChordContainerStyled>
      ))}
      {chords.length > 3 ? <SongListItemChordsMoreStyled>+3</SongListItemChordsMoreStyled> : null}
    </SongListItemChordsStyled>

    <SongListItemSpacerStyled />

    <SongListItemRemoveStyled>
      <Icon path={mdiDeleteOutline} size={1} color="#232323" />
    </SongListItemRemoveStyled>
  </SongListItemStyled>
);
