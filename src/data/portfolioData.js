// ============================================================
// portfolioData.js — Centralized configuration for Bhoomika K's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Bhoomika K",
  firstName: "Bhoomika",
  brandName: "Bhoomika K",
  title: "Software Developer",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9113822349",
  emails: {
    primary: "hbhoomi2004@gmail.com",
  },
  summary:
    "Computer Science Engineering student with an 8.14 CGPA and hands-on experience in software development, Python, SQL, databases, and application workflows. Skilled in object-oriented programming, problem solving, debugging, database management, and developing technology solutions. Experienced in collaborating with technical teams across the SDLC and building software and IoT-based projects. Seeking a Software Developer role to contribute to scalable, reliable, and maintainable software solutions.",
  resumeUrl: "/BHOOMIKA_K_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Bhoomika716",
  linkedin: "https://www.linkedin.com/in/bhoomika-k-computer-science-engineering",
};

export const heroContent = {
  greeting: "Hi, I'm Bhoomika K",
  titleHighlight: "Software Developer",
  subtitle:
    "Building scalable software solutions, intelligent web platforms, and IoT automation systems.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:hbhoomi2004@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Bhoomika,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Bhoomika K</span>, a Computer Science Engineering student based in Bengaluru, India. I specialize in building reliable full-stack applications, intelligent platforms, and database-driven solutions with Python, Java, SQL, and React.js.`,
  techStack: ["Python", "Java", "React.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into reliable software solutions",
  description:
    "I follow a structured and technical approach across the Software Development Life Cycle (SDLC) to build scalable applications.",
  cards: [
    {
      number: "01",
      title: "Requirements & SDLC",
      text: "Analyzing application workflows, user needs, and system specifications to establish clear engineering objectives.",
    },
    {
      number: "02",
      title: "Architecture & Database",
      text: "Designing normalized relational schemas (MySQL, PostgreSQL) and robust backend APIs with Python, FastAPI, and Node.js.",
    },
    {
      number: "03",
      title: "Development & Integration",
      text: "Building responsive frontends in React.js, integrating AI models, IoT hardware (ESP32), and automation pipelines.",
    },
    {
      number: "04",
      title: "Testing & Optimization",
      text: "Rigorous unit testing, performance optimization, debugging database processes, and seamless deployment.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages & Web",
      skills: [
        { name: "Python", level: 92 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "HTML5 / CSS3", level: 92 }
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 80 }
      ]
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "NoSQL", level: 82 },
        { name: "AWS", level: 75 }
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "VS Code", level: 95 },
        { name: "Oracle Cloud (OCI)", level: 85 }
      ]
    },
    {
      title: "Core CS Concepts",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: 92 },
        { name: "DBMS & Database Design", level: 90 },
        { name: "Data Structures & Algorithms", level: 88 },
        { name: "SDLC & Engineering Workflows", level: 90 }
      ]
    },
    {
      title: "Software Engineering Skills",
      skills: [
        { name: "Debugging & Troubleshooting", level: 92 },
        { name: "Unit Testing", level: 85 },
        { name: "Code Optimization", level: 88 },
        { name: "Problem Solving (500+ DSA)", level: 95 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Featured Platforms",
  heading: "Project Highlights & Engineering Demos",
  description: "Demonstrations and interactive web platforms built with AI, React.js, and IoT automation.",
  categories: [
    {
      title: "CareerBridge AI",
      description: "AI-powered career platform for ATS resume evaluation, skill-gap analysis, and interview roadmaps.",
      stats: "AI + Analytics",
      icon: "🚀"
    },
    {
      title: "SentinelX Platform",
      description: "Interactive web platform integrating projects, skills, certifications, and responsive UIs.",
      stats: "AI + Product",
      icon: "⚡"
    },
    {
      title: "Smart Robotics IoT",
      description: "ESP32 robotics platform integrating sensors, Robo Car, and Robo Dog for automated control.",
      stats: "IoT + Automation",
      icon: "🤖"
    }
  ]
};

export const leadershipList = [
  {
    title: "Presidency University Computer Science Engineering",
    description: "Maintaining an 8.14 CGPA while leading technical project teams and collaborating across software development projects.",
    role: "Engineering Scholar",
    badge: "Academic Excellence"
  },
  {
    title: "Bharat Electronics Limited (BEL) Internship",
    description: "Collaborated with engineering teams across the Software Development Life Cycle (SDLC) to analyze and optimize database workflows.",
    role: "Software Developer Intern",
    badge: "Industry Experience"
  },
  {
    title: "Crack-A-Thon 2026 Hackathon Finalist",
    description: "Achieved Top 10 Finalist position in the university-wide GDG Crack-A-Thon competition.",
    role: "Team Leader / Finalist",
    badge: "Achievement"
  }
];

export const internshipsList = [
  {
    organization: "Bharat Electronics Limited (BEL)",
    role: "Software Developer Intern (Certified)",
    duration: "Jul 2026 – Aug 2026",
    skills: ["Database Workflows", "SDLC Collaboration", "System Optimization", "Debugging & Troubleshooting"],
    tech: ["Python", "MySQL", "SDLC", "Database Tools"],
    verificationUrl: "https://sites.google.com/view/bel-certification/home"
  }
];

export const softSkillsList = [
  { name: "Analytical Problem Solving", icon: "🧩", desc: "Solving complex engineering tasks with structured logic and 500+ DSA problem experience." },
  { name: "Technical Collaboration", icon: "🤝", desc: "Working seamlessly with engineering teams across all phases of the Software Development Life Cycle." },
  { name: "Debugging & Optimization", icon: "⚡", desc: "Diagnosing application and database issues to improve system performance and reliability." },
  { name: "Communication", icon: "💬", desc: "Clear technical documentation, team communication, and project presentations in English, Kannada, and Hindi." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to master new frameworks, cloud platforms (OCI, AWS), and IoT automation ecosystems." },
  { name: "Time Management", icon: "⏰", desc: "Balancing B.Tech CSE coursework (8.14 CGPA), BEL internship, and building full-stack platforms." }
];

export const projects = [
  {
    id: "careerbridge",
    number: "01",
    badge: "🚀 AI + Analytics Flagship",
    title: "CareerBridge",
    subtitle: "AI Career Development Platform",
    description:
      "Developed an AI-powered career platform for ATS resume evaluation, skill-gap analysis, personalized recommendations, scholarship discovery, learning roadmaps, and interview preparation.",
    techTags: [
      "AI",
      "React.js",
      "FastAPI",
      "Python",
      "Analytics",
      "REST APIs"
    ],
    links: {
      demo: "https://scholar-bridge-lyart.vercel.app/",
    },
    isFlagship: true,
  },
  {
    id: "sentinelx",
    number: "02",
    badge: "⚡ AI + Product",
    title: "SentinelX",
    subtitle: "AI Interactive Portfolio Platform",
    description:
      "Developed an interactive web platform integrating projects, skills, certifications, achievements, and project demonstrations with responsive user interfaces.",
    techTags: ["AI", "React.js", "Tailwind CSS", "Product Engineering"],
    links: {
      demo: "https://sentinel-x-gray.vercel.app/login",
    },
    isFlagship: false,
  },
  {
    id: "smart-robotics-iot",
    number: "03",
    badge: "🤖 IoT + Automation",
    title: "Smart Robotics & IoT Platform",
    subtitle: "Robotics and IoT Automation System",
    description:
      "Built an IoT robotics platform integrating ESP32, sensors, Robo Car, and Robo Dog for automated control. Implemented sensor-driven automation and real-time device control.",
    techTags: ["ESP32", "Python", "Sensors", "IoT", "Automation"],
    links: {
      documentation: "https://app.notion.com/p/IoT-And-Robotics-38322848edb9804994d1db4a9bdbf441?source=copy_link",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      icon: "☁️",
      verificationUrl: "https://sites.google.com/view/oracle-cloud-certification/home",
      buttonText: "Verify Certificate"
    },
    {
      name: "Unlocking Open Source with GitHub",
      issuer: "GDG on Campus, Presidency University",
      icon: "⚙️",
      verificationUrl: "https://sites.google.com/view/gdg-certification/home",
      buttonText: "Verify Certificate"
    },
    {
      name: "Top 10 Finalist Team — Crack-A-Thon 2026",
      issuer: "GDG on Campus, Presidency University",
      icon: "🏆",
      verificationUrl: "https://sites.google.com/view/gdg-hackathon/home",
      buttonText: "View Achievement"
    },
    {
      name: "Deloitte Australia Data Analytics Job Simulation",
      issuer: "Forage",
      icon: "📊",
      verificationUrl: "https://sites.google.com/view/deloitte-certification/home",
      buttonText: "Verify Certificate"
    },
    {
      name: "Software Developer Internship Certification",
      issuer: "Bharat Electronics Limited (BEL)",
      icon: "💼",
      verificationUrl: "https://sites.google.com/view/bel-certification/home",
      buttonText: "Verify Certificate"
    }
  ],
};

export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "Presidency University, Bengaluru",
  cgpa: "8.14 / 10.0",
  graduation: "2023 – 2027",
  twelfth: "Pre-University (Class XII, PCMB) – 90%",
  puInstitution: "Sri Vidyaniketan PU College, Gangavathi",
};

export const footerContent = {
  taglines: [
    "Software Development & Web Applications",
    "Python · Java · SQL · React.js",
    "Scalable & Reliable Tech Solutions",
  ],
  credential: "B.Tech CSE · CGPA 8.14",
  copyright: `© ${new Date().getFullYear()} Bhoomika K | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
