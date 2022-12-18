import "./Landing.css";

const Landing = ({ onStart }) => {
  return (
    <>
      <div>
        <img src={`/assets/icons/icon.jpg`} alt="" />
      </div>
      <button className="start_btn" onClick={onStart}>
        Start
      </button>
    </>
  );
};

export default Landing;
