import { Button, Dice } from "../components";
import { useEffect, useState } from "react";
const Game = () => {
  const [number, setNumber] = useState(0);
  const [scorRoll, setScorRoll] = useState(0);
  const [roll, setRoll] = useState(0);
  const [savedSecor, setSavedSecor] = useState(0);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  
  const numberHandler = () => {
    if (number !== 1) {
      let n = Math.ceil(Math.random() * 6);
      setNumber(n);
      setScorRoll((s) => s + n);
    }
  };

  useEffect(() => {
    setFlag(true);
    if (number === 1) {
      setScorRoll(0);
    }
  }, [number]);

  useEffect(() => {
    if (savedSecor >= 100) alert("You win !!!");
    else if (count >= 10) alert("Game Over");
  }, [savedSecor]);
  const nextRollHandler = () => {
    if (roll < 10) {
      setNumber(0);
      setRoll((r) => r + 1);
    } else alert("game over");
  };
  const saveHandler = () => {
    if (flag) {
      setSavedSecor((o) => o + scorRoll);
      setScorRoll(0);
      setCount((c) => c + 1);
      setFlag(false);
      console.log("hi");
    }
  };

  return (
    <>
      <h2>
        {roll} -- {scorRoll} -- {`{ ${savedSecor} }`} --
      </h2>
      <div className="container">
        <Dice number={number} />
        <div className="btn__container">
          <Button handler={numberHandler} label="Roll" />
          <Button handler={nextRollHandler} label="NextRoll" />
          <Button handler={saveHandler} label="Save Scor" />
        </div>
      </div>
    </>
  );
};

export default Game;
