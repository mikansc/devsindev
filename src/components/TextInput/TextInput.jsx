import "./TextInput.styles.css";

const TextInput = ({ label, ...rest }) => {
  return (
    <div className="header-search">
      {label && <label htmlFor={label}>{label}</label>}
      <input type="text" {...rest} />
    </div>
  );
};

export default TextInput;
