import { TChordData } from '@/domain/types';
import { EInstrument } from '@/domain/constants';

export interface IChordNameProps {
  chordData: TChordData;
  instrument: EInstrument;
}

export interface INeckProps {
  instrument: EInstrument;
}

export interface IStringsProps {
  instrument: EInstrument;
}

export interface IFretsProps {
  instrument: EInstrument;
}

export interface IOpenStringsProps {
  chordData: TChordData;
}

export interface IUnusedStringsProps {
  chordData: TChordData;
}

export interface IStartFretProps {
  chordData: TChordData;
  instrument: EInstrument;
}

export interface IDotsProps {
  chordData: TChordData;
}

export interface IBarreProps {
  chordData: TChordData;
}
