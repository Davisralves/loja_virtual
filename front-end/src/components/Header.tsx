import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/Compras">Compras</Link>
      <Link to="/perfil">Perfil</Link>
    </header>
  );
}

export default Header;