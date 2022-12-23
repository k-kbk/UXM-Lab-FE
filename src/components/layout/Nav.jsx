import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle =
  'block text-myBlue px-4 md:px-0 py-3.5 md:py-1 md:border-b-2 border-myBlue rounded-sm md:rounded-none active:bg-myGray md:active:bg-white bg-opacity-30';
const defaultStyle =
  'block px-4 md:px-0 py-3.5 md:py-1 md:hover:opacity-50 rounded-sm md:rounded-none active:bg-myGray md:active:bg-white bg-opacity-30';

const Nav = ({ openMenu, handleMenu }) => {
  return (
    <nav className={openMenu ? 'nav flex' : 'nav hidden'}>
      <ul className='nav-list'>
        <li
          className='nav-list_item '
          onClick={openMenu ? handleMenu : undefined}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/members'>
            Members
          </NavLink>
        </li>
        {/* <li
          className='nav-list_item'
          onClick={openMenu ? handleMenu : undefined}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/studies'>
            Studies
          </NavLink>
        </li> */}
        <li
          className='nav-list_item'
          onClick={openMenu ? handleMenu : undefined}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/publications'>
            Publications
          </NavLink>
        </li>
        <li
          className='nav-list_item'
          onClick={openMenu ? handleMenu : undefined}>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeStyle : defaultStyle
            }
            to='/notices'>
            Notices
          </NavLink>
        </li>
        <li
          className='nav-list_item'
          onClick={openMenu ? handleMenu : undefined}>
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
