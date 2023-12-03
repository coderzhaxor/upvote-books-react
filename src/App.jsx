import { Route } from 'react-router-dom';

import UserLayout from './layout/UserLayout';
import LoginLayout from './layout/LoginLayout';

import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Purchased from './pages/Purchased/Purchased';
import Vote from './pages/Vote/Vote';
import About from './pages/About/About';

import UserProfile from './pages/Profile/UserProfile';

import Login from './pages/Auth/LoginUser';
import RegisterUser from './pages/Auth/Register';

export default function App() {
    return (
        <>
            <UserLayout>
                <Route index Component={Home} />
                <Route path="/browse" Component={Browse} />
                <Route path="/purchased" Component={Purchased} />
                <Route path="/vote" Component={Vote} />
                <Route path="/about" Component={About} />
                <Route path="/profile" Component={UserProfile} />
            </UserLayout>

            {/* <LoginLayout>
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={RegisterUser} />
            </LoginLayout> */}
        </>
    );
}
