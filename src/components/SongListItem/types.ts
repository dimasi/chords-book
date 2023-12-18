import React from 'react';

export interface ISongListItemProps {
  id: number;
  name: string;
  author?: string;
  chords: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
  searchWords: string[];
}

export interface IUseSongListItemParams {
  author?: string;
  chordsNames: string[];
  name: string;
  id: number;
}
