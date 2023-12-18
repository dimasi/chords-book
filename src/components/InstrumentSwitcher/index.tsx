import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useInstrumentSwitcher } from './hooks';
import {
  InstrumentSwitcherStyled,
  InstrumentSwitcherTitleStyled,
  InstrumentSwitcherTogglerStyled,
  InstrumentSwitcherTogglerWrapperStyled,
  InstrumentSwitcherTogglerTextStyled,
  InstrumentSwitcherTogglerIconStyled,
  InstrumentSwitcherDropdownStyled,
  InstrumentSwitcherDropdownActiveItemStyled,
  InstrumentSwitcherDropdownItemStyled,
  InstrumentSwitcherDropdownActiveItemTogglerIconStyled,
} from './styled';

export const InstrumentSwitcher = observer(() => {
  const {
    currentInstrument,
    dropdownRef,
    dropdownOpen,
    sortedInstruments,
    handleDropdownActiveItemClick,
    handleDropdownItemClick,
    isActiveInstrument,
    setDropdownOpen,
  } = useInstrumentSwitcher();

  return (
    <InstrumentSwitcherStyled>
      <InstrumentSwitcherTitleStyled>Instrument:</InstrumentSwitcherTitleStyled>

      <InstrumentSwitcherTogglerStyled ref={dropdownRef} onClick={() => setDropdownOpen(true)}>
        <InstrumentSwitcherTogglerWrapperStyled>
          <InstrumentSwitcherTogglerTextStyled>{currentInstrument?.title}</InstrumentSwitcherTogglerTextStyled>
          <InstrumentSwitcherTogglerIconStyled path={mdiChevronDown} size={0.7} color="#232323" />
        </InstrumentSwitcherTogglerWrapperStyled>

        {dropdownOpen ? (
          <InstrumentSwitcherDropdownStyled>
            {sortedInstruments.map((instrument) =>
              isActiveInstrument(instrument) ? (
                <InstrumentSwitcherDropdownActiveItemStyled
                  key={instrument.title}
                  onClick={handleDropdownActiveItemClick}
                >
                  {instrument.title}
                  <InstrumentSwitcherDropdownActiveItemTogglerIconStyled
                    path={mdiChevronUp}
                    size={0.7}
                    color="#232323"
                  />
                </InstrumentSwitcherDropdownActiveItemStyled>
              ) : (
                <InstrumentSwitcherDropdownItemStyled
                  key={instrument.title}
                  onClick={(event: React.MouseEvent<HTMLElement>) => handleDropdownItemClick(event, instrument)}
                >
                  {instrument.title}
                </InstrumentSwitcherDropdownItemStyled>
              ),
            )}
          </InstrumentSwitcherDropdownStyled>
        ) : null}
      </InstrumentSwitcherTogglerStyled>
    </InstrumentSwitcherStyled>
  );
});
