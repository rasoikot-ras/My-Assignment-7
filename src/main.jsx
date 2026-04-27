import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <h2>Homepage</h2>
        },
        {
          path: "/apps",
          element: <h2>Apps</h2>
        },
      ],
      errorElement: <h2>This page not found</h2>
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
