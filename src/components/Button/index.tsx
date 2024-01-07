import { EButtonTheme } from '@/components/Button/constants';
import { ButtonIconStyled, ButtonStyled, ButtonTextStyled, ButtonWrapperStyled } from '@/components/Button/styled';
import { BUTTON_COLOR } from './constants';
import { IButtonProps } from './types';

export const Button = ({
  icon,
  iconColor,
  iconSize = 0.7,
  onClick,
  text,
  buttonTheme = EButtonTheme.default,
}: IButtonProps) => (
  <ButtonStyled theme={buttonTheme} onClick={onClick}>
    <ButtonWrapperStyled>
      {text ? <ButtonTextStyled>{text}</ButtonTextStyled> : null}
      {icon ? <ButtonIconStyled path={icon} size={iconSize} color={iconColor || BUTTON_COLOR[buttonTheme]} /> : null}
    </ButtonWrapperStyled>
  </ButtonStyled>
);
