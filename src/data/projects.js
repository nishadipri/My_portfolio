import leaf from "../Assets/Projects/leaf.jpg";
import editor from "../Assets/Projects/codeEditor.jpg";
import chatify from "../Assets/Projects/chatify.jpg";
import suicide from "../Assets/Projects/suicide.jpg";
import bitsOfCode from "../Assets/Projects/blog.jpg";
import monthlyPlanner from "../Assets/Projects/monthlyPlanner.png";
import canteen from "../Assets/Projects/canteen.png";

const projects = [
  {
    imgPath: canteen,
    title: "AI Canteen Assistant",
    description:
      "AI-powered canteen menu assistant built on AWS Bedrock (Claude Haiku). Users ask natural language questions about the weekly menu, allergens, and dietary options. Features hybrid routing ,simple queries answered deterministically (zero AI cost), complex queries routed to Bedrock. Secured with Amazon Cognito JWT authentication, deployed via AWS SAM (Infrastructure as Code), and validated with a 28-case automated eval suite.",
    techStack: ["React", "AWS Lambda (Python)", "Amazon Bedrock", "API Gateway", "Cognito", "S3", "CloudFront", "AWS SAM"],
    ghLink: "https://github.com/nishadipri/FAQ-Canteen",
    demoLink: "https://www.loom.com/share/d84d9f87183b46b28a004572089e2184",
  },
  {
    imgPath: monthlyPlanner,
    title: "Monthly Planner",
    description:
      "A local-first monthly planner built with Next.js + TypeScript. Tasks are stored in the browser — no account, no backend, works offline. Features a Monday-first calendar grid with month navigation, inline task creation, editing, and quick-complete. Supports filtering by status, category, and priority. Offline-ready with a service worker and online/offline indicator.",
    techStack: ["Next.js", "TypeScript", "CSS", "Vercel"],
    ghLink: "https://github.com/nishadipri/Monthly-Planner",
    demoLink: "https://monthly-planner-taupe.vercel.app/",
  },
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
