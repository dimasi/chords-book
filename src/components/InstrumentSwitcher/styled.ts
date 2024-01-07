import styled from 'styled-components';
import { Icon } from '@mdi/react';
import { IStyledWithThemeProps } from '@/types';
import { themeConstants } from '@/themeConstants';

export const InstrumentSwitcherStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InstrumentSwitcherTitleStyled = styled.div<IStyledWithThemeProps>`
  margin: 0 5px 0 0;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherTitleColor};
  font-size: 16px;
`;

export const InstrumentSwitcherTogglerStyled = styled.button`
  position: relative;
  border: 0 none;
  background: transparent;
  cursor: pointer;
`;

export const InstrumentSwitcherTogglerWrapperStyled = styled.span`
  display: flex;
  align-items: center;
`;

export const InstrumentSwitcherTogglerTextStyled = styled.span<IStyledWithThemeProps>`
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherTogglerColor};
  font-size: 16px;
  font-weight: 700;
`;

export const InstrumentSwitcherTogglerIconStyled = styled(Icon)`
  display: block;
`;

export const InstrumentSwitcherDropdownStyled = styled.div<IStyledWithThemeProps>`
  display: block;
  min-width: 100px;
  position: absolute;
  z-index: 2;
  top: -7px;
  left: -11px;
  border: 1px solid
    ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherDropdownBorderColor};
  box-shadow: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherDropdownBoxShadow};
  background: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherDropdownBackground};
`;

export const InstrumentSwitcherDropdownItemStyled = styled.div<IStyledWithThemeProps>`
  padding: 6px 10px;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherDropdownItemColor};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
`;

export const InstrumentSwitcherDropdownActiveItemStyled = styled(
  InstrumentSwitcherDropdownItemStyled,
)<IStyledWithThemeProps>`
  display: flex;
  color: ${(props: IStyledWithThemeProps) => themeConstants[props.theme].instrumentSwitcherDropdownActiveItemColor};
  font-weight: 700;
`;

export const InstrumentSwitcherDropdownActiveItemTogglerIconStyled = styled(Icon)`
  display: block;
`;
