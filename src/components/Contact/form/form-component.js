import React from "../../../imports/common-imports";
import ContactForm from "./form";
import emailjs from "emailjs-com";
import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useState } from "react";
import * as Yup from 'yup';

const ContactFormContainer = () => {
  const [loader, setLoader] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  function sendEmail(values, props) {
    if (values.name) {
      setLoader(true);
    }
    emailjs
      .send(
        "service_blt76fe",
        "template_ivqjztq",
        {
          name: values.name,
          email: values.email,
          message: values.message,
        },
        "user_ibl5tn1Nvdr8WwLXsnCui"
      )
      .then((res) => {
        if (res.status === 200) {
          NotificationManager.success("", "Message sent !!", 800);
          props.resetForm();
          setLoader(false);
        } else {
          NotificationManager.error("", "Opps! Soemthing went wrong", 800);
        }
      });
  }

  const validationSchema = Yup.object({
      name: Yup.string().nullable().min(3,'Nicknames are fine but, alteast 3 letters').required('Hey! what Shall I call you '),
      email: Yup.string().email().nullable().required('This is an important field.'),
      message: Yup.string().nullable().required('Content goes here.')
    })

  return (
      <ContactForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        submitForm={sendEmail}
        loader={loader}
      />
  );
};
export default ContactFormContainer;
