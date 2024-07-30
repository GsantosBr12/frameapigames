import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import SearchPageSkins from './components/buscarSkins'
import SearchPageStikers from './components/buscarStikers'
import Skins from './skins'
import Stikers from './stikers'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Skins" element={<Skins />} ></Route>
                <Route path="/Stikers" element={<Stikers />} ></Route>
                <Route path="/BuscarSkins" element={<SearchPageSkins />} ></Route>
                <Route path="/BuscarStikers" element={<SearchPageStikers />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes