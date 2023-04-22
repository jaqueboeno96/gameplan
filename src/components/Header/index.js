import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to='/'> <span>Game</span>Plan </Link>
            <Link className='lista' to='/salvos'> Meus jogos </Link>

            <Link className='cadastro' to='/cadastro'> Cadastrar </Link>

        </header>
    )
}

export default Header;