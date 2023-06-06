import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from './theme-provider';
import HomePage from './pages/home';
import PPPage from './pages/privacy-policy';
import TOSPage from './pages/terms-of-use';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/privacy-policy',
    element: <PPPage />,
  },
  {
    path: '/tos',
    element: <TOSPage />,
  },
]);

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
