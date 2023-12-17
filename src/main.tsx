import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import './index.css';
import RootStore from '@/stores/RootStore';
import { RootStoreContext } from '@/stores/rootStoreContext';

const container = document.getElementById('root');
const rootStore = new RootStore();

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <RootStoreContext.Provider value={rootStore}>
        <RouterProvider router={router} />
      </RootStoreContext.Provider>
    </React.StrictMode>,
  );
}
