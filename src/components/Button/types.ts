import React from 'react';
import { EButtonTheme } from './constants';

export interface IButtonProps {
  icon?: string; // @mdi/js
  iconColor?: string;
  iconSize?: number;
  text?: string;
  buttonTheme?: EButtonTheme;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonStyledProps {
  theme: EButtonTheme;
}
