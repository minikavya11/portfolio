// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's

import sysLogo from './assets/company_logo/syslabs_logo.png';
import swechaLogo from './assets/company_logo/swecha_logo.png'

// Education Section Logo's
import tsmsLogo from './assets/education_logo/tsms_logo.png';
import rguLogo from './assets/education_logo/rgukt_logo.png'

// Project Section Logo's

import frienzyLogo from './assets/work_logo/frienzy_logo.png';
import aimockLogo from './assets/work_logo/aimock.png';
import bookstoreLogo from './assets/work_logo/book.png';
import vgspLogo from './assets/work_logo/vgsp.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
    
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: swechaLogo,
      role: "AI Developer",
      company: "Viswam.AI",
      date: "May 2025 - July 2025",
      desc: "Completed a hybrid AI internship at VISWAM.AI, gaining hands-on experience in fine-tuning models, Python, and deploying impactful real-world AI solutions.",
      
      skills: [
         "Python",
         "Machine Learning",
         "Model Fine-Tuning",
         "DevOps",
         "Linux",
         "Git & GitHub",
         "Data Preprocessing",
       
],
    },
    {
      id: 1,
      img: sysLogo,
      role: "Fullstack Developer",
      company: "Syslabs | Xenlabs Services LLP",
      date: "May 2025 - July 2025",
      desc: "Contributed to innovative projects as a Fullstack Developer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: rguLogo,
      school: "Rajiv Gandhi University of Knowledge Technologies ,Basar",
      date: " 2022 -  2026 (Pursuing)",
      grade: "9.1 CGPA",
      desc: "Pursuing B.Tech in Computer Science and Engineering at RGUKT Basar, with a strong foundation in programming, web development, and core CS subjects through hands-on projects and active participation in technical event",
      degree: "Bachelor of Technologies - BTech(CSE)",
    },
    {
      id: 1,
      img: rguLogo,
      school: "Rajiv Gandhi University of Knowledge Technologies ,Basar",
      date: "2020 - 2022",
      grade: "9.3 CGPA",
      desc: "Completed Pre-University Course at RGUKT Basar with a strong foundation in Mathematics, Science, and Programming, which sparked my interest in computer science",
      degree: "Pre University Course - MPC ",
    },
    {
      id: 2,
      img: tsmsLogo,
      school: "Telangana Model School -Irkode",
      date: "2017 - 2020",
      grade: "10 CGPA",
      desc: "I completed my class 10 education from Telangana Model School,under the SSC board.",
      degree: "SSC 10th",
    },
    
  ];
  
  export const projects = [
    {
     id: 0,
  title: "AI Mock Interview Platform",
  description:
    "An AI-powered mock interview platform built using React.js and Streamlit, integrated with Google Gemini AI and Firebase. This tool simulates real interview environments by generating dynamic technical and HR questions based on user input. It evaluates responses to provide instant, intelligent feedback, helping users improve communication, confidence, and problem-solving skills.",
  image: aimockLogo, 
  tags: ["React JS", "Streamlit", "Firebase", "Google Gemini AI", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/minikavya11/AI-Mock-Interview", 
  webapp: "https://ai-mock-interview-d29a7.web.app/" ,
    },
    {
      id: 1,
  title: "Frienzy - Social Networking App",
  description:
    "A full-stack social networking platform where users can send and manage friend requests, chat in real-time, and make video/audio calls. Built using MERN stack and integrated with Streamify for real-time communication, the app ensures a seamless and engaging user experience.",
  image: frienzyLogo, 
  tags: ["React JS", "Node.js", "MongoDB", "Express.js", "Streamify", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/minikavya11/Frienzyy-app",
  webapp: "https://frienzyy-app.onrender.com" 
    },
    {
      id: 2,
  title: "Bookstore Management System",
  description:
    "A full-stack web application developed using the MERN stack that allows users to browse, add, update, and delete books. Features include user authentication, book search, categorized listings, and an intuitive admin dashboard for inventory management.",
  image: bookstoreLogo, 
  tags: ["MongoDB", "Express.js", "React JS", "Node.js", "HTML", "CSS", "JavaScript"],
  github: "https://github.com/minikavya11/bookstore", 
  webapp: "" 
    },
    {
       id: 3,
  title: "Virtual Study Group Platform",
  description:
    "A collaborative web platform that enables students to create or join virtual study groups with features like real-time chat, video/audio calls, file sharing, whiteboards, and task management. Built with React and PHP, it supports seamless interaction and boosts remote learning productivity.",
  image: vgspLogo, 
  tags: ["React JS", "PHP", "MySQL", "WebRTC", "WebSockets", "HTML", "CSS", "JavaScript"],
  github: "", 
  webapp: "" 
    },
    
  ];  