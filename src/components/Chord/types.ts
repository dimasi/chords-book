import { TChord } from '@/domain/types';
import { EInstrument } from '@/domain/constants';

export interface IChordProps {
  chordData: TChord;
  instrument: EInstrument;
  active?: boolean;
  onClick?: (chord: TChord) => void;
}

export interface IChordNameProps {
  chordData: TChord;
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
  chordData: TChord;
}

export interface IUnusedStringsProps {
  chordData: TChord;
}

export interface IStartFretProps {
  chordData: TChord;
  instrument: EInstrument;
}

export interface IDotsProps {
  chordData: TChord;
}

export interface IBarreProps {
  chordData: TChord;
}

export interface IChordStyledProps {
  $active?: boolean;
}

export type TChordWithActiveFlag = TChord & {
  active?: boolean;
};
