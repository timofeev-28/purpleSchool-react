import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout/layuot/layout';
import Film from '../components/film/film';
import UserProfile from '../components/userProfile/userProfile';
import MainContent from '../components/mainContent/mainContent';
import Entrance from '../components/entrance/entrance';
import FavoritesFilms from '../components/favoritesFilms/favoritesFilms';
import ErrorPage from '../components/errorPage/errorPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
            path: '/',
            element: <MainContent />
            },
            {
            path: '/login',
            element: <Entrance />
            },
            {
            path: '/favorites',
            element: <FavoritesFilms />
            },
            {
            path: '/movie/:id',
            element: <Film />
            },
            {
            path: '/user',
            element: <UserProfile />
            },
            {
            path: '*',
            element: <ErrorPage />
            }
        ]
    }
])
