import React from 'react';
import { Link } from 'react-router-dom';

const NavDash = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Inicio</Link>
        </li>
        <li>
          <Link to="/clima">Clima</Link>
        </li>
        <li>
          <Link to="/mapa">Mapa</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/clima2">Clima 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavDash;