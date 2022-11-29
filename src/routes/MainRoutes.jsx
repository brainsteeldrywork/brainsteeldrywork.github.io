import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FirstPage from "../firstPage";
import About from '../components/About';


export const MainRoutes = () => {
return (
    <BrowserRouter basename='/home'>
        <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route exact path='/sobre-nos' element={<About />} />
        </Routes>
    </BrowserRouter>
);
} ;