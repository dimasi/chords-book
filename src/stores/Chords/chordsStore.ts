import { makeAutoObservable } from 'mobx';
import { EInstrument } from '@/domain/constants';
import { TChord } from '@/domain/types';
import { guitarChords } from '@/data/guitarChords';
import { ukuleleChords } from '@/data/ukuleleChords';

const getChordsByGroups = (chords: TChord[]) =>
  chords.reduce((chordsByGroups: Record<string, TChord[]>, chord) => {
    // eslint-disable-next-line no-param-reassign
    if (!chordsByGroups[chord.group]) chordsByGroups[chord.group] = [];
    chordsByGroups[chord.group].push({
      ...chord,
    });
    return chordsByGroups;
  }, {});

class ChordsStore {
  chords: Record<EInstrument, TChord[]> = {
    [EInstrument.guitar]: guitarChords,
    [EInstrument.ukulele]: ukuleleChords,
  };

  get chordsByGroups() {
    return {
      [EInstrument.guitar]: getChordsByGroups(this.chords[EInstrument.guitar]),
      [EInstrument.ukulele]: getChordsByGroups(this.chords[EInstrument.ukulele]),
    };
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const chordsStore = new ChordsStore();

export default chordsStore;
