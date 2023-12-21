import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './style/global.scss';
import Root from "./page/Root";
import ErrorPage from "./page/ErrorPage";
import Contact from "./page/Contact";
import { getContactById, loaderContactList } from "./util/loader.ts";
import Edit from "./page/Edit";

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async() => {
      const Root = (await import('../src/page/Root')).default;
      return {
        Component: Root,
      };
    },
    errorElement: <ErrorPage />,
    loader: loaderContactList,
    children: [
      {
        path: '/contact/:contactId',
        // element: <Contact />,
        lazy: async() => {
          const Contact = (await import('../src/page/Contact')).default;
          return {
            Component: Contact,
          };
        },
        loader: getContactById,
      },
      {
        path: '/contact/:contactId/edit',
        // element: <Edit />,
        lazy: async() => {
          const Edit = (await import('../src/page/Edit')).default;
          return {
            Component: Edit,
          };
        },
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
