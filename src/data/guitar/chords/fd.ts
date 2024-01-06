import { TChord } from '@/domain/types';

const chordsFd: TChord[] = [
  {
    barre: [2, 2, 2, 2, 2, 2],
    dots: [null, 4, 4, 3, null, null],
    fret: null,
    group: 'F#',
    name: 'F#',
  },
  {
    barre: [2, 2, 2, 2, 2, 2],
    dots: [null, 4, 4, null, null, null],
    fret: null,
    group: 'F#',
    name: 'F#m',
  },
  {
    dots: [-1, 4, 4, 3, 4, -1],
    fret: null,
    group: 'F#',
    name: 'F#6/Gb6',
  },
  {
    dots: [-1, -1, 4, 3, 2, 0],
    fret: null,
    group: 'F#',
    name: 'F#7',
  },
  {
    dots: [-1, -1, 2, 1, 3, 2],
    fret: 3,
    group: 'F#',
    name: 'F#9',
  },
  {
    dots: [-1, -1, 1, 2, 2, 2],
    fret: null,
    group: 'F#',
    name: 'F#m6',
  },
  {
    barre: [null, null, 2, 2, 2, 2],
    dots: [-1, -1, null, null, null, null],
    fret: null,
    group: 'F#',
    name: 'F#m7',
  },
  {
    dots: [-1, -1, 4, 3, 2, 1],
    fret: null,
    group: 'F#',
    name: 'F#maj7/Gbmaj7',
  },
  {
    dots: [-1, -1, 1, 2, 1, 2],
    fret: null,
    group: 'F#',
    name: 'F#dim',
  },
  {
    dots: [-1, -1, 4, 3, 3, 2],
    fret: null,
    group: 'F#',
    name: 'F#+/F#aug/Gb+/Gbaug',
  },
  {
    barre: [null, null, 2, 2, 2, 2],
    dots: [-1, -1, 4, 4, null, null],
    fret: null,
    group: 'F#',
    name: 'F#sus',
  },
];

export default chordsFd;
