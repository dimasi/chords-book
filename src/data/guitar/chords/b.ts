import { TChord } from '@/domain/types';

const chordsB: TChord[] = [
  {
    barre: [null, 2, 2, 2, 2, 2],
    dots: [null, null, 4, 4, 4, null],
    fret: 4,
    group: 'B',
    name: 'B',
  },
  {
    barre: [null, 2, 2, 2, 2, 2],
    dots: [-1, null, 4, 4, 3, null],
    fret: 4,
    group: 'B',
    name: 'Bm',
  },
  {
    barre: [2, 2, 2, 2, 2, 2],
    dots: [null, null, 4, 4, 4, 4],
    fret: null,
    group: 'B',
    name: 'B6',
  },
  {
    dots: [-1, 2, 1, 2, 0, 2],
    fret: null,
    group: 'B',
    name: 'B7',
  },
  {
    dots: [-1, 2, 1, 2, 2, 2],
    fret: null,
    group: 'B',
    name: 'B9',
  },
  {
    dots: [-1, -1, 4, 4, 3, 4],
    fret: null,
    group: 'B',
    name: 'Bm6',
  },
  {
    barre: [null, 1, 1, 1, 1, 1],
    dots: [-1, null, 4, null, 3, null],
    fret: 2,
    group: 'B',
    name: 'Bm7',
  },
  {
    dots: [-1, 2, 4, 3, 4, -1],
    fret: null,
    group: 'B',
    name: 'Bmaj7',
  },
  {
    dots: [-1, -1, 0, 1, 0, 1],
    fret: null,
    group: 'B',
    name: 'Bdim',
  },
  {
    dots: [-1, -1, 3, 2, 2, 1],
    fret: 3,
    group: 'B',
    name: 'B+/Baug', // @todo проверить одно и то же ли + и aug
  },
  {
    dots: [-1, -1, 3, 3, 4, 1],
    fret: 2,
    group: 'B',
    name: 'Bsus',
  },
];

export default chordsB;
