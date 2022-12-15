import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = 'text-myIndigo py-1 border-b-2 border-myIndigo';
const defaultStyle = 'py-2 hover:opacity-50 ';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/member'>
            Member
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/news'>
            News
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/research'>
            Research
          </NavLink>
        </li>
        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/publication'>
            Publication
          </NavLink>
        </li>

        <li className='nav__item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/gallery'>
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
