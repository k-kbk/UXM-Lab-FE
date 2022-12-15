import React from 'react';
import Index from '../components/home/Index';
import AboutUs from '../components/home/AboutUs';
import ContactUs from '../components/home/ContactUs';
import useMoveScroll from '../hooks/useMoveScroll';

const Home = () => {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <main className='home-main'>
      <div className='home-container'>
        <Index onMoveToElement={onMoveToElement} />
        <AboutUs element={element} />
        <ContactUs />
      </div>
    </main>
  );
};

export default Home;
