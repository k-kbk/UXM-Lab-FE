import React from 'react';
import useMoveScroll from '../hooks/useMoveScroll';
import Metaverse from '../assets/metaverse.png';
import Arrow from '../assets/down-arrow.png';

const intro = '';

const Home = () => {
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <main className='main'>
      <div className='main-container'>
        <article className='home-article__1'>
          <div className='article-container__1'>
            <div>
              <p className='font-semibold text-5xl'>MyongJi University</p>
              <p className='font-semibold text-5xl mb-3'>UX Media Laboratory</p>
              <p className='font-semibold text-2xl'>
                명지대학교 UX Media 연구실
              </p>
            </div>
            <div>
              <img src={Metaverse} alt='metaverse' className='w-104 h-104' />
            </div>
          </div>
          <button onClick={onMoveToElement} className='down-button'>
            <img src={Arrow} alt='arrow' className='w-8 h-8' />
          </button>
        </article>
        <article ref={element} className='home-article__2'>
          <div className='content__2'></div>
        </article>
        <article className='home-article__3'>
          <div className='content__3'></div>
        </article>
      </div>
    </main>
  );
};

export default Home;
