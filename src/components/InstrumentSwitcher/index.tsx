import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStores } from '@/stores/rootStoreContext';
import { themeConstants } from '@/themeConstants';
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
    settingsStore: { theme },
  } = useStores();

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
      <InstrumentSwitcherTitleStyled theme={theme}>Instrument:</InstrumentSwitcherTitleStyled>

      <InstrumentSwitcherTogglerStyled ref={dropdownRef} onClick={() => setDropdownOpen(true)}>
        <InstrumentSwitcherTogglerWrapperStyled>
          <InstrumentSwitcherTogglerTextStyled theme={theme}>
            {currentInstrument?.title}
          </InstrumentSwitcherTogglerTextStyled>

          <InstrumentSwitcherTogglerIconStyled
            path={mdiChevronDown}
            size={0.7}
            color={themeConstants[theme].instrumentSwitcherTogglerColor}
          />
        </InstrumentSwitcherTogglerWrapperStyled>

        {dropdownOpen ? (
          <InstrumentSwitcherDropdownStyled theme={theme}>
            {sortedInstruments.map((instrument) =>
              isActiveInstrument(instrument) ? (
                <InstrumentSwitcherDropdownActiveItemStyled
                  key={instrument.title}
                  theme={theme}
                  onClick={handleDropdownActiveItemClick}
                >
                  {instrument.title}
                  <InstrumentSwitcherDropdownActiveItemTogglerIconStyled
                    path={mdiChevronUp}
                    size={0.7}
                    color={themeConstants[theme].instrumentSwitcherTogglerColor}
                  />
                </InstrumentSwitcherDropdownActiveItemStyled>
              ) : (
                <InstrumentSwitcherDropdownItemStyled
                  key={instrument.title}
                  theme={theme}
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
