export type TChord = {
  dots: Array<number | null>;
  fret: number | null;
  group: string;
  name: string;
  barre?: Array<number | null> | null;
};

export type TSong = {
  id: number;
  name: string;
  author?: string;
  chords: string[];
};
