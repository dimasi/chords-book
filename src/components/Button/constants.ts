export enum EButtonTheme {
  default = 'default',
  success = 'success',
  transparent = 'transparent',
}

export const BUTTON_BACKGROUND = {
  [EButtonTheme.default]: '#fafafa',
  [EButtonTheme.success]: '#14840b',
  [EButtonTheme.transparent]: 'rgba(0, 0, 0, 0)',
};

export const BUTTON_BORDER_COLOR = {
  [EButtonTheme.default]: '#242424',
  [EButtonTheme.success]: '#14840b',
  [EButtonTheme.transparent]: 'rgba(0, 0, 0, 0)',
};

export const BUTTON_COLOR = {
  [EButtonTheme.default]: '#242424',
  [EButtonTheme.success]: '#fff',
  [EButtonTheme.transparent]: '#242424',
};
