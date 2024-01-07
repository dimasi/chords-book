import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { ETheme } from '@/constants';
import { EInstrument } from '@/domain/constants';

class SettingsStore {
  instrument: EInstrument = EInstrument.ukulele;

  theme: ETheme = ETheme.light;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'SettingsStore',
      properties: ['instrument', 'theme'],
      storage: window.localStorage,
    });
  }

  switchInstrument = (instrument: EInstrument) => {
    this.instrument = instrument;
  };

  switchTheme = (theme: ETheme) => {
    this.theme = theme;
  };
}

const settingsStore = new SettingsStore();

export default settingsStore;
