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

import Work1 from "./assets/Logo-ewo.svg";
import Work3 from "./assets/Logo-sko.svg";
import Work2 from "./assets/Logo-sv.png";
import Work4 from "./assets/real-estate.png";

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
    description: "26 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Unavailable",
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
    no: "2+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "7+",
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
    desc: "<li> Contributed to three distinct enterprise projects to develop new features and bug fixing  as a front-end developer. </li> <li>Worked on a content management system(CMS) in front-end development. </li><li>Implementing new features and modules as per the requirement using HTML, CSS, Angular & TypeScript. </li><li>Implementing API integration and CRUD operations from the front-end side.</li><li>Maintaining PR review, coding standardization, rules and regulations set by the organization. </li><li>Collaborating with cross-functional teams in a fast-paced, deadline-driven environment </li><li> Working on an Agile methodology. </li>",
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
    desc: "<li> Achieved the prestigious title of champion in the DIU Take-off Programming Contest, Spring 2018, surpassing 300 participants. </li><li>Participated in three regional contests of ACM ICPC Dhaka, showcasing my dedication and involvement in competitive programming. </li> <li>Solved more than <b>1800</b> problems from different online judges. </li> <li> <strong> CGPA: </strong> 3.58 out of 4.00 </li> ",
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
    title: "HTML",
    percentage: "90",
  },

  {
    id: 2,
    title: "CSS",
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
    percentage: "55",
  },

  {
    id: 7,
    title: "C#",
    percentage: "47",
  },

  {
    id: 7,
    title: "Git",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Ewopharma",
    description:
      "<li>Implemented Leave Management, Idea Capture module for Human Resource department.</li> <li>Contributed to the performance manager module for employees.</li> <li>Implemented two reporting sub-module for pharmaceutical material management.</li>",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "EwoPharma",
      },
      {
        icon: <FiUser />,
        title: "Associated with : ",
        desc: "SELISE",
      },
      {
        icon: <FaCode />,
        title: "Tech stack : ",
        desc: "Angular, TypeScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "SV Group",
    description:
      "<li>Contributed to complex responsive  microsite creation for the restaurant and set the role management.</li> <li>Implemented user management module for different users.</li> <li>Worked on initial phase of Single Sign-On(SSO).</li>",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "SV Project Omega",
      },
      {
        icon: <FiUser />,
        title: "Associated with : ",
        desc: "SELISE",
      },
      {
        icon: <FaCode />,
        title: "Tech stack : ",
        desc: "Angular, TypeScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Swiss Leaders",
    description:
      "<li>Engaged in bug-fixing tasks to enhance application stability and performance.</li> <li>Developed functionality to generate PDF certificates, enhancing the system's capability to create official certificates seamlessly. </li> <li>Eager fresher actively engaged in project tasks, learning swiftly, and contributing to the team's growth with a positive attitude.</li>",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "SKO",
      },
      {
        icon: <FiUser />,
        title: "Associated with : ",
        desc: "SELISE",
      },
      {
        icon: <FaCode />,
        title: "Tech stack : ",
        desc: "Angular, TypeScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Real Estate",
    description:
      "A static real estate website utilizing React.js. This project involved creating a visually appealing and user-friendly interface to showcase real estate listings, offering an immersive browsing experience for potential buyers or renters.",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Real Estate",
      },
      {
        icon: <FiUser />,
        title: "Associated with : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Tech stack : ",
        desc: "React, JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "theshameem.github.io/Real-Estate-Website/",
      },
    ],
  },
];
