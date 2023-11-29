import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Browse from './pages/Browse/Browse';
import Purchased from './pages/Purchased/Purchased';
import Vote from './pages/Vote/Vote';
import About from './pages/About/About';
import Login from './pages/Login/Login';

export default function App() {
    return (
        <BrowserRouter>
            {/* <Navbar />
            <main>
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/browse" Component={Browse} />
                    <Route exact path="/purchased" Component={Purchased} />
                    <Route exact path="/vote" Component={Vote} />
                    <Route exact path="/about" Component={About} />
                </Routes>
            </main>
            <Footer /> */}

            <Routes>
                <Route exact path="/login" Component={Login} />
            </Routes>
        </BrowserRouter>
    );
}
