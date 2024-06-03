import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <h1>
            Shop <span className="span">House</span>
          </h1>
        </div>
        <nav className="nav-list">
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="nav-link">
                Suporte
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <ShoppingCartIcon className="shopping-cart" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="login-button">
          <button>
            <Link to="/login">Entrar</Link>
          </button>
        </div>
      </nav>
    </header>
  );
}
