import { createBrowserRouter, redirect } from 'react-router-dom';
import { LayoutDefault } from '@/layouts/Default';
import { ErrorPage } from '@/pages/Error';
import { AboutPage } from '@/pages/About';
import { SongsListPage } from '@/pages/SongsList';
import { SongPage } from '@/pages/Song';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutDefault />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect('/songs'),
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'songs',
        element: <SongsListPage />,
      },
      {
        path: 'songs/:songId',
        element: <SongPage />,
      },
    ],
  },
]);

export default router;
