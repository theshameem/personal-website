import {
  FaBriefcase,
  FaCode,
  FaEnvelopeOpen,
  FaFolderOpen,
  FaGraduationCap,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme4 from "./assets/blue.png";
import Theme3 from "./assets/blueviolet.png";
import Theme5 from "./assets/goldenrod.png";
import Theme9 from "./assets/green.png";
import Theme6 from "./assets/magenta.png";
import Theme8 from "./assets/orange.png";
import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme10 from "./assets/yellow.png";
import Theme7 from "./assets/yellowgreen.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Shameem",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Alam",
  },

  {
    id: 3,
    title: "Age : ",
    description: "25 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Dhaka, Bangladesh",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+880 1611377700",
  },

  {
    id: 8,
    title: "Email : ",
    description: "theshameem.alam@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "theshameem",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Bangla, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "3+",
    title: "Happy <br /> Recommendation",
  },

  {
    id: 4,
    no: "3+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb, 2022 - Present",
    title: "Software Engineer <span> Selise Digital Platforms </span>",
    desc: "<li> Contributed to the development of new features for an enterprise project as a front-end developer </li> <li>Currently working on a content management system (CMS) in front-end development </li><li>Implementing new features and modules using HTML, CSS, and Angular as required </li><li>Integrating APIs and implementing CRUD operations on the front-end side </li><li>Maintaining code review standards and following organizational rules and regulations </li><li>Collaborating with cross-functional teams in a fast-paced, deadline-driven environment </li><li> Working with an Agile methodology </li>",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2019 - 2022",
    title:
      "Trainer of Data Structure & Algorithms <span> DIU Take-off Programming Camp </span>",
    desc: "I conducted several training sessions on data structures and algorithms for the selected students participating in the DIU Take-off Programming contest.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Apr, 2021 - Jul, 2021",
    title: "Trainer <span> DIU Girls' Computer Programming Club </span>",
    desc: "I conducted C programming language training sessions for first-year students who were selected for the program.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Sep, 2017 - Jul, 2022",
    title: "Bachelor's Degree <span> Daffodil International University </span>",
    desc: "<li> Achieved the prestigious title of champion in the DIU Take-off Programming Contest, Spring 2018, surpassing 300 participants. </li><li>Participated in three regional contests of ACM ICPC Dhaka, showcasing my dedication and involvement in competitive programming. </li> <li> <strong> CGPA: </strong> 3.58 out of 4.00 </li>",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014 - 2016",
    title:
      "Higher Secondary School Certificate <span> Shibpur Model College </span>",
    desc: "<li><strong> GPA: </strong> 4.67 out of 5.00 </li>",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009 - 2014",
    title: "Secondary School Certificate <span> MoharPara High School </span>",
    desc: "<li><strong> GPA: </strong> 4.38 out of 5.00 </li>",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Css",
    percentage: "85",
  },

  {
    id: 3,
    title: "JavaScript",
    percentage: "89",
  },

  {
    id: 4,
    title: "TypeScript",
    percentage: "85",
  },

  {
    id: 5,
    title: "Angular",
    percentage: "80",
  },

  {
    id: 6,
    title: "React",
    percentage: "65",
  },

  {
    id: 7,
    title: "C#",
    percentage: "47",
  },

  {
    id: 7,
    title: "Git",
    percentage: "83",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
