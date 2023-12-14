import './App.css';

import Chord from '@/components/Chord';
import { EInstrument } from '@/domain/constants';
import { TChordData } from '@/domain/types';

function App() {
  const guitarChordData: TChordData = {
    barre: [null, 1, 1, 1, 1, 1],
    dots: [-1, null, 3, null, 4, null],
    fret: null,
    name: 'A#7sus4',
  };

  const ukuleleChordData: TChordData = {
    barre: null,
    dots: [1, 3, 1, 1],
    fret: null,
    name: 'A#7sus4',
  };

  return (
    <div className="App">
      <Chord chordData={ukuleleChordData} instrument={EInstrument.ukulele} />
      <Chord chordData={guitarChordData} instrument={EInstrument.guitar} />
    </div>
  );
}

export default App;
