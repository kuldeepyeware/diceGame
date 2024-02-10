/* eslint-disable react/prop-types */
const Landing = ({ toggleGamePlay }) => {
  return (
    <>
      <div className='flex max-w-[1066px] mx-auto max-h-[500px] mt-[140px]'>
        <div className=''>
          <img src='images/Hero.png' alt='Hero Dice' />
        </div>
        <div className='my-[167px]'>
          <h1 className='text-8xl text-nowrap font-bold'>DICE GAME</h1>
          <button
            className='text-base bg-black text-white w-[220px] py-[10px] rounded ml-[308px] mt-4'
            onClick={() => toggleGamePlay()}>
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
