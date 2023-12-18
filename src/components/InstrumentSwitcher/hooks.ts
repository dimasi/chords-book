import React, { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { useStores } from '@/stores/rootStoreContext';
import { TInstrumentSwitcherInstrument } from '@/components/InstrumentSwitcher/types';
import { EInstrument } from '@/domain/constants';

export const useInstrumentSwitcher = () => {
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

  let sortedInstruments = getSortedInstruments();

  const isActiveInstrument = (instrument: TInstrumentSwitcherInstrument) => instrument.value === currentInstrumentValue;

  const handleDropdownItemClick = (event: React.MouseEvent<HTMLElement>, instrument: TInstrumentSwitcherInstrument) => {
    event.stopPropagation();
    switchInstrument(instrument.value);
    sortedInstruments = getSortedInstruments();
    setDropdownOpen(false);
  };

  const handleDropdownActiveItemClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDropdownOpen(false);
  };

  return {
    currentInstrument,
    dropdownRef,
    dropdownOpen,
    sortedInstruments,
    handleDropdownActiveItemClick,
    handleDropdownItemClick,
    isActiveInstrument,
    setDropdownOpen,
  };
};
