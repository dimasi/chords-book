import settingsStore from './Settings/settingsStore';
import songsStore from './Songs/songsStore';

class RootStore {
  settingsStore = settingsStore;

  songsStore = songsStore;
}

export default RootStore;
