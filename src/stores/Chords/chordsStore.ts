import { makeAutoObservable } from 'mobx';
import { EInstrument } from '@/domain/constants';
import { TChord } from '@/domain/types';
import { guitarChords } from '@/data/guitarChords';
import { ukuleleChords } from '@/data/ukuleleChords';

class ChordsStore {
  chords: Record<EInstrument, TChord[]> = {
    [EInstrument.guitar]: guitarChords,
    [EInstrument.ukulele]: ukuleleChords,
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const chordsStore = new ChordsStore();

export default chordsStore;
