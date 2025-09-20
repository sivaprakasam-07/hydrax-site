import React from 'react';
import { Link } from 'react-router-dom';

const ButtonCreativeRight = () => {
  return (
    <>
      <Link to="/features" className="inline-block">
        <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] font-medium'>
          <div className='inline-flex h-12 translate-y-0 items-center justify-center px-6 bg-gradient-to-r from-[#070e41] to-[#263381] text-white transition duration-500 group-hover:-translate-y-[150%]'>
            Explore Features
          </div>
          <div className='absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0'>
            <span className='absolute h-full w-full translate-y-full skew-y-10 scale-y-0 bg-[#00c2ff] transition duration-500 group-hover:translate-y-0 group-hover:scale-150'></span>
            <span className='z-10'>Explore Features</span>
          </div>
        </button>
      </Link>
    </>
  );
};

export default ButtonCreativeRight;




