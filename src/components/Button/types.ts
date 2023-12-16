import React from 'react';
import { EButtonTheme } from './constants';

export interface IButtonProps {
  icon?: string; // @mdi/js
  iconSize?: number;
  text?: string;
  theme?: EButtonTheme;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonStyledProps {
  theme: EButtonTheme;
}
