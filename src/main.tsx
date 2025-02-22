import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layout/layuot/layout';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Error from './pages/error/error';
import Movie from './pages/movie/movie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/movie/:id',
        element: <Movie />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
      {/* <App /> */}
  </StrictMode>
);
