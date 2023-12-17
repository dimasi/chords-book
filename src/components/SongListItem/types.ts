import React from 'react';

export interface ISongListItemProps {
  id: number;
  name: string;
  author?: string;
  chords: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}
