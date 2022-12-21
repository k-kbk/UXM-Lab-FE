import React from 'react';

const Publication = (props) => {
  return (
    <li className='publication_item'>
      <p className='font-medium text-sm md:text-base'>{'– ' + props.title}</p>
    </li>
  );
};

export default Publication;
