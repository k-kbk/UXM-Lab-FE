import React from 'react';
import Code from '../../assets/code.png';
import DownButton from './DownButton';

const Index = (props) => {
  return (
    <article className='home-article_1'>
      <div className='article-container_1'>
        <div className='mt-16 mb-6 md:mt-0 md:mb-0 mx-8 md:mx-10 text-center text-zinc-800'>
          <p className='font-semibold text-3xl md:text-5xl'>
            MyongJi University
          </p>
          <p className='font-semibold text-3xl md:text-5xl mb-3 md:mb-5'>
            UX Media Laboratory
          </p>
          <p className='font-semibold text-xl md:text-2xl'>
            명지대학교 UX Media 연구실
          </p>
        </div>
        <div className='my-5 md:my-0'>
          <img
            src={Code}
            alt='metaverse'
            className='w-44 h-44 md:w-80 md:h-80'
          />
        </div>
      </div>
      <DownButton onMoveToElement={props.onMoveToElement} />
    </article>
  );
};

export default Index;
