import { Formik } from "formik";
import "../../../stylesheets/Contact/form/form.css";
import { NotificationContainer } from "react-notifications";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const ContactForm = ({
  initialValues,
  validationSchema,
  submitForm,
  loader,
}) => {
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
            <div className="caveat-font html-background-tags">{`<h1>`}</div>
            <h1 className="form-heading margin-left ">Let's Connect !!</h1>
            <div className="caveat-font html-background-tags">{`</h1>`}</div>
            <div className="caveat-font html-background-tags">{`</h2>`}</div>
            <h2 className="form-text cormorant-garamond">

              Have work for me , Want to discuss an idea or Just coffee ? Let's
              chat
            </h2>
            <div className="caveat-font html-background-tags">{`</h2>`}</div>
            <div className="caveat-font html-background-tags">{`</form>`}</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="form"
            >
              {/* Name */}
              <div className="form-row cormorant-garamond top-margin">
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
              {/* Email */}
              <div className="form-row cormorant-garamond top-margin">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="input-field-row"
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
                </div>
              {/* Message */}
              <div className="form-row cormorant-garamond top-margin">
                <label htmlFor="message">Message</label>
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
                  className="input-field-row"
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
            <div className="caveat-font html-background-tags">{`</form>`}</div>
            {loader && (
              <div className="loader-section">
                <Loader
                  type="Rings"
                  color="#d2d382"
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
