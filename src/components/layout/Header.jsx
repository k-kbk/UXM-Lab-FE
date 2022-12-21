import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Menu from '../../assets/menu.png';
import Close from '../../assets/close.png';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-top'>
          <div onClick={openMenu ? handleMenu : undefined}>
            <Link to='/' className='font-bold text-2xl md:text-3xl'>
              uxm lab.
            </Link>
          </div>
          <div className='block md:hidden p-2 -mr-2'>
            {openMenu ? (
              <img
                src={Close}
                alt='close'
                className='w-6 h-6'
                onClick={handleMenu}
              />
            ) : (
              <img
                src={Menu}
                alt='menu'
                className='w-6 h-6'
                onClick={handleMenu}
              />
            )}
          </div>
        </div>
        <Nav openMenu={openMenu} handleMenu={handleMenu} />
      </div>
    </header>
  );
};

export default Header;
