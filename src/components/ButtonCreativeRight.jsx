import React from 'react';

const ButtonCreativeRight = () => {
  return (
    <>
      <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] font-medium'>
        <div className='inline-flex h-12 translate-y-0 items-center justify-center px-6 bg-gradient-to-r from-[#070e41] to-[#263381] text-white transition duration-500 group-hover:-translate-y-[150%]'>
          Click Here !
        </div>
        <div className='absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0'>
          <span className='absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#00c2ff] transition duration-500 group-hover:translate-y-0 group-hover:scale-150'></span>
          <span className='z-10'>Click Here !</span>
        </div>
      </button>
    </>
  );
};

export default ButtonCreativeRight;