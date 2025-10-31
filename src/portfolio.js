/* Personal Portfolio Configuration — Aryan Moholkar */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {animated: true};

const greeting = {
  username: "Aryan Moholkar",
  title: "Hello, I'm Aryan",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 skilled in building scalable and data-driven web applications using Django, React, and PostgreSQL. I'm a third-year BS Chemistry student at IIT Bombay exploring applications of AI and data analytics in science and technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/aryanmoholkar",
  linkedin: "https://www.linkedin.com/in/aryan-moholkar/",
  gmail: "moholkararyan@gmail.com",
  instagram: "https://www.instagram.com/aryanmoholkar/",

  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle:
    "FULL STACK WEB DEVELOPER | DATA ANALYST | MACHINE LEARNING ENTHUSIAST",
  skills: [
    emoji(
      "⚡ Build responsive, production-ready web apps using Django + React."
    ),
    emoji(
      "⚡ Design APIs, dashboards, and automation pipelines for analytics."
    ),
    emoji("⚡ Apply statistical & ML methods for data-driven insights."),
    emoji("⚡ Integrate authentication, CI/CD, and Dockerized deployments.")
  ],
  softwareSkills: [
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Django", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Tailwind CSS", fontAwesomeClassname: "fab fa-css3"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "Pandas", fontAwesomeClassname: "fas fa-chart-line"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Technology Bombay",
      logo: require("./assets/images/iitbLogo.png"),
      subHeader: "Bachelor of Science (BS) in Chemistry",
      duration: "2023 – 2027",
      desc: "Coursework: Computer Programming, AI and Data Science, Data Analytics for Chemists, Organic & Physical Chemistry.",
      descBullets: [
        "Institute Web Nominee – led development of institute-level hostel portals.",
        "Completed NLP & Computer Vision Bootcamps under Analytics Club, IIT Bombay."
      ]
    }
  ]
};

// Tech Stack Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend / UI", progressPercentage: "85%"},
    {Stack: "Backend / APIs", progressPercentage: "80%"},
    {Stack: "Data Science / ML", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work Experience Section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Analyst Intern",
      company: "KAN Initiatives LLC (Texas, USA)",
      companylogo: require("./assets/images/kanLogo.png"),
      date: "May 2025 – July 2025",
      desc: "Built automated analytics workflows and business dashboards.",
      descBullets: [
        "Cleaned & analyzed datasets using Python, pandas, and matplotlib.",
        "Automated KPI reporting scripts and visualized insights with Chart.js."
      ]
    },
    {
      role: "Institute Web Nominee",
      company: "Hostel Affairs Council, IIT Bombay",
      companylogo: require("./assets/images/haLogo.jpg"),
      date: "June 2025 – Present",
      desc: "Digitizing hostel operations across 18 hostels under Hostel Affairs Council.",
      descBullets: [
        "Developed PHO Digitisation Portal and MRSP Portal using Django + React.",
        "Managed and improved institute hostel web platforms."
      ]
    },
    {
      role: "Department Academic Mentor (DAMP)",
      company: "Chemistry Department, IIT Bombay",
      companylogo: require("./assets/images/smpLogo.jpeg"),
      date: "June 2025 – Present",
      desc: "Mentoring sophomores in academics, career planning, and campus life."
    },
    {
      role: "Hostel Web & Tech Secretary",
      company: "Hostel 09, IIT Bombay",
      companylogo: require("./assets/images/iitbLogo.png"),
      date: "Sep 2024 – Apr 2025",
      desc: "Managed digital infrastructure for 400+ residents, redesigned hostel website, and ensured LAN uptime."
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Selected Works in Web Development and Data Science",
  projects: [
    {
      image: require("./assets/images/iitbLogo.png"),
      projectName: "PHO Digitisation Portal",
      projectDesc:
        "Full-stack Django + React system digitizing hostel cleaning verification for 18 hostels at IIT Bombay with OAuth2 and live dashboards.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aryanmoholkar/PHO-Digitisation"
        }
      ]
    },
    {
      image: require("./assets/images/iitbLogo.png"),
      projectName: "Married Research Scholars Portal (MRSP)",
      projectDesc:
        "Room allocation and verification portal managing 3+ apartment types and real-time waitlists with role-based approvals.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aryanmoholkar/Married-Research-Scholars-Portal"
        }
      ]
    },
    {
      image: require("./assets/images/crudLogo.png"),
      projectName: "Full-Stack CRUD Dashboard",
      projectDesc:
        "Production-ready CRUD app with Dockerized Django backend, React frontend, and MySQL integration.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aryanmoholkar/CRUD-Dashboard"
        }
      ]
    },
    {
      image: require("./assets/images/sentimentLogo.jpg"),
      projectName: "Stock Market Sentiment Analysis",
      projectDesc:
        "NLP pipeline using NLTK and TextBlob to quantify market sentiment from financial news and correlate with price movements.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aryanmoholkar/sentiment-analysis"
        }
      ]
    },
    {
      image: require("./assets/images/bitcoinLogo.jpg"),
      projectName: "Bitcoin Volatility Forecasting",
      projectDesc:
        "Forecasted cryptocurrency volatility using GARCH and EWMA models; evaluated predictive accuracy via MSE and QLIKE metrics.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/aryanmoholkar/bitcoin-volatality-forecasting"
        }
      ]
    }
  ],
  display: true
};

// Achievements Section
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Highlights of academic excellence, certifications, and extracurricular achievements.",
  achievementsCards: [
    {
      title: "JEE Advanced (2023)",
      subtitle:
        "Ranked in the top 0.57 percentile nationwide among 0.18 million candidates.",
      image: require("./assets/images/iitbLogo.png"),
      imageAlt: "JEE Logo",
      footerLink: []
    },
    {
      title: "Data Analytics Virtual Internship — Deloitte Australia",
      subtitle:
        "Completed simulation on real-world analytics and visualization tasks.",
      image: require("./assets/images/deloitteLogo.jpg"),
      imageAlt: "Deloitte Logo",
      footerLink: []
    },
    {
      title: "Career Essentials in Data Analysis — Microsoft + LinkedIn",
      subtitle:
        "Earned certification demonstrating foundational analytics and Excel proficiency.",
      image: require("./assets/images/microsoftLogo.png"),
      imageAlt: "Microsoft Logo",
      footerLink: []
    },
    {
      title: "Black Belt in Karate",
      subtitle:
        "Recognized for discipline, consistency, and physical fitness through martial arts.",
      image: require("./assets/images/karateLogo.jpg"),
      imageAlt: "Karate Belt Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blog Section
const blogSection = {
  title: "Blogs",
  subtitle: "Occasional thoughts on data, development, and learning.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks / Podcast
const talkSection = {title: "Talks", subtitle: "", display: false};
const podcastSection = {title: "", subtitle: "", display: false};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume below.",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in collaborating or hiring? Let’s connect!",
  number: "+91-72619-85000",
  email_address: "moholkararyan@gmail.com"
};

// Twitter Section
const twitterDetails = {userName: "aryan_moholkar", display: false};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
