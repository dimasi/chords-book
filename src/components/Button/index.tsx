import { BUTTON_COLOR } from './constants';
import { IButtonProps } from './types';
import { ButtonIconStyled, ButtonStyled, ButtonTextStyled, ButtonWrapperStyled } from '@/components/Button/styled';
import { EButtonTheme } from '@/components/Button/constants';

export const Button = ({ icon, text, iconSize = 0.7, theme = EButtonTheme.default, onClick }: IButtonProps) => (
  <ButtonStyled theme={theme} onClick={onClick}>
    <ButtonWrapperStyled>
      {text ? <ButtonTextStyled>{text}</ButtonTextStyled> : null}
      {icon ? <ButtonIconStyled path={icon} size={iconSize} color={BUTTON_COLOR[theme]} /> : null}
    </ButtonWrapperStyled>
  </ButtonStyled>
);
