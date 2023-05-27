import { NavLink } from "react-router-dom";

import './navbar.scss';

const NavBar = () => {
  return (
    <>
      <nav className="top-nav">
        <ul className="top-nav-items">
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} 
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} 
              to="/heroes"
            >
              Персонажи
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} 
              to="/locations">
                Локации
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} 
              to="/episodes">
                Эпизоды
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
    // <nav className="rm-heroes_nav">
    //   <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/">Главная</NavLink>
    //   <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/heroes">Персонажи</NavLink>
    //   <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/locations">Локации</NavLink>
    //   <NavLink className={({ isActive }) => isActive ? 'rm-heroes_nav__active' : null} to="/episodes">Эпизоды</NavLink>
    // </nav>
    
  )
}

export default NavBar;
