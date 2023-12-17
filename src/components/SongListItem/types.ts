import React from 'react';

export interface ISongListItemProps {
  name: string;
  author?: string;
  chords: number[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}
