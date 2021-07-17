import cypress from "../../../assets/images/cypress.png";
import webcem from "../../../assets/images/webcem.png";
import trello from '../../../assets/images/trello.png';

export const projects = [
  {
    image: cypress,
    title: "CypressLawn",
    description: "Application for use by the employees of One Portal.",
    hashtags: ["#javascript ","#electron ", "#react ","#node ","#redis ", "#sass "],
    link: "https://www.cypresslawn.com/",
  },
  {
    image: webcem,
    title: "Web Cemeteries",
    description: "web portal for the registered clients of one Portal",
    hashtags: ["#javascript ","#react ", "#sass "],
    link: "https://www.remembermyjourney.com",
  },
  {
    image: trello,
    title: "Trello Clone",
    description: "A trello clone for us with drag and drop feature.",
    hashtags: ["#javascript ","#react ", "#sass ", '#beautifull-dnd '],
    link: "http://trello-for-us.herokuapp.com",
  }
];
