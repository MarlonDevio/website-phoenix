import {
  app,
  attesticoPortfolioImage,
  budgetApp,
  counselor,
  datingApp,
  personalTrainer,
  resumeWebsite,
} from "../assets";

export const portfolioItems = [
  {
    id: "i1",
    title: "Attestico",
    description:
      "Attestico: A custom-built, React-based web application streamlining the asbestos certification process, designed with a user-friendly interface and optimized for search engines.",
    image: attesticoPortfolioImage,
    url: "https://www.attestico.be",
  },
  {
    id: "i2",
    title: "Java Based Budget App",
    description:
      "This ongoing project is a Java-based budgeting tool that demonstrates my use of various design patterns for efficient problem-solving. Features include expense tracking and financial visualization. Source code is available on my GitHub.",
    image: budgetApp,
    url: "https://github.com/MarlonDevio/BudgetApp",
  },
  {
    id: "i3",
    title: "Blend Together Dating App",
    description:
      "Early-stage React project focusing on connecting individuals. Work in progress, highlighting modern UI/UX principles",
    image: datingApp,
    url: "https://main.de43yzimj1cob.amplifyapp.com/",
  },
];

export const sidebarLinks = [
  { sectionName: "Home", id: "home" },
  { sectionName: "About", id: "about" },
  { sectionName: "Services", id: "services" },
  { sectionName: "Mission", id: "mission" },
  { sectionName: "Portfolio", id: "portfolio" },
  { sectionName: "Contact", id: "contact" },
];

export const services = [
  {
    id: "serviceNumber1",
    title: "App Development",
    description:
      "Specializing in creating high-quality, user-friendly mobile applications tailored to meet your specific needs and objectives.",
    icon: app,
  },
  {
    id: "serviceNumber2",
    title: "Web Development",
    description:
      "Dedicated to building aesthetically pleasing, functional websites that ensure a seamless user experience across all devices and platforms.",
    icon: resumeWebsite,
  },
  {
    id: "serviceNumber3",
    title: "Mentorship/Coaching",
    description:
      "Offering personalized mentorship and coaching sessions to help aspiring developers navigate the tech industry and achieve their professional goals.",
    icon: counselor,
  },
  {
    id: "serviceNumber4",
    title: "Tech Consultancy",
    description:
      "Providing expert advice and strategies to businesses and individuals, helping them leverage technology to solve complex problems and improve efficiency.",
    icon: personalTrainer,
  },
];
