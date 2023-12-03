import { BrowserRouter, Routes } from 'react-router-dom';

const LoginLayout = ({ children }) => (
    <BrowserRouter>
        <Routes>{children}</Routes>
    </BrowserRouter>
);

export default LoginLayout;
