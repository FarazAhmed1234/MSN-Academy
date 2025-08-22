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
  {
    id: 1,
    name: "Full Stack Data Analyst",
    price: "PKR 70",
    description: "Advanced data analytics, visualization, ML, and BI tools.",
    image: dataImg,
    overview:
      "This course equips you with both foundational and advanced skills in data analytics. "
      + "You will learn Python, R, SQL, Excel, and Power BI for data cleaning, visualization, and reporting. "
      + "It also covers machine learning basics, predictive analytics, and business intelligence practices. "
      + "Case studies from healthcare, finance, and e-commerce will provide real-world insights. "
      + "Guest lectures from industry professionals will guide you on career opportunities in data science.",
    outcomes:
      "By the end, you will be able to analyze and visualize large datasets, build predictive models, "
      + "create interactive dashboards, and present data-driven insights. "
      + "Graduates will have a strong portfolio showcasing BI reports, ML-based projects, "
      + "and real-time data dashboards deployed online.",
    audience:
      "Designed for aspiring data analysts, business professionals, and students aiming for careers in analytics. "
      + "Also suitable for marketing and finance professionals wanting to upskill in data-driven decision making. "
      + "No prior coding is required; basic math/statistics knowledge is enough.",
    duration:
      "10 weeks of blended learning: weekly video lectures, mentorship sessions, assignments, and capstone projects. "
      + "Industry datasets provided for practice.",
    fee:
      "PKR 70 (includes mentorship, projects, certification, and installment options). "
      + "Early-bird discounts available for students.",
    instructor:
      "Senior data analyst with 10+ years of experience in Fortune 500 companies, "
      + "trained over 5,000 professionals in analytics and machine learning.",
  },
  {
    id: 2,
    name: "Software Engineering with ASP.NET Core",
    price: "PKR 80",
    description: "Enterprise-level software engineering with ASP.NET Core.",
    image: netImg,
    overview:
      "This course dives deep into enterprise application development using ASP.NET Core. "
      + "You’ll learn MVC, Razor Pages, Web APIs, authentication, microservices, and cloud deployment strategies. "
      + "Additional topics include version control with Git, CI/CD pipelines, and software architecture best practices. "
      + "Real-world case studies from enterprise applications will prepare you for professional environments.",
    outcomes:
      "By completion, you will build scalable web applications, secure authentication systems, "
      + "REST APIs, and microservices. "
      + "Graduates will also gain practical skills in deployment to Azure and Docker-based environments.",
    audience:
      "Best for software engineering students, .NET beginners seeking enterprise exposure, "
      + "and developers transitioning to backend engineering roles.",
    duration:
      "12 weeks: includes weekly coding challenges, practical labs, and a final enterprise project.",
    fee:
      "PKR 80 (includes project mentorship, cloud deployment practice, and certificate).",
    instructor:
      "Microsoft-certified .NET developer with 12+ years in enterprise software engineering, "
      + "specialist in cloud-native applications.",
  },
  {
    id: 3,
    name: "Full Stack Graphic Designing with UI/UX",
    price: "PKR 50",
    description: "Graphic design + UI/UX principles for modern apps/web.",
    image: uiImg,
    overview:
      "A creative blend of graphic design and user interface design. "
      + "Learn Photoshop, Illustrator, and Figma for graphics, branding, and web design. "
      + "Also master user research, wireframing, usability testing, and interactive prototyping. "
      + "Includes portfolio development with real client-based projects.",
    outcomes:
      "Create branding designs, UI mockups, and interactive prototypes. "
      + "Graduates can work as freelance designers, product designers, or branding specialists. "
      + "You’ll also be able to pitch and present design projects professionally.",
    audience:
      "Beginners in graphic design, aspiring UI/UX designers, entrepreneurs who want to design digital presence, "
      + "or marketers needing creative skills.",
    duration:
      "8 weeks of project-based learning including design critiques and team collaboration exercises.",
    fee:
      "PKR 50 (includes templates, design files, certification, and lifetime access).",
    instructor:
      "Senior graphic and UI/UX designer with 12+ years of experience in global digital agencies.",
  },
  {
    id: 4,
    name: "WordPress Development",
    price: "PKR 40",
    description: "Learn to build websites and e-commerce stores with WordPress.",
    image: wordpressImg,
    overview:
      "This course covers WordPress installation, theme customization, plugin integration, "
      + "and WooCommerce for building e-commerce stores. "
      + "You’ll also learn SEO optimization, site security, and website speed optimization. "
      + "Capstone project includes building and deploying a complete business site.",
    outcomes:
      "By the end, you will build and deploy blogs, portfolios, and e-commerce stores. "
      + "Graduates will be able to take on freelance projects and manage client websites.",
    audience:
      "Students, freelancers, and entrepreneurs wanting to launch websites quickly without coding.",
    duration:
      "6 weeks of hands-on learning with live site-building projects.",
    fee:
      "PKR 40 (includes hosting practice, project mentorship, and certificate).",
    instructor:
      "Professional WordPress freelancer with 8+ years of client work and expertise in WooCommerce stores.",
  },
  {
    id: 5,
    name: "Frontend Website Development",
    price: "PKR 45",
    description: "Frontend mastery with HTML, CSS, JavaScript, and React.",
    image: frontendImg,
    overview:
      "Learn core frontend technologies (HTML5, CSS3, JavaScript ES6) along with responsive design, animations, "
      + "and frameworks such as React. "
      + "You’ll also cover debugging, Git version control, and API integration. "
      + "Focus on creating high-performance, mobile-friendly websites.",
    outcomes:
      "By the end, you’ll build professional websites and single-page applications "
      + "optimized for speed and mobile devices. "
      + "You will also create a portfolio with real-world React apps.",
    audience:
      "Ideal for beginners aiming to enter frontend developer roles or freelancing.",
    duration:
      "8 weeks of hands-on coding labs, assignments, and portfolio projects.",
    fee:
      "PKR 45 (includes portfolio hosting and certification).",
    instructor:
      "Frontend developer with 9+ years in industry and teaching, experienced in React ecosystems.",
  },
  {
    id: 6,
    name: "MERN Stack Development",
    price: "PKR 75",
    description: "Full-stack apps using MongoDB, Express, React, Node.js.",
    image: mernImg,
    overview:
      "Step-by-step training on MERN stack. "
      + "Start with React frontend, then build backend APIs with Node.js and Express, "
      + "and connect to MongoDB for databases. "
      + "Includes authentication, JWT, and deploying apps to cloud platforms.",
    outcomes:
      "Build full-stack apps including social media clones, e-commerce sites, and dashboards. "
      + "Create professional portfolios with multiple MERN projects ready for job applications.",
    audience:
      "Students and professionals who want to become full-stack developers.",
    duration:
      "10 weeks of project-driven learning with 3 capstone projects.",
    fee:
      "PKR 75 (includes mentorship, deployment resources, and certification).",
    instructor:
      "Full-stack MERN engineer with 7+ years of teaching and development experience.",
  },
  {
    id: 7,
    name: "Digital Marketing with AI Tools",
    price: "PKR 50",
    description: "Marketing automation, AI tools, and growth strategies.",
    image: marketingImg,
    overview:
      "Learn AI-powered SEO, content creation with ChatGPT, design with Canva AI, "
      + "and ad campaign optimization. "
      + "Covers influencer marketing, email automation, and campaign analytics. "
      + "You’ll use AI to design, write, and optimize campaigns in real time.",
    outcomes:
      "Run automated, cost-effective marketing campaigns. "
      + "Create AI-based ads, optimize SEO, and manage client growth strategies.",
    audience:
      "Marketers, entrepreneurs, freelancers, and business owners who want to use AI for growth.",
    duration:
      "6 weeks of live projects, marketing case studies, and campaign analysis.",
    fee:
      "PKR 50 (includes certification and real campaign resources).",
    instructor:
      "Digital marketer with 10+ years of experience and expertise in AI-driven marketing campaigns.",
  },
  {
    id: 8,
    name: "Full Stack Artificial Intelligence",
    price: "PKR 100",
    description: "AI fundamentals, ML models, and AI-powered apps.",
    image: aiImg,
    overview:
      "Comprehensive AI training: Python, NumPy, and Pandas, "
      + "advanced ML algorithms, deep learning with TensorFlow and PyTorch, "
      + "plus deployment of AI models. "
      + "Includes reinforcement learning and case studies from healthcare, finance, and robotics.",
    outcomes:
      "By the end, you will train, evaluate, and deploy ML and DL models. "
      + "You’ll be able to create AI-enabled mobile and web applications.",
    audience:
      "CS students, engineers, and professionals aiming for AI/ML roles in the industry.",
    duration:
      "12 weeks with coding labs, hands-on projects, and a final AI capstone.",
    fee:
      "PKR 100 (includes cloud GPU resources, mentorship, and certification).",
    instructor:
      "AI researcher with PhD and 10+ years in machine learning, published in top AI journals.",
  },
  {
    id: 9,
    name: "Generative Artificial Intelligence",
    price: "PKR 110",
    description: "Generative AI with ChatGPT, Stable Diffusion, and LLMs.",
    image: genAiImg,
    overview:
      "Focused training on generative AI: prompt engineering, large language models (LLMs), "
      + "text-to-image generation, and workflow automation. "
      + "Covers OpenAI APIs, Stable Diffusion, Hugging Face, and LangChain tools. "
      + "Capstone includes building a chatbot or AI art generator.",
    outcomes:
      "Build AI chatbots, AI art tools, and automated workflows. "
      + "Portfolio-ready projects demonstrating expertise in generative AI.",
    audience:
      "Developers, designers, content creators, and entrepreneurs exploring creative AI tools.",
    duration:
      "10 weeks of project-oriented learning with mentorship.",
    fee:
      "PKR 110 (includes premium AI tools access, API credits, and certification).",
    instructor:
      "AI innovator with 7+ years of industry expertise in LLMs and generative AI applications.",
  },
  {
    id: 10,
    name: "Mobile Application Development with Flutter",
    price: "PKR 65",
    description: "Cross-platform app dev with Flutter framework.",
    image: appImg,
    overview:
      "Learn Dart programming, Flutter widgets, navigation, state management, and animations. "
      + "Also covers Firebase integration, REST APIs, and app deployment. "
      + "Projects include chat apps, e-commerce apps, and business dashboards.",
    outcomes:
      "By the end, you will publish apps on both Play Store and App Store. "
      + "Graduates will showcase portfolio apps with real-world features.",
    audience:
      "Students, web developers transitioning to mobile, and startups targeting cross-platform apps.",
    duration:
      "8 weeks of coding labs, assignments, and 3 real projects.",
    fee:
      "PKR 65 (includes mentorship, Firebase resources, and certification).",
    instructor:
      "Flutter developer with 6+ years of experience in building cross-platform apps for startups.",
  },
];

export default courses;
