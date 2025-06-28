import './header.css';
import { NavLink } from 'react-router-dom';
import logonegro from '../assets/logo-fondo-nrego.webp';
const Header = () => {
  return (
    <header className="header">
     <div className="Container-logo">
               <img
                 src={logonegro}
                 alt="Logo header"
                 className="logo-imagen"
               />
               <h1 className="logo">Montenegro's</h1>
             </div>
      
      <nav className="nav">
        <NavLink to="/"    className="nav-link">Inicio</NavLink>
        <NavLink to="/register" className="nav-link">Registro</NavLink>
        <NavLink to="/location" className="nav-link">Ubicación</NavLink>
        <NavLink to="/login" className="nav-link">Ingresar</NavLink>
      </nav>
    </header>
  );
};

export default Header;