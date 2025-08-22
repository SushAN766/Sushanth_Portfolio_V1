import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;



export const EDUCATION = [
  {
    id: 1,
    degree: "B.E in Computer Science and Engineering",
    institution: "St Joseph's Engineering College (Autonomous), Mangaluru",
    duration: "2022 - 2026",
    description:
      "9.24 CGPA. Specialized in software development and data structures. Participated in various hackathons and coding competitions.",
  },
  {
    id: 2,
    degree: "Pre-University Course",
    institution: "Vivekananda Pre University College, Puttur",
    duration: "2020 - 2022",
    description:
      "Completed with a focus on science and mathematics. Achieved 96% in the final examinations. Participated in various extracurricular activities and workshops.",
    
  },
  {
    id: 3,
    degree: "SSLC",
    institution: "Vivekananda English Medium High School, Puttur",
    duration: "2017 - 2020",
    description:
      " Completed high school with a focus on science and mathematics. Achieved 91% in the final examinations. Participated in various extracurricular activities and workshops.",
  },
];

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Dec 2024",
    role: "Virtual Intern",
    company: "ServiceNow",
    description: `Gained hands-on experience with ServiceNow's platform and tools.Collaborated with a diverse cohort to complete assignments, resolve technical challenges, and present practical solutions.`,
    technologies: ["Micro-Certification", "ServiceNow Platform", "Administration Tools", "Scripting"],
  },
  {
    year: "Aug 2023 - Sep 2023",
    role: "Machine Learning Intern",
    company: "Acmegrade",
    description: `Completed a virtual internship focused on core machine learning concepts and hands-on projects.Worked on projects involving data preprocessing, training ML models using Python (NumPy, Pandas, Scikit-learn).`,
    technologies: ["Python ", "NumPy, Pandas ", "SQL", "Google Colab "],
  },
  
];

export const PROJECTS = [
  
  {
    title: "AI-Powered Ocean Pollution Monitoring",
    image: project1,
    description:
      "A smart underwater waste detection system that leverages cutting-edge visual recognition technology to spot ocean litter in photos and video footage.",
    technologies: ["React", "Python FastAPI", "ShadCN UI", "YOLO","OpenCV","Ultralytics ","Framer Motion","TailwindCSS"],
    link:"https://github.com/SushAN766/ocean-glance",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Bootstrap","TailwindCSS", "Vite", "Framer Motion"],
  },
  {
    title: "Employee Database Management System ",
    image: project3,
    description:
      "A Java-based application designed to efficiently manage employee records. It supports key operations like adding, updating, deleting, and retrieving employee information. The system integrates with a MySQL database for storing data, and the user interface is built using Swing.",
    technologies: ["Java", "MySQL", "Swing", "NetBeans"],
    link:"https://github.com/SushAN766/Employee-Database-Management-System",
  },
  {
    title: "Novamart",
    image: project4,
    description:
      "A full-stack CRUD application with a product store, built using PostgreSQL, Express, React, and Node.js. It features TailwindCSS and DaisyUI for styling, Zustand for state management, along with rate limiting and bot detection.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    link:"https://novamart-z7fh.onrender.com",
  },
  {
    title: "CuraHealth: Your All-in-One Digital Health Companion",
    image: project5,
    description:
      "CuraHealth is a smart healthcare platform that simplifies health management with features like symptom prediction, real-time health tracking, and instant doctor consultations — all in one place.",
    technologies: ["TypeScript", "Shadcn UI","React","TailwindCSS"],
    link:"https://curahealth-suite.vercel.app/",
  },
];

export const CONTACT = {
  address: "Puttur, Karnataka, India",
  phoneNo: "8197294087 ",
  email: "sshnthbs@gmail.com",
};
