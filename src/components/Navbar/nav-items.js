import {
  FiUser,
  FiBook,
  MdTimeline,
  CgWorkAlt,
  IoLocationOutline,
  BsCamera,
} from "../../imports/icons";
export const navItems = [
  { id: 0, name: "Home", icon: <FiUser />, description: "", link: "home" },
  { id: 1, name: "About", icon: <FiBook />, description: "", link: "about" },
  {
    id: 2,
    name: "Experience",
    icon: <CgWorkAlt />,
    description: "",
    link: "timeline",
  },
  {
    id: 3,
    name: "Skills",
    icon: <MdTimeline />,
    description: "",
    link: "technology",
  },
  { id: 4, name: "Photography", icon: <BsCamera />, description: "", link: "posts" },
  {
    id: 5,
    name: "Contact",
    icon: <IoLocationOutline />,
    description: "",
    link: "contact",
  },
];
