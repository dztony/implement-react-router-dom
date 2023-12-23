import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../page/ErrorPage";
import { getContactById, loaderContactList } from "../util/loader.ts";
import React from "react";

const router = createBrowserRouter([
  {
    path: '/',
    lazy: async() => {
      const Root = (await import('../page/Root')).default;
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
          const Contact = (await import('../page/Contact')).default;
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
          const Edit = (await import('../page/Edit')).default;
          return {
            Component: Edit,
          };
        },
        loader: getContactById,
      },
    ],
  },
]);


function StandardApp() {
  return (
    <RouterProvider router={router} />
  );
}

export default StandardApp;
