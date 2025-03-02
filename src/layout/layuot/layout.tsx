import { Outlet } from 'react-router-dom';
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
