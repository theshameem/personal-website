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
    name: "Projects",
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

function getMyAgeInYear() {
  const today = new Date();
  const birthDate = new Date(1998, 2, 31); // Month is 0-based: 2 = March
  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has not occurred yet this year
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function getMyExperienceInYear() {
  const today = new Date();
  const startDate = new Date(2022, 1, 15); // Month is 0-based: 2 = March
  let experience = today.getFullYear() - startDate.getFullYear();

  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() &&
      today.getDate() < startDate.getDate())
  ) {
    experience--;
  }

  return experience;
}

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
    description: `${getMyAgeInYear()} Years`,
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
    no: `${getMyExperienceInYear()}+`,
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
    year: "Apr, 2025 - Present",
    title: "Senior Software Engineer <span> Selise Digital Platforms </span>",
    desc: "<li>Collaborating with cross-functional teams to design and implement a scalable Data Gateway, enabling developers to self-serve data sources and schemas and reducing onboarding time by 30%.</li><li>Maintaining and enhancing reusable modules (Email Template, Localization, Release Notes) leveraged by 20+ projects, improving stability and addressing feature requests.</li><li>Mentored and onboarded 4+ junior engineers, accelerating ramp-up time from 3 months to 8 weeks.</li>",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Feb, 2022 - Mar, 2025",
    title: "Software Engineer <span> Selise Digital Platforms </span>",
    desc: "<li>Migrated APIs from GraphQL to REST, boosting performance and scalability for 50,000+ users.</li><li>Built a Human Resources Directory for performance, leave management, and idea submissions, driving 20% higher employee satisfaction.</li><li>Delivered 4+ large-scale projects in Agile teams using Angular, ASP.NET Core, React, and GitHub, consistently meeting sprint goals.</li>",
  },

  {
    id: 3,
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
    category: "Frontend",
    items: [
      { title: "React", percentage: "90" },
      { title: "TypeScript", percentage: "88" },
      { title: "Tailwind CSS", percentage: "80" },
      { title: "Redux", percentage: "78" },
    ],
  },
  {
    category: "Backend",
    items: [
      { title: "ASP.NET Core", percentage: "82" },
      { title: "MongoDB", percentage: "75" },
      { title: "xUnit", percentage: "70" },
    ],
  },
  {
    category: "Tools",
    items: [
      { title: "Git", percentage: "85" },
      { title: "GitHub", percentage: "82" },
      { title: "Agile/Kanban", percentage: "80" },
    ],
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Ewopharma",
    description:
      "<li>Implemented Leave Management and Idea Capture modules for the Human Resource department.</li><li>Contributed to the performance manager module for employee appraisal tracking.</li><li>Implemented reporting sub-modules for pharmaceutical material management.</li>",
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
        desc: "Angular, TypeScript, ASP.NET Core",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
    liveLink: null,
    githubLink: null,
    challenges:
      "Balancing enterprise feature requirements with maintainability, while keeping the HR workflow intuitive for 400+ employees.",
    futurePlans:
      "Continue improving reporting automation and add analytics dashboards for HR decision-makers.",
  },

  {
    id: 2,
    img: Work2,
    title: "SV Group",
    description:
      "<li>Contributed to a responsive restaurant microsite and built role-based user management.</li><li>Implemented the initial phase of Single Sign-On (SSO).</li>",
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
        desc: "Angular, TypeScript, REST API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
    liveLink: null,
    githubLink: null,
    challenges:
      "Integrating role management and SSO while preserving a responsive experience across desktop and mobile devices.",
    futurePlans:
      "Expand the site with a customer-facing dashboard and better analytics for user activity.",
  },

  {
    id: 3,
    img: Work3,
    title: "Swiss Leaders",
    description:
      "<li>Worked on bug fixing to improve application stability and performance.</li><li>Developed PDF certificate generation functionality.</li><li>Actively learned project workflows and contributed to team deliverables.</li>",
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
        desc: "Angular, TypeScript, PDF Generation",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "N/A",
      },
    ],
    liveLink: null,
    githubLink: null,
    challenges:
      "Stabilizing legacy modules while adding new certificate generation features for business users.",
    futurePlans:
      "Improve reporting, user flows, and automation for document exports.",
  },

  {
    id: 4,
    img: Work4,
    title: "Real Estate",
    description:
      "A static real estate website utilizing React.js. This project involved creating a visually appealing and user-friendly interface to showcase listings for potential buyers and renters.",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Real Estate Website",
      },
      {
        icon: <FiUser />,
        title: "Associated with : ",
        desc: "Personal",
      },
      {
        icon: <FaCode />,
        title: "Tech stack : ",
        desc: "React, JavaScript, CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "theshameem.github.io/Real-Estate-Website/",
      },
    ],
    liveLink: "https://theshameem.github.io/Real-Estate-Website/",
    githubLink: "https://github.com/theshameem/Real-Estate-Website",
    challenges:
      "Designing a responsive real estate interface while keeping load time low across desktop and mobile.",
    futurePlans:
      "Add search filters, property detail pages, and a CMS-backed admin panel.",
  },
];
