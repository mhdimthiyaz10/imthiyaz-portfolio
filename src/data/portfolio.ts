export interface NavLink {
  label: string;
  href: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string[];
  ctaLabel: string;
  caption: string;
}

export interface HighlightCard {
  id: string;
  metric: string;
  title: string;
  description: string;
  type: "gradient-blob" | "off-white" | "photo";
}

export interface ProjectScope {
  title: string;
  metric: string;
  type: "progress" | "chart";
  value: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "MOHAMMED IMTHIYAZ",
    role: "AI & ML Engineer · Web Developer",
    location: "Malappuram, Kerala, India",
    email: "mhd.imthiyaz10@gmail.com",
    phone: "8891959879",
    github: "https://github.com/mhdimthiyaz10",
    linkedin: "https://www.linkedin.com/in/mohammed-imthiyaz-771729310",
    resumeUrl: "/resume.pdf",
    portraitUrl: "/imthiyaz-hero.jpg",
    heroSilhouetteUrl: "/imthiyaz-hero.jpg",
    kathakaliUrl: "/kathakali-cinematic.jpg",
    connectSilhouetteUrl: "/connect-cinematic.jpg",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] as NavLink[],
  hero: {
    eyebrow: "AI & ML Engineer · Web Developer",
    headlineLines: ["Intelligence first.", "Then the", "system."],
    subtext:
      "AI/ML engineering student building intelligent, real-world solutions with Python, Generative AI and modern web technologies.",
    primaryCta: "View Projects",
    secondaryCta: "Download Resume",
    currentlyCard: {
      label: "Currently",
      text: "Building AI systems that understand culture and context",
      meta: "Yenepoya Institute of Technology",
    },
    stats: [
      {
        value: "15+",
        label: "Client projects delivered",
        subtext: "Production web applications, portals & LMS architectures.",
      },
      {
        value: "6",
        label: "Certifications & workshops",
        subtext: "IIT Bombay, Microsoft Azure, and IBM Developer Skills.",
      },
    ],
  },
  expertise: {
    heading: "CLEAR SYSTEMS FOR INTELLIGENT GROWTH.",
    description:
      "Data pipelines, deep learning architectures, and modern web interfaces engineered into coherent, performant solutions.",
    caption: "From first idea to working system",
    items: [
      {
        id: "ai-ml",
        number: "[01]",
        title: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
        tags: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Analysis", "Model Building"],
        caption: "From raw data\nto predictive models",
        ctaLabel: "Let's Talk",
        description: [
          "Building robust data pipelines and statistical models that extract actionable intelligence from structured and unstructured sources.",
          "Proficient in exploratory data analysis, feature engineering, and training supervised and unsupervised learning algorithms with Scikit-learn.",
          "Focusing on high model explainability, evaluation metrics, and seamless integration into production REST backends.",
        ],
      },
      {
        id: "gen-ai",
        number: "[02]",
        title: "GENERATIVE AI",
        tags: ["Hugging Face", "LangChain", "OpenAI API", "Cohere API", "Prompt Engineering", "NLP"],
        caption: "From prompt design\nto autonomous workflows",
        ctaLabel: "Let's Talk",
        description: [
          "Designing context-aware Large Language Model applications utilizing LangChain, Hugging Face transformers, and leading frontier APIs.",
          "Specialized in retrieval-augmented generation (RAG), vector databases, structured output steering, and deterministic agent orchestration.",
          "Engineering conversational agents that seamlessly comprehend domain-specific jargon, cultural nuances, and conversational context.",
        ],
      },
      {
        id: "web-dev",
        number: "[03]",
        title: "WEB DEVELOPMENT",
        tags: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "MySQL", "Responsive UI/UX", "LMS"],
        caption: "From responsive layout\nto interactive scale",
        ctaLabel: "Let's Talk",
        description: [
          "Developing lightning-fast, accessible, and reactive web applications with Next.js App Router, modern React, and optimized Tailwind CSS.",
          "Proven record delivering 15+ real-world client platforms, including comprehensive Learning Management Systems (LMS) with secure role-based access.",
          "Crafting fluid micro-interactions, dark mode aesthetics, and robust relational schemas powered by MySQL and modern ORMs.",
        ],
      },
    ] as ExpertiseItem[],
  },
  about: {
    cornerLabel: "About",
    subCornerLabel: "Philosophy",
    heading: "I BUILD INTELLIGENT SOLUTIONS WITH CLARITY AND STRUCTURE THAT SCALE",
    text: "Aspiring Artificial Intelligence and Machine Learning professional with a strong foundation in AI/ML, data analysis and software development, eager to solve real-world problems and build innovative solutions while continuously learning emerging technologies.",
    cards: [
      {
        id: "card-projects",
        metric: "15+",
        title: "Projects Delivered",
        description: "Websites and LMS platforms for clients built with modern tech.",
        type: "gradient-blob",
      },
      {
        id: "card-cgpa",
        metric: "7.03",
        title: "B.E. in AI & ML",
        description: "Yenepoya Institute of Technology, Mangalore (Graduating 2027).",
        type: "off-white",
      },
      {
        id: "card-certs",
        metric: "6",
        title: "Certifications",
        description: "Accredited credentials from IIT Bombay, Microsoft, and IBM.",
        type: "photo",
      },
    ] as HighlightCard[],
  },
  featuredProject: {
    cornerLabel: "Featured Project",
    tagline: "Culture Meets Computer Vision",
    heading: "KATHAKALI AI: TECHNOLOGY THAT TELLS STORIES.",
    description:
      "A real-time AI system that analyzes Kathakali facial expressions and mudras and automatically narrates the story behind the performance using computer vision and AI.",
    techStack: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Hugging Face Transformers",
      "NLP",
      "Computer Vision",
    ],
    githubUrl: "https://github.com/mhdimthiyaz10",
    metrics: [
      {
        title: "Computer Vision",
        metric: "94% Accuracy",
        type: "progress",
        value: 94,
      },
      {
        title: "NLP & Conversational AI",
        metric: "120ms Latency",
        type: "chart",
        value: 85,
      },
    ] as ProjectScope[],
  },
  skills: [
    {
      title: "Core",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Analysis",
        "Generative AI",
        "Web Development",
        "Database Management",
        "Web Designing",
      ],
    },
    {
      title: "AI/ML & GenAI",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Hugging Face",
        "LangChain",
        "OpenAI API",
        "Cohere API",
        "Prompt Engineering",
      ],
    },
    {
      title: "Web & Databases",
      skills: ["HTML", "CSS", "JavaScript", "MySQL", "React.js", "Next.js"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Power BI"],
    },
    {
      title: "Languages",
      skills: ["Python", "C", "R", "Julia"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-solving",
        "Teamwork",
        "Communication",
        "Analytical Thinking",
        "Adaptability",
      ],
    },
  ] as SkillCategory[],
  experience: {
    role: "Freelance Developer",
    duration: "6 Months",
    summary:
      "Independently delivering high-performance web systems and full-stack solutions for commercial clients.",
    items: [
      {
        number: "[01]",
        title: "Delivered 15+ Client Projects",
        description:
          "Engineered customized websites, client portals, and LMS platforms tailored to organizational workflows.",
      },
      {
        number: "[02]",
        title: "Developed Responsive & Scalable Web Apps",
        description:
          "Built modular component systems with Next.js, React, and mobile-first layouts optimized for all viewport sizes.",
      },
      {
        number: "[03]",
        title: "Collaborated for Customized Solutions",
        description:
          "Worked closely with stakeholders from requirements gathering to testing and deployment on modern cloud platforms.",
      },
      {
        number: "[04]",
        title: "Improved UI/UX Performance",
        description:
          "Refactored legacy codebases, enhanced Core Web Vitals, minimized render latency, and implemented accessible design systems.",
      },
    ] as ExperienceItem[],
  },
  education: [
    {
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "Yenepoya Institute of Technology, Mangalore",
      year: "2023 – 2027",
      score: "CGPA 7.03",
    },
    {
      degree: "Class 12 (Higher Secondary)",
      institution: "GHSS Tirurangadi",
      year: "2023",
      score: "88.5%",
    },
    {
      degree: "Class 10 (Secondary School)",
      institution: "PKMM HSS Edarikode",
      year: "2021",
      score: "95.5%",
    },
  ] as EducationItem[],
  certifications: [
    {
      title: "Java Training",
      issuer: "IIT Bombay",
      year: "2026",
      tag: "Programming",
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      year: "2025",
      tag: "Cloud",
    },
    {
      title: "Linux Training",
      issuer: "IIT Bombay",
      year: "2025",
      tag: "Systems",
    },
    {
      title: "Git Training",
      issuer: "IIT Bombay",
      year: "2025",
      tag: "DevOps",
    },
    {
      title: "Rapid Development for AI Services",
      issuer: "IBM Developer Skills Network",
      year: "2024",
      tag: "AI / Cloud",
    },
    {
      title: "R Training",
      issuer: "IIT Bombay",
      year: "2024",
      tag: "Data Science",
    },
  ] as CertificationItem[],
};

