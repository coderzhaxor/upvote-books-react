import React from 'react';

import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const UserLayout = ({ children }) => (
    <BrowserRouter>
        <Navbar />
        <main>
            <Routes>{children}</Routes>
        </main>
        <Footer />
    </BrowserRouter>
);

export default UserLayout;
