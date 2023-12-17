import { createContext, useContext } from 'react';
import RootStore from './RootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('There is no context for useStore. Did you wrap your App with the RootStoreContext.Provider?');
  }

  return context;
};
