const ButtonHoverLeft = () => {
  return (
    <>
      <button className='group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r dark:from-[#00c2ff] dark:to-[#00c2ff] from-[#c0c7ff] to-[#4c64ff] font-medium text-neutral-200 border-1 border-[#656fe2] transition-all duration-300 hover:w-32'>
        <div className='absolute left-3.5'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
          >
            <path
              d='M6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.70711 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H3.70711L6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:translate-x-3 group-hover:opacity-100'>
          Back
        </div>
      </button>
    </>
  );
};

export default ButtonHoverLeft;