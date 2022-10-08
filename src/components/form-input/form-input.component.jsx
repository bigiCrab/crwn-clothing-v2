import "./form-input.styles.scss";

const FormInput = ({ label, ...inputProp }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputProp} />
      {label && (
        <label
          className={`${
            inputProp.value.length > 0 && "shrink"
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
