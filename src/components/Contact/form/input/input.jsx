import React from "react";
import '../../../../stylesheets/Contact/form/input/input.css'

const Input = ({ values, handleChange, handleBlur, errors, touched }) => {
  return (
    <div className="form-row">
      <label htmlFor="name">Name</label>
      <input
        type="name"
        name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className="input-field-row"
      />
      {errors.name && touched.name && (
        <span className="error">{errors.name}</span>
      )}
    </div>
  );
};

export default Input;
