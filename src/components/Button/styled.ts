import { Icon } from '@mdi/react';
import styled from 'styled-components';
import { BUTTON_BACKGROUND, BUTTON_BORDER_COLOR, BUTTON_COLOR } from './constants';
import { IButtonStyledProps } from './types';

export const ButtonStyled = styled.button<IButtonStyledProps>`
  height: 36px;
  padding: 0 12px;
  border: 1px solid ${(props: IButtonStyledProps) => BUTTON_BORDER_COLOR[props.theme]};
  background: ${(props: IButtonStyledProps) => BUTTON_BACKGROUND[props.theme]};
  color: ${(props: IButtonStyledProps) => BUTTON_COLOR[props.theme]};
  cursor: pointer;
`;

export const ButtonWrapperStyled = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonTextStyled = styled.span`
  flex: 0 0 auto;
  display: block;
  text-transform: uppercase;
`;

export const ButtonIconStyled = styled(Icon)`
  flex: 0 0 auto;
  display: block;
`;
