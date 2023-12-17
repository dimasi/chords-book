import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { EInstrument } from '@/domain/constants';

class SettingsStore {
  instrument: EInstrument = EInstrument.ukulele;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'SettingsStore',
      properties: ['instrument'],
      storage: window.localStorage,
    });
  }

  switchInstrument = (instrument: EInstrument) => {
    this.instrument = instrument;
  };
}

const settingsStore = new SettingsStore();

export default settingsStore;
