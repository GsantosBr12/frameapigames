import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Skins from './skins'
import SearchPageColections from './components/buscarColections'
import SearchPageStikers from './components/buscarStikers'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Skins" element={<Skins />} ></Route>
                <Route path="/Stikers" element={<SearchPageStikers />} ></Route>
                <Route path="/Colections" element={<SearchPageColections />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes