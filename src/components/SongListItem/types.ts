import React from 'react';
import { TChordData } from '@/domain/types';

export interface ISongListItemProps {
  author: string;
  name: string;
  chords: TChordData[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}
