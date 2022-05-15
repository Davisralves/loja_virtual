import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/context";
import { IUserContext } from "../../Interfaces";
import './header.css';
import { useLocation } from "react-router-dom";

function Header() {
const user: IUserContext = useContext(AppContext);
const location = useLocation();
  return (
    <header>
      <div data-testid="userName"><b>Olá {user.name}</b></div>
      <div data-testid="cart">
      {location.pathname.includes('/home') ? null : <Link to="/home">Home</Link>}
      {user.admin ? <Link to="/admin">Admin</Link> : null}
      </div>
      <div data-testid="coins">
        Moedas: {user.coins}
      </div>
    </header>
  );
}

export default Header;