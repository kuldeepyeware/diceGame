import { useState } from "react";
import Rules from "./Rules";

const Hero = () => {
  const buttonNumArray = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const randomNumber = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    return number;
  };

  const numberSelector = (num) => {
    setSelectedNumber(num);
    setError("");
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const number = randomNumber();
    setcurrentDice(number);

    if (number === selectedNumber) {
      setScore((score) => score + number);
    } else {
      setScore((score) => score - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <>
      <div className='flex justify-between max-w-[1280px] mx-auto mt-[10px]'>
        <div className='flex flex-col items-stretch'>
          <h1 className='text-[100px] h-[120px] font-medium self-center'>
            {score}
          </h1>
          <p className='text-2xl'>Total Score</p>
        </div>
        <div>
          <div className='flex justify-end text-2xl text-[#FF0C0C] mb-3'>
            {error}
          </div>
          {buttonNumArray.map((num, i) => (
            <button
              key={i}
              className={`h-[52px] w-[72px] ${
                num == selectedNumber ? "bg-black text-white" : "border-black"
              } border text-[24px] font-medium ml-[24px]`}
              onClick={() => numberSelector(num)}>
              {num}
            </button>
          ))}
          <div className='flex justify-end mt-[10px]'>
            <p className='text-[24px] font-medium '>Select Number</p>
          </div>
        </div>
      </div>
      <main className='max-w-[1280px] mx-auto flex justify-center '>
        <div className='flex flex-col items-center'>
          <img
            src={`images/dice_${currentDice}.png`}
            alt='Dice'
            onClick={roleDice}
          />
          <p className='text-[25px] font-medium'>Click on Dice to roll</p>
          <button
            className='w-[220px] border border-black rounded text-[16px] py-[10px] my-[15px]'
            onClick={() => setScore(0)}>
            Reset Score
          </button>
          <button
            className='w-[220px] border text-white bg-black rounded text-[16px] py-[10px]'
            onClick={() => setShowRules((prev) => !prev)}>
            {!showRules ? "Show Rules" : "Hide Rules"}
          </button>
          {showRules && <Rules />}
        </div>
      </main>
    </>
  );
};

export default Hero;
