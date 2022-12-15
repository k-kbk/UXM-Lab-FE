import React from 'react';
import Metaverse from '../../assets/metaverse.png';
import Arrow from '../../assets/down-arrow.png';

const Index = (props) => {
  return (
    <article className='home-article__1'>
      <div className='article-container__1'>
        <div>
          <p className='font-semibold text-5xl'>MyongJi University</p>
          <p className='font-semibold text-5xl mb-3'>UX Media Laboratory</p>
          <p className='font-semibold text-2xl'>명지대학교 UX Media 연구실</p>
        </div>
        <div>
          <img src={Metaverse} alt='metaverse' className='w-104 h-104' />
        </div>
      </div>
      <button onClick={props.onMoveToElement} className='down-button'>
        <img src={Arrow} alt='arrow' className='w-8 h-8' />
      </button>
    </article>
  );
};

export default Index;
