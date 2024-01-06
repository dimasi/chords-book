import { TChord } from '@/domain/types';

const chordsAb: TChord[] = [
  {
    barre: [1, 1, 1, 1, 1, 1],
    dots: [null, 3, 3, 2, null, null],
    fret: 4,
    group: 'Ab',
    name: 'Ab',
  },
  {
    barre: [1, 1, 1, 1, 1, 1],
    dots: [null, 3, 3, null, null, null],
    fret: 4,
    group: 'Ab',
    name: 'Abm/G#m',
  },
  {
    barre: [1, 1, 1, 1, 1, 1],
    dots: [4, 3, null, null, null, null],
    fret: null,
    group: 'Ab',
    name: 'Ab6',
  },
  {
    barre: [null, null, 1, 1, 1, 1],
    dots: [-1, -1, null, null, null, 2],
    fret: null,
    group: 'Ab',
    name: 'Ab7',
  },
  {
    barre: [null, null, 1, 1, 1, 1],
    dots: [-1, -1, null, 3, null, 2],
    fret: null,
    group: 'Ab',
    name: 'Ab9',
  },
  {
    barre: [null, null, null, 4, 4, 4],
    dots: [-1, -1, -1, null, null, null],
    fret: null,
    group: 'Ab',
    name: 'Abm6/G#m6',
  },
  {
    dots: [-1, -1, 1, 1, 0, 2],
    fret: null,
    group: 'Ab',
    name: 'Abm7/G#m7',
  },
  {
    dots: [-1, -1, 1, 1, 1, 3],
    fret: null,
    group: 'Ab',
    name: 'Abmaj7',
  },
  {
    dots: [-1, -1, 0, 1, 0, 1],
    fret: null,
    group: 'Ab',
    name: 'Abdim/G#dim',
  },
  {
    dots: [-1, -1, 2, 1, 1, 0],
    fret: null,
    group: 'Ab',
    name: 'Ab+/Abaug', // @todo проверить одно и то же ли + и aug
  },
  {
    barre: [null, null, 1, 1, 1, 1],
    dots: [-1, -1, null, null, 2, 4],
    fret: null,
    group: 'Ab',
    name: 'Absus',
  },
];

export default chordsAb;
