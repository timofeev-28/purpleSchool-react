import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Header from '../../components/header/header';
import { UserContextProvider } from '../../context/user.context';

export function Layout() {
    return (
        <UserContextProvider>
            <Header />
            <main>
                <Outlet />
            </main>
        </UserContextProvider>
    )
}
