export type TChordData = {
  dots: Array<number | null>;
  fret: number | null;
  group: string;
  name: string;
  barre?: Array<number | null> | null;
};
