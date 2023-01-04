import React from 'react';

const MemberItem = ({ englishName, koreaName, affiliation, email, img }) => {
  return (
    <article className='members_profile'>
      <div className='member_img-wrap'>
        <img src={img} alt='img' className='member_img' />
      </div>
      <div className='member_info'>
        <span className='member_koreanName'>{koreaName}</span>
        <span className='member_englishName'>{englishName}</span>
        <p className='member_subtitle'>- Affiliation</p>
        <p className='member_content'>{affiliation}</p>
        <p className='member_subtitle'>- Email</p>
        <p className='member_content'>{email}</p>
      </div>
    </article>
  );
};

export default MemberItem;
