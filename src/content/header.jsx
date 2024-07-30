import { Link } from 'react-router-dom'

function Header() {
    return (
        <header >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Skins">Skins</Link>
                <Link to="/Stikers">Stikers</Link>
                <Link to="/BuscarSkins">Busca Skins</Link>
                <Link to="/BuscarStikers">Busca Stikers</Link>
            </nav>
        </header>
    )    
}

export default Header