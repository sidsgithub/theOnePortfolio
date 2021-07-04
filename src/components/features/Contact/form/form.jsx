import {React,ThemeContext,BackgroundTag} from '../../../../imports/common-imports';
import Input from '../../../common/components/input';
import TextField from '../../../common/components/text-field';
import { Formik } from "formik";
import { NotificationContainer } from "react-notifications";
import Loader from "react-loader-spinner";
import { useContext } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./form.scss"

const ContactForm = ({
  initialValues,
  validationSchema,
  submitForm,
  loader,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
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
            <BackgroundTag theme={theme} value={`<h1>`} />
            <h1 className="form-heading margin-left ">Let's Connect !!</h1>
            <BackgroundTag theme={theme} value={`</h1>`} />
            <BackgroundTag theme={theme} value={`<h2>`} />
            <h2 className="form-text cormorant-garamond">
              Have work for me , Want to discuss an idea or Just coffee ? Let's
              chat
            </h2>
            <BackgroundTag theme={theme} value={`</h2>`} />
            <BackgroundTag theme={theme} value={`<form>`} />
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="form"
            >
              {/* Name */}
              <Input
                theme={theme}
                inputFor={"name"}
                values={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.name}
                touched={touched.name}
              />

              {/* Email */}
              <Input
                theme={theme}
                inputFor={"email"}
                values={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.email}
                touched={touched.email}
              />

              {/* Message */}
              <TextField
                inputFor={"message"}
                values={values.message}
                handleBlur={handleBlur}
                handleChange={handleChange}
                theme={theme}
                errors={errors.message}
                touched={touched.message}
              />

              {/* Button*/}
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
            <BackgroundTag theme={theme} value={`</form>`} />
            {/* loader*/}
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
            {/* notification */}
            <NotificationContainer />
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
