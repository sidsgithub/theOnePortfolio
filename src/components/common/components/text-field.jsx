import React from 'react';

const TextField = ({
  values,
  handleBlur,
  handleChange,
  theme,
  errors,
  touched,
  inputFor
}) => (
  <div className="form-row cormorant-garamond">
    <textarea
      style={{ resize: "none" }}
      rows="4"
      maxlength="255"
      type="text"
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
export default TextField;