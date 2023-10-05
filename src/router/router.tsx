import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import { DashboardLayout } from '../layouts';


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
            path: 'bears',
            element: <>Hola Mundo</>
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