import { mdiChevronDown } from '@mdi/js';
import {
  InstrumentSwitcherStyled,
  InstrumentSwitcherTitleStyled,
  InstrumentSwitcherTogglerStyled,
  InstrumentSwitcherTogglerWrapperStyled,
  InstrumentSwitcherTogglerTextStyled,
  InstrumentSwitcherTogglerIconStyled,
} from './styled';

export const InstrumentSwitcher = () => (
  <InstrumentSwitcherStyled>
    <InstrumentSwitcherTitleStyled>Instrument:</InstrumentSwitcherTitleStyled>

    <InstrumentSwitcherTogglerStyled>
      <InstrumentSwitcherTogglerWrapperStyled>
        <InstrumentSwitcherTogglerTextStyled>Ukulele</InstrumentSwitcherTogglerTextStyled>
        <InstrumentSwitcherTogglerIconStyled path={mdiChevronDown} size={0.7} color="#232323" />
      </InstrumentSwitcherTogglerWrapperStyled>
    </InstrumentSwitcherTogglerStyled>
  </InstrumentSwitcherStyled>
);
