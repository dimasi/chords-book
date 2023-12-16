import styled from 'styled-components';
import Icon from '@mdi/react';

export const InstrumentSwitcherStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const InstrumentSwitcherTitleStyled = styled.div`
  margin: 0 5px 0 0;
  font-size: 16px;
`;

export const InstrumentSwitcherTogglerStyled = styled.button`
  border: 0 none;
  background: transparent;
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
