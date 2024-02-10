const Rules = () => {
  return (
    <>
      <div className='w-[800px] h-[180px] bg-[#FBF1F1] rounded-lg mt-[15px] p-[20px]'>
        <h2 className='font-xl font-bold mb-[24px]'>How to play dice game</h2>
        <div className='text-nowrap mb-[4px]'>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            After click on dice if selected number is equal to dice number you
            will get same point as dice
          </p>
          <p>If you get wrong guess then 2 point will be dedcuted </p>
        </div>
      </div>
    </>
  );
};

export default Rules;
