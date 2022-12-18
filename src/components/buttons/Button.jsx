import "./Button.css";

const Button = ({ handler, label }) => {
  return (
    <button className="btn" onClick={handler}>
      {label}
    </button>
  );
};

export default Button;
