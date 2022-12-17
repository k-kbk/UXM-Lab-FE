import React from 'react';

const NoticeItem = ({ title, createdAt }) => {
  return (
    <li className='notice-list_item'>
      <span className='notice_title'>{title}</span>
      <span className='notice_date'>{createdAt}</span>
    </li>
  );
};

export default NoticeItem;
