import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../css/menu.css'; 
import '../css/colors.css';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
      <div
        className="menu-icon"
        onClick={handleMenuToggle}
        role="button"
        tabIndex="0" 
        aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
      >
        {isMenuOpen ? <AiOutlineClose className="icon icon-hamburger" /> : <AiOutlineMenu className="icon icon-hamburger" />}
      </div>
      {isMenuOpen && (
        <div className="menu-list">
          <ul className="nav-flex">
            <li>
              <Link to="/" onClick={handleMenuClose}>Página Inicial</Link>
            </li>
            <li>
              <Link to="/sobre" onClick={handleMenuClose}>Sobre mim</Link>
            </li>
            <li>
              <Link to="/youtube" onClick={handleMenuClose}>Canal Youtube</Link>
            </li>
            <li>
              <Link to="/projetos-gratuitos" onClick={handleMenuClose}>Projetos Gratuitos</Link>
            </li>
            <li>
              <Link to="/projetos-pagos" onClick={handleMenuClose}>Projetos Pagos</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;
