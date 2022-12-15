import React from 'react';
import Call from '../../assets/call.png';
import EMail from '../../assets/email.png';
import Address from '../../assets/address.png';

const ContactUs = () => {
  return (
    <article className='home-article_3'>
      <div className='article-container_3'>
        <div className='mb-30 text-center'>
          <h2 className='heading'>Contact Us</h2>
        </div>
        <div className='card-container'>
          <div className='card'>
            <img src={Call} alt='call' className='w-10 h-10 mb-3' />
            <h3 className='font-semibold text-2xl mb-5'>Call</h3>
            <p className='font-medium text-lg'>02-300-0000</p>
            <p className='font-medium text-lg'>02-303-3333</p>
          </div>
          <div className='card'>
            <img src={EMail} alt='mail' className='w-10 h-10 mb-3' />
            <h3 className='font-semibold text-2xl mb-5'>E-Mail</h3>
            <p className='font-medium text-lg'>Prof: example@gmail.com</p>
            <p className='font-medium text-lg'>Lab: example@gmail.com</p>
          </div>
          <div className='card'>
            <img src={Address} alt='address' className='w-10 h-10 mb-3' />
            <h3 className='font-semibold text-2xl mb-5'>Address</h3>
            <p className='font-medium text-lg'>명지대학교 인문캠퍼스</p>
            <p className='font-medium text-lg'>학생회관 10층, 10103호</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactUs;
