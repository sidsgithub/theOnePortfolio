import {React, ThemeContext, useContext} from "../../../imports/common-imports";
import ContactForm from "./form/form-component";
import "./contact.scss"
import { map } from "./map/map";

const Contact = () => {
  const {theme} = useContext(ThemeContext);
  map(theme);
  return (
    <div id="contact">
      <div className={`contact-container`}>
        <div className={`${theme}-contact dancing-script-font`}>
          <div>
            <ContactForm />
          </div>
        </div>
        <div id="map" className="maps"></div>
      </div>
    </div>
  );
};

export default Contact;
