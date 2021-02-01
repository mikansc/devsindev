import "./TextInput.styles.css";

const TextInput = ({ label, id, ...rest }) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input className="input-text" type="text" id={id} {...rest} />
    </div>
  );
};

export default TextInput;
