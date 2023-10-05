import { createBrowserRouter } from 'react-router-dom';

import { Root } from '../Root';
import { DashboardLayout } from '../layouts';
import { BearPage, Dashboard } from '../pages';


export const router = createBrowserRouter( [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Dashboard />
            // element: <Contact />,
          },
          {
            path: 'bears',
            element: <BearPage />
            // element: <Contact />,
          },

        ]
      },
      {
        path: 'dashboard',
        // element: <Dashboard />,
        // loader: ({ request }) =>
        //   fetch('/api/dashboard.json', {
        //     signal: request.signal,
        //   }),
      },
      // {
      //   element: <AuthLayout />,
      //   children: [
      //     {
      //       path: 'login',
      //       element: <Login />,
      //       loader: redirectIfUser,
      //     },
      //     {
      //       path: 'logout',
      //       action: logoutUser,
      //     },
      //   ],
      // },
    ],
  },
] );