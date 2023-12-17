import React from 'react';

export interface ISongListItemProps {
  name: string;
  author?: string;
  chords: string[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}
