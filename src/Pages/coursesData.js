// src/pages/coursesData.js
import uiImg from "../assets/ui.webp";
import webImg from "../assets/web.jpg";
import appImg from "../assets/mobile.jpg";
import dataImg from "../assets/data.jpeg";
import netImg from "../assets/net.jpg";

// ✅ Add placeholder images for new courses if not available
import wordpressImg from "../assets/wordpress.jpg";
import frontendImg from "../assets/frontend.jpg";
import mernImg from "../assets/mern.jpg";
import marketingImg from "../assets/marketing.jpg";
import aiImg from "../assets/ai.jpg";
import genAiImg from "../assets/genai.jpg";

const courses = [
 

  // ✅ New Courses Added
  {
    id: 1,
    name: "Full Stack Data Analyst",
    price: "PKR 70",
    description: "Advanced data analytics, visualization, ML, and BI tools.",
    image: dataImg,
    overview: "Covers Python, R, SQL, Power BI, and ML fundamentals.",
    outcomes: "Prepare dashboards, predictive models, and real-time analysis.",
    audience: "Data enthusiasts, analysts, and business professionals.",
    duration: "10 weeks with hands-on projects.",
    fee: "RS 70 with certification.",
    instructor: "Senior data analyst with Fortune 500 experience.",
  },
  {
    id: 2,
    name: "Software Engineering with ASP.NET Core",
    price: "PKR 80",
    description: "Enterprise-level software engineering with ASP.NET Core.",
    image: netImg,
    overview: "Covers MVC, APIs, microservices, cloud deployment.",
    outcomes: "Develop scalable, enterprise-ready .NET applications.",
    audience: "Software engineers and CS students.",
    duration: "12 weeks with projects.",
    fee: "RS 80 with certification.",
    instructor: "Microsoft-certified .NET professional.",
  },
  {
    id: 3,
    name: "Full Stack Graphic Designing with UI/UX",
    price: "PKR 50",
    description: "Graphic design + UI/UX principles for modern apps/web.",
    image: uiImg,
    overview: "Covers Photoshop, Illustrator, Figma, prototyping.",
    outcomes: "Design portfolios for branding and digital products.",
    audience: "Beginners, designers, and entrepreneurs.",
    duration: "8 weeks.",
    fee: "RS 50 with certification.",
    instructor: "Graphic/UI designer with 12+ years of expertise.",
  },
  {
    id: 4,
    name: "WordPress Development",
    price: "PKR 40",
    description: "Learn to build websites and e-commerce stores with WordPress.",
    image: wordpressImg,
    overview: "Themes, plugins, WooCommerce, and SEO basics.",
    outcomes: "Freelance-ready WordPress developer skills.",
    audience: "Students, freelancers, small business owners.",
    duration: "6 weeks.",
    fee: "RS 40.",
    instructor: "WordPress expert with 8+ years of experience.",
  },
  {
    id: 5,
    name: "Frontend Website Development",
    price: "PKR 45",
    description: "Frontend mastery with HTML, CSS, JavaScript, and React.",
    image: frontendImg,
    overview: "UI development, animations, responsive design.",
    outcomes: "Build visually stunning, interactive websites.",
    audience: "Anyone wanting frontend careers.",
    duration: "8 weeks.",
    fee: "RS 45.",
    instructor: "Frontend dev with 9+ years of experience.",
  },
  {
    id: 6,
    name: "MERN Stack Development",
    price: "PKR 75",
    description: "Full-stack apps using MongoDB, Express, React, Node.js.",
    image: mernImg,
    overview: "End-to-end development with modern stack.",
    outcomes: "Create scalable web apps with real-world projects.",
    audience: "Aspiring full-stack developers.",
    duration: "10 weeks.",
    fee: "RS 75.",
    instructor: "MERN developer with startup experience.",
  },
  {
    id: 7,
    name: "Digital Marketing with AI Tools",
    price: "PKR 50",
    description: "Marketing automation, AI tools, and growth strategies.",
    image: marketingImg,
    overview: "AI-based SEO, content creation, and social media marketing.",
    outcomes: "Run data-driven, automated marketing campaigns.",
    audience: "Marketers, entrepreneurs, and business owners.",
    duration: "6 weeks.",
    fee: "RS 50.",
    instructor: "Digital marketer with 10+ years of expertise.",
  },
  {
    id: 8,
    name: "Full Stack Artificial Intelligence",
    price: "PKR 100",
    description: "AI fundamentals, ML models, and AI-powered apps.",
    image: aiImg,
    overview: "Covers Python, TensorFlow, ML, DL, and deployment.",
    outcomes: "Build AI-powered real-world solutions.",
    audience: "CS students, engineers, and AI enthusiasts.",
    duration: "12 weeks.",
    fee: "RS 100.",
    instructor: "AI researcher with PhD background.",
  },
  {
    id: 9,
    name: "Generative Artificial Intelligence",
    price: "PKR 110",
    description: "Generative AI with ChatGPT, Stable Diffusion, and LLMs.",
    image: genAiImg,
    overview: "Prompt engineering, AI art, text, and automation.",
    outcomes: "Build generative AI apps and creative tools.",
    audience: "Tech enthusiasts, developers, and creators.",
    duration: "10 weeks.",
    fee: "RS 110.",
    instructor: "AI innovator with 7+ years of experience.",
  },
  {
    id: 10,
    name: "Mobile Application Development with Flutter",
    price: "PKR 65",
    description: "Cross-platform app dev with Flutter framework.",
    image: appImg,
    overview: "Dart, Flutter widgets, Firebase integration.",
    outcomes: "Publish real Flutter apps to Play Store & App Store.",
    audience: "Students, developers, and startups.",
    duration: "8 weeks.",
    fee: "RS 65.",
    instructor: "Flutter developer with 6+ years of experience.",
  },
];

export default courses;
