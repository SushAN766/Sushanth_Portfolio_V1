import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  
  {
    title: "AI-Powered Ocean Pollution Monitoring",
    image: project1,
    description:
      "A smart underwater waste detection system that leverages cutting-edge visual recognition technology to spot ocean litter in photos and video footage.",
    technologies: ["React", "Python FastAPI", "ShadCN UI", "YOLO","OpenCV","Ultralytics ","Framer Motion","TailwindCSS"],
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
  },
  {
    title: "Novamart",
    image: project4,
    description:
      "A full-stack CRUD application with a product store, built using PostgreSQL, Express, React, and Node.js. It features TailwindCSS and DaisyUI for styling, Zustand for state management, along with rate limiting and bot detection.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "CuraHealth: Your All-in-One Digital Health Companion",
    image: project5,
    description:
      "CuraHealth is a smart healthcare platform that simplifies health management with features like symptom prediction, real-time health tracking, and instant doctor consultations — all in one place.",
    technologies: ["TypeScript", "Shadcn UI","React","TailwindCSS"],
  },
];

export const CONTACT = {
  address: "2-121A Nekkilu House Narimogaru Post And Village Puttur Taluk D.K 574202",
  phoneNo: "8197294087 ",
  email: "sshnthbs@gmail.com",
};
