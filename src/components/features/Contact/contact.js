import {
  React,
  ThemeContext,
  useContext,
} from "../../../imports/common-imports";
import ContactForm from "./form/form-component";
import "./contact.scss";
import { map } from "./map/map";
import { isBrowser } from "react-device-detect";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  if (isBrowser) {
    map(theme);
  }
  return (
    <div id="contact">
      <div className={`contact-container`}>
        <div className={`${theme}-contact dancing-script-font`}>
          <div>
            <ContactForm />
          </div>
        </div>
        {isBrowser ? <div id="map" className="maps"></div> : <div />}
      </div>
    </div>
  );
};

export default Contact;
