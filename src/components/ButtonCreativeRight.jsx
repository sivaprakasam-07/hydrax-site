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




"import { ArrowRight } from 'lucide-react';\nimport React from 'react';\n\nfunction ButtonCreativeRight() {\n  return (\n    <>\n      <div className='group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold'>\n        <span className='translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block'>\n          About\n        </span>\n        <div className='flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300'>\n          <span>About</span>\n          <ArrowRight />\n        </div>\n        <div className='absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-[#263381] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] '></div>\n      </div>\n    </>\n  );\n}\n\nexport default ButtonCreativeRight;\n"