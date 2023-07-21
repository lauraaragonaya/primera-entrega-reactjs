import CartWidget from "./CartWidget";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <button>Home</button>
        <button>Sobre Nosotros</button>
        <button>Productos</button>
      </div>

      <CartWidget />
    </nav>
  );
}

export default Navbar;
