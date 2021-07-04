import React from "react";

const Input = ({
  theme,
  inputFor,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => (
  <div className="form-row cormorant-garamond">
    <input
      type={inputFor}
      name={inputFor}
      id={inputFor}
      value={values}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={inputFor}
      className={`input-field-row ${theme === "dark" ? "strong-blue" : "grey"}`}
    />
    {errors && touched && (
      <span className="error">{errors}</span>
    )}
  </div>
);

export default Input;
