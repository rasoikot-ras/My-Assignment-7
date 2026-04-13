import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <h2>Homepage</h2>
    },
    {
      path: '/',
      element: <h2>All Friends</h2>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
