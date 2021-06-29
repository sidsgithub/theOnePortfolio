import React from "../../imports/common-imports";
import "../../stylesheets/Contact/contact.css";
import "../../imports/fonts.css";
import { Loader } from "@googlemaps/js-api-loader";
import ContactForm from "./form/form-component";

const Contact = () => {
  const loader = new Loader({
    apiKey: process.env.REACT_APP_MAP_APIKEY,
    version: "weekly",
  });
  loader.load().then((google) => {
    const myLocation = { lat: 25.355, lng: 82.993 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: myLocation,
      zoom: 15,
      mapId: "19faef2d81d2b0d7",
    });
    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "#9eb9e0",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 3,
      anchor: new google.maps.Point(15, 30),
    };
    const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const marker = new google.maps.Marker({
      position: myLocation,
      title: "sidd is here",
      map: map,
      icon: svgMarker,
    });
    marker.setMap(map);
  });

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact dancing-script-font">
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
