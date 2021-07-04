import { Loader } from "@googlemaps/js-api-loader";
export const map = (theme) => {
  const mapId =
    theme === "light"
      ? process.env.REACT_APP_LIGHT_MAP_ID
      : process.env.REACT_APP_DARK_MAP_ID;
  const loader = new Loader({
    apiKey: process.env.REACT_APP_MAP_APIKEY,
    version: "weekly",
  });
  loader.load().then((google) => {
    const myLocation = { lat: 25.355, lng: 82.993 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: myLocation,
      zoom: 15,
      mapId,
    });
    const svgMarker = {
      path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
      fillColor: "rgb(65, 138, 138)",
      fillOpacity: 1,
      strokeWeight: 0,
      rotation: 0,
      scale: 3,
      anchor: new google.maps.Point(15, 30),
    };
    const marker = new google.maps.Marker({
      position: myLocation,
      title: "sidd is here",
      map: map,
      icon: svgMarker,
    });
    marker.setMap(map);
  });
};
