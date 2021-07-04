import { Formik } from "formik";
import "../../../stylesheets/Contact/form/form.css";
import { NotificationContainer } from "react-notifications";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { useContext } from "react";
import ThemeContext from "../../../context/theme-context";

const ContactForm = ({
  initialValues,
  validationSchema,
  submitForm,
  loader,
}) => {
  const {theme} = useContext(ThemeContext);
  console.log(theme)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          isSubmitting,
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="form-container">
            {/* heading text */}
            <div className={`caveat-font html-${theme}-background-tags`}>{`<h1>`}</div>
            <h1 className="form-heading margin-left ">Let's Connect !!</h1>
            <div className={`caveat-font html-${theme}-background-tags`}>{`</h1>`}</div>
            <div className={`caveat-font html-${theme}-background-tags`}>{`</h2>`}</div>
            <h2 className="form-text cormorant-garamond">

              Have work for me , Want to discuss an idea or Just coffee ? Let's
              chat
            </h2>
            <div className={`caveat-font html-${theme}-background-tags`}>{`</h2>`}</div>
            <div className={`caveat-font html-${theme}-background-tags`}>{`</form>`}</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="form"
            >
              {/* Name */}
              <div className="form-row cormorant-garamond">
               
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='name'
                  className={`input-field-row ${theme === 'dark' ? 'strong-blue' : 'grey'}`}
                />
                {errors.name && touched.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>
              {/* Email */}
              <div className="form-row cormorant-garamond">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='email'
                  className={`input-field-row ${theme === 'dark' ? 'strong-blue' : 'grey'}`}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
                </div>
              {/* Message */}
              <div className="form-row cormorant-garamond">
                
                <textarea
                  style={{ resize: "none" }}
                  rows="4"
                  maxlength="255"
                  type="text"
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='message'
                  className={`input-field-row ${theme === 'dark' ? 'strong-blue' : 'grey'}`}
                />
                {errors.message && touched.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
              <div className="cormorant-garamond form-row">
              <button
                type="submit"
                className={dirty && isValid ? "button" : "disabled-btn"}
                disabled={!(dirty && isValid)}
              >
                Send
              </button>
              </div>
            </form>
            <div className={`caveat-font html-${theme}-background-tags`}>{`</form>`}</div>
            {loader && (
              <div className="loader-section">
                <Loader
                  type="Rings"
                  color="#fbff09"
                  height={100}
                  width={100}
                  timeout={10000}
                />
              </div>
            )}
            <NotificationContainer />
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
