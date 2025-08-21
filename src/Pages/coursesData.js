// src/pages/coursesData.js
import uiImg from "../assets/ui.webp";
import webImg from "../assets/web.jpg";
import appImg from "../assets/mobile.jpg";
import dataImg from "../assets/data.jpeg";
import netImg from "../assets/net.jpg";




const courses = [
  {
    id: 1,
    name: "UI/UX Design",
    price: "PKR 45",
    description:
      "Learn user research, wireframing, prototyping, and design tools like Figma and Adobe XD.",
    image: uiImg,
    overview:
      "This course covers UI/UX fundamentals, design thinking, and hands-on projects to build modern interfaces. "
      + "You’ll start by learning the principles of user-centered design, color theory, typography, and layout strategies. "
      + "Then, you’ll explore design thinking methodology, usability testing, and accessibility best practices. "
      + "You’ll also gain insights into collaboration with developers, design handoff processes, and real-world product design workflows.",
    outcomes:
      "By the end, you will design user-friendly apps and websites, and create a portfolio of real projects. "
      + "You’ll be able to conduct user research, build interactive prototypes, and apply modern design systems. "
      + "Graduates will leave with a professional portfolio showcasing web and mobile interfaces, ready to apply for UI/UX internships and jobs.",
    audience:
      "Beginners and aspiring designers looking to start a career in UI/UX. "
      + "This course is also ideal for graphic designers who want to transition into digital product design, "
      + "front-end developers aiming to improve design collaboration, and entrepreneurs interested in creating better user experiences for their products. ",

    duration: "The course is structured over eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, quizzes, and assignments.You can learn at your own pace and revisit materials as needed.",
    fee: " The total fee for the course is RS 45. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you're not satisfied.",
    instructor:
      " Our lead instructor has over 10 years of experience in digital marketing and has helped numerous businesses grow their online presence. With a passion for teaching, they bring real-world insights and strategies to the course. You'll benefit from their expertise and guidance throughout your learning journey.",

  },
  {
    id: 2,
    name: "Web Development",
    price: "PKR 50",
    description:
      "Full-stack web development with HTML, CSS, JavaScript, React, Node.js, and databases.",
    image: webImg,

    overview:
      "This course covers frontend and backend development using modern frameworks. "
      + "You’ll start with core web technologies like HTML, CSS, and JavaScript, then move on to advanced concepts such as React for building dynamic UIs, "
      + "and Node.js/Express for creating scalable server-side applications. "
      + "You’ll also explore database integration with SQL and MongoDB, authentication systems, RESTful APIs, and deployment strategies. ",
    outcomes:
      "By the end, you will be able to build full-stack websites and deploy them online. "
      + "You will also understand DevOps basics, including cloud hosting (AWS/Netlify/Heroku), CI/CD pipelines, and testing strategies. "
      + "Graduates will leave with a professional portfolio of web applications, making them ready for junior developer, freelancer, or startup opportunities.",
    audience:
      "Anyone who wants to become a web developer (no prior experience needed). "
      + "This course is ideal for students aiming to start a career in software engineering, "
      + "freelancers looking to expand their skillset, and professionals from non-technical backgrounds wanting to transition into tech. ",


    duration: "The course is structured over eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, quizzes, and assignments.You can learn at your own pace and revisit materials as needed.",
    fee: " The total fee for the course is RS 50. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you're not satisfied.",
    instructor:
      " Our lead instructor has over 10 years of experience in digital marketing and has helped numerous businesses grow their online presence. With a passion for teaching, they bring real-world insights and strategies to the course. You'll benefit from their expertise and guidance throughout your learning journey.",

  },
  {
    id: 3,
    name: "Mobile App Development",
    price: "PKR 60",
    description:
      "Build Android & iOS apps using Flutter and React Native with real-world projects.",
    image: appImg,
    overview:
      "This course covers cross-platform app development, UI building, and API integration. "
      + "You’ll learn how to design intuitive mobile interfaces, manage state effectively, and integrate backend services using REST APIs and GraphQL. "
      + "Hands-on projects will guide you through building real-world apps that solve practical problems, preparing you for freelance, startup, or corporate roles.",
    outcomes:
      "By the end, you will publish working apps to the Google Play Store and Apple App Store. "
      + "You’ll gain experience in deploying apps, managing version control with Git, and implementing CI/CD pipelines for mobile development. "
      + "Most importantly, you will graduate with a professional-grade portfolio showcasing multiple mobile apps.",
    audience:
      "Students, professionals, and entrepreneurs interested in apps. "
      + "This course is also ideal for web developers who want to expand into mobile, "
      + "software engineers looking to specialize in cross-platform technologies, "
      + "No prior mobile development experience is required, but basic programming knowledge will help.",
    duration: "The course is structured over eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, quizzes, and assignments.You can learn at your own pace and revisit materials as needed.",
    fee: " The total fee for the course is RS 60. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you're not satisfied.",
    instructor:
      " Our lead instructor has over 10 years of experience in digital marketing and has helped numerous businesses grow their online presence. With a passion for teaching, they bring real-world insights and strategies to the course. You'll benefit from their expertise and guidance throughout your learning journey.",

  },
  {
    id: 4,
    name: "Data Analyst",
    price: "PKR 55",
    description:
      "Learn data analysis, visualization, Excel, SQL, and Python with real-world datasets.",
    image: dataImg,
    overview:
      "This course covers essential data analysis techniques, including data cleaning visualization, and statistical analysis. You'll gain practical skills through real-world datasets and case studies. Perfect for beginners and professionals ooking to enhance their analytical expertise.",
    outcomes:
      " By the end of this course, you'll be able to create effective marketing campaigns,analyze data to optimize performance, and understand the latest digital trends. You'll also earn a certificate to showcase your profile. Join a network of successful marketers! .",
    audience: "This course is designed for aspiring marketers, business owners, and anyone interested in enhancing their digital marketing knowledge. Whether you're starting from scratch or looking to refine your skills, this course is for you.No prior experience is necessary.",
    duration: "The course is structured over eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, quizzes, and assignments.You can learn at your own pace and revisit materials as needed.",
    fee: " The total fee for the course is $55. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you're not satisfied.",
    instructor:
      " Our lead instructor has over 10 years of experience in digital marketing and has helped numerous businesses grow their online presence. With a passion for teaching, they bring real-world insights and strategies to the course. You'll benefit from their expertise and guidance throughout your learning journey.",
  },
  {
    id: 5,
    name: ".Net Backend Development",
    price: "PKR 65",
    description:
      "Learn backend development with ASP.NET, C#, and SQL Server databases.",
    image: netImg,
    overview:
      "This course teaches you enterprise-level backend applications with .NET. "
      + "You’ll learn to structure scalable backend architectures, handle security and authentication, "
      + "optimize performance for large-scale applications, and work with advanced features of ASP.NET Core. "
      + "The course includes real-world case studies, hands-on labs, and guidance on deploying applications to cloud platforms like Azure.",
    outcomes:
      "By the end, you can build APIs, authentication systems, and server-side apps. "
      + "You’ll also gain expertise in integrating databases with Entity Framework, writing clean and maintainable C# code, "
      + "implementing RESTful services, and preparing production-ready backend systems. "
      + "Additionally, you will develop a capstone project to showcase your skills in a professional portfolio.",
    audience:
      "Computer science students and professionals aiming for backend roles. "
      + "This course is also suitable for frontend developers who want to become full-stack engineers, "
      + "and for IT professionals transitioning into enterprise application development. ",
    duration: "The course is structured over eight weeks, with flexible learning options to fit your schedule. Each week includes video lectures, quizzes, and assignments.You can learn at your own pace and revisit materials as needed.",
    fee: " The total fee for the course is RS 65. This includes all course materials, access to live sessions, and certification upon completion. We also offer a 30-day money-back guarantee if you're not satisfied.",
    instructor:
      " Our lead instructor has over 10 years of experience in digital marketing and has helped numerous businesses grow their online presence. With a passion for teaching, they bring real-world insights and strategies to the course. You'll benefit from their expertise and guidance throughout your learning journey.",

  },
];

export default courses;
