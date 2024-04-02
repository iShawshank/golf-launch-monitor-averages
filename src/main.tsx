import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Home from './routes/Home.tsx';
import Donate from './routes/Donate.tsx';
import Tour from './routes/Tour.tsx';
import Club from './routes/Club.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/donate', element: <Donate /> },
      { path: '/:tour', element: <Tour /> },
      { path: '/:tour/:club', element: <Club /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
