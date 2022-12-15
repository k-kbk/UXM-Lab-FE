import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = 'text-myIndigo py-1 border-b-2 border-myIndigo';
const defaultStyle = 'py-2 hover:opacity-50 ';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list_item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-list_item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/members'>
            Members
          </NavLink>
        </li>
        <li className='nav-list_item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/studies'>
            Studies
          </NavLink>
        </li>
        <li className='nav-list_item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/publications'>
            Publications
          </NavLink>
        </li>
        <li className='nav-list_item'>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/news'>
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
