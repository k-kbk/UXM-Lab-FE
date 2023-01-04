import React from 'react';
import MemberItem from './MemberItem';
import peep27 from '../../assets/peep-27.png';
import peep46 from '../../assets/peep-46.png';
import peep54 from '../../assets/peep-54.png';
import peep68 from '../../assets/peep-68.png';
import peep79 from '../../assets/peep-79.png';
import peep94 from '../../assets/peep-94.png';
import peep101 from '../../assets/peep-101.png';
import peep102 from '../../assets/peep-102.png';

const professor = {
  id: '1',
  englishName: 'SangKyun Kim',
  koreaName: '김상균',
  affiliation: 'Myongji Univ.', // 소속기관
  researchField: 'IoMT, BlockChain', // 연구분야
  email: 'glodmunt@mju.ac.kr',
  img: peep27,
};

const dummy = [
  {
    id: '2',
    englishName: 'Minhyeok Jeong',
    koreaName: '정민혁',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'jmh8900@gmail.com',
    img: peep46,
  },
  {
    id: '3',
    englishName: 'Minsu Kim',
    koreaName: '김민수',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'minsu020302@gmail.com',
    img: peep54,
  },
  {
    id: '4',
    englishName: 'Chanhee lee',
    koreaName: '이찬희',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'lch02130@naver.com',
    img: peep68,
  },
  {
    id: '5',
    englishName: 'Donghyeok Jang',
    koreaName: '장동혁',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'lotto9803@naver.com',
    img: peep94,
  },
  {
    id: '6',
    englishName: 'Sohyeon Kim ',
    koreaName: '김소현',
    affiliation: 'Myongji Univ.', // 소속기관이름
    researchField: '없는디..', // 연구분야
    email: 'ksohyeon39@gmail.com',
    img: peep79,
  },
  {
    id: '7',
    englishName: 'Giwoong Chae',
    koreaName: '채기웅',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'rldndco@mju.ac.kr',
    img: peep101,
  },
  {
    id: '8',
    englishName: 'Seonjae Hyun',
    koreaName: '현선재',
    affiliation: 'Myongji Univ.', // 소속기관
    researchField: '없는디..', // 연구분야
    email: 'hsj106@mju.ac.kr',
    img: peep102,
  },
];

const MemberList = () => {
  return (
    <div className='members-container'>
      <div className='members_professor'>
        <div className=''>
          <img src={professor.img} alt='img' className='w-72' />
        </div>
        <div className='professor_info'>
          <div className='mb-4'>
            <p className='font-bold text-2xl'>{professor.koreaName}</p>
            <p className='font-medium text-lg opacity-70'>
              {professor.englishName}
            </p>
          </div>
          <p className='font-medium text-base opacity-70'>- Affiliation</p>
          <p className='font-medium text-lg mb-1'>{professor.affiliation}</p>
          <p className='font-medium text-base opacity-70'>- Research Field </p>
          <p className='font-medium text-lg mb-1'>{professor.researchField}</p>
          <p className='font-medium text-base opacity-70'>- Email</p>
          <p className='font-medium text-lg'>{professor.email}</p>
        </div>
      </div>
      <div className='w-full flex flex-row flex-wrap justify-center items-center mb-5 md:mb-10'>
        {dummy.map((item) => (
          <MemberItem
            key={item.id}
            englishName={item.englishName}
            koreaName={item.koreaName}
            affiliation={item.affiliation}
            email={item.email}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberList;
