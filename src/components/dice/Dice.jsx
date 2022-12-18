import "./Dice.css";

const Dice = ({ number }) => {
  return <img src={`/assets/dice/dice${number}.png`} alt="" />;
};

export default Dice;
