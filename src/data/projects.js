import leaf from "../Assets/Projects/leaf.jpg";
import emotion from "../Assets/Projects/emotion.jpg";
import editor from "../Assets/Projects/codeEditor.jpg";
import chatify from "../Assets/Projects/chatify.png";
import suicide from "../Assets/Projects/suicide.jpg";
import bitsOfCode from "../Assets/Projects/blog.jpg";

const projects = [
  {
    imgPath: leaf,
    title: "Ayur Glow",
    description:
      "Founded a startup merging Ayurvedic wellness with modern technology. Built a full-stack platform using React and Node.js, deployed on AWS (EC2, S3, Lambda). Features include personalized wellness plans, user authentication, and a scalable microservices architecture.",
    techStack: ["React", "Node.js", "AWS", "MongoDB"],
    ghLink: "",
    demoLink: "",
  },
  {
    imgPath: chatify,
    title: "Meal-Sharing",
    description:
      "Full-stack web application connecting people through shared meals. Implemented RESTful APIs with Express.js, dynamic UI with ReactJS, and relational data modeling with PostgreSQL. Features include meal listings, reservations, and user reviews.",
    techStack: ["React", "Express.js", "PostgreSQL", "CSS"],
    ghLink: "https://github.com/nishadipri/Meal-Sharing-Project",
    demoLink: "",
  },
  {
    imgPath: bitsOfCode,
    title: "Advice Generator",
    description:
      "Interactive app that fetches random advice from the Advice Slip API. Built with React.js featuring clean UI, responsive design, and smooth animations. Deployed on Netlify with CI/CD pipeline.",
    techStack: ["React", "API Integration", "Netlify"],
    ghLink: "https://github.com/nishadipri/Advice-Generator-app",
    demoLink: "",
  },
  {
    imgPath: editor,
    title: "Interactive Rating System",
    description:
      "A responsive web application allowing users to submit and view ratings with real-time feedback. Built with React.js featuring component-based architecture and state management. Deployed on Netlify.",
    techStack: ["React", "JavaScript", "CSS"],
    ghLink: "https://github.com/nishadipri/InteractiveRating",
    demoLink: "",
  },
  {
    imgPath: emotion,
    title: "Monthly Planner",
    description:
      "Productivity tool for organizing monthly tasks and goals. Features include drag-and-drop task management, calendar view, and persistent storage. Built with React.js and modern CSS.",
    techStack: ["React", "JavaScript", "CSS"],
    ghLink: "https://github.com/nishadipri/Monthly-Planner",
    demoLink: "",
  },
  {
    imgPath: suicide,
    title: "AWS Cloud Projects",
    description:
      "Collection of cloud computing projects built while expanding AWS skills. Includes serverless applications with Lambda, static hosting with S3, compute instances with EC2, and NoSQL databases with DynamoDB.",
    techStack: ["AWS", "Lambda", "S3", "EC2", "DynamoDB"],
    ghLink: "",
    demoLink: "",
  },
];

export default projects;
