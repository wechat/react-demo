import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from '../views/Home';
import LoginPage from '../views/Login';
import AboutPage from '../views/About';
import ErrorPage from '../views/Error';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
