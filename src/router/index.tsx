import { createBrowserRouter, RouterProvider } from 'react-router';

import HomePage from '../views/Home';
import ErrorPage from '../views/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
