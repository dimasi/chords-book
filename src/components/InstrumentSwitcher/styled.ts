import styled from 'styled-components';
import Icon from '@mdi/react';

export const InstrumentSwitcherStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InstrumentSwitcherTitleStyled = styled.div`
  margin: 0 5px 0 0;
  color: #555;
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

export const InstrumentSwitcherTogglerTextStyled = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const InstrumentSwitcherTogglerIconStyled = styled(Icon)`
  display: block;
`;

export const InstrumentSwitcherDropdownStyled = styled.div`
  display: block;
  min-width: 100px;
  position: absolute;
  z-index: 2;
  top: -7px;
  left: -11px;
  border: 1px solid #aaa;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  background: #fff;
`;

export const InstrumentSwitcherDropdownItemStyled = styled.div`
  padding: 6px 10px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
`;

export const InstrumentSwitcherDropdownActiveItemStyled = styled(InstrumentSwitcherDropdownItemStyled)`
  display: flex;
  font-weight: 700;
`;

export const InstrumentSwitcherDropdownActiveItemTogglerIconStyled = styled(Icon)`
  display: block;
`;
