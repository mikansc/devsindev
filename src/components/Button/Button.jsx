import "./Button.styles.css";

const Button = ({ label, ...rest }) => {
  return (
    <button className="btn btn-orange" {...rest}>
      {label}
    </button>
  );
};

export default Button;
