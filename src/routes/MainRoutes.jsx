import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstPage from "../firstPage";
import About from '../components/About';


export const MainRoutes = () => {
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route exact path='/sobre-nos' element={<About />} />
        </Routes>
    </BrowserRouter>
);
} ;