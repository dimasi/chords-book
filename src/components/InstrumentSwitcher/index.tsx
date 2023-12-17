import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { EInstrument } from '@/domain/constants';
import { useStores } from '@/stores/rootStoreContext';
import { TInstrumentSwitcherInstrument } from './types';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useDetectClickOutside({ onTriggered: () => setDropdownOpen(false) });

  const {
    settingsStore: { instrument: currentInstrumentValue, switchInstrument },
  } = useStores();

  const instruments: TInstrumentSwitcherInstrument[] = [
    {
      title: 'Guitar',
      value: EInstrument.guitar,
    },
    {
      title: 'Ukulele',
      value: EInstrument.ukulele,
    },
  ];

  const currentInstrument = instruments.find(
    (instrument) => instrument.value === currentInstrumentValue,
  ) as TInstrumentSwitcherInstrument;

  const getSortedInstruments = () => [
    currentInstrument,
    ...instruments.filter(({ value }) => value !== currentInstrumentValue),
  ];

  let sortedInstrument = getSortedInstruments();

  const isActiveInstrument = (instrument: TInstrumentSwitcherInstrument) => instrument.value === currentInstrumentValue;

  const handleDropdownItemClick = (event: React.MouseEvent<HTMLElement>, instrument: TInstrumentSwitcherInstrument) => {
    event.stopPropagation();
    switchInstrument(instrument.value);
    sortedInstrument = getSortedInstruments();
    setDropdownOpen(false);
  };

  const handleDropdownActiveItemClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDropdownOpen(false);
  };

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
            {sortedInstrument.map((instrument) =>
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
