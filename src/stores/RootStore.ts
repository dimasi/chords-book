import chordsStore from './Chords/chordsStore';
import settingsStore from './Settings/settingsStore';
import songsStore from './Songs/songsStore';

class RootStore {
  chordsStore = chordsStore;

  settingsStore = settingsStore;

  songsStore = songsStore;
}

export default RootStore;
