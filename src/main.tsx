import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './style/global.scss';
import Root from "./page/Root";
import ErrorPage from "./page/ErrorPage";
import Contact from "./page/Contact";
import { getContactById, loaderContactList } from "./util/loader.ts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loaderContactList,
    children: [
      {
        path: '/contact/:contactId',
        element: <Contact />,
        loader: getContactById,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
