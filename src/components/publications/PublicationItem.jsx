import React from 'react';

const Publication = (props) => {
  return (
    <li className='publication-list_item'>
      <p className='publication_title'>{'– ' + props.title}</p>
    </li>
  );
};

export default Publication;
