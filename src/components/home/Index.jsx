import React from 'react';
import Code from '../../assets/code.png';
import DownButton from './DownButton';

const Index = (props) => {
  return (
    <article className='home-article_1'>
      <div className='article-container_1'>
        <div className='my-12 sm:my-0 sm:mx-10 text-center text-zinc-800'>
          <p className='font-semibold text-3xl sm:text-5xl'>
            MyongJi University
          </p>
          <p className='font-semibold text-3xl sm:text-5xl mb-5'>
            UX Media Laboratory
          </p>
          <p className='font-semibold text-xl sm:text-2xl'>
            명지대학교 UX Media 연구실
          </p>
        </div>
        <div>
          <img
            src={Code}
            alt='metaverse'
            className='w-44 h-44 sm:w-80 sm:h-80'
          />
        </div>
      </div>
      <DownButton onMoveToElement={props.onMoveToElement} />
    </article>
  );
};

export default Index;
