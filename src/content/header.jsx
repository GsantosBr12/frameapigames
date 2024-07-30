import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header} >
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