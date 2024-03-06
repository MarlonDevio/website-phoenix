import {
  app,
  resumeWebsite,
  counselor,
  personalTrainer,
} from "../../public/assets";

export const services = [
  {
    id: "serviceNumber1",
    title: "App Development",
    description: "High-quality, user-friendly app development",
    icon: app,
    index: 1,
  },
  {
    id: "serviceNumber2",
    title: "Web Development",
    description:
      "Aesthetic and responsive web development to help you stand out online.",
    icon: resumeWebsite,
    index: 2,
  },
  {
    id: "serviceNumber3",
    title: "Mentorship",
    description:
      "Personalized tech mentorship to help you grow and succeed in your career.",
    icon: counselor,
    index: 3,
  },
  {
    id: "serviceNumber4",
    title: "Tech Consultancy",
    description:
      "Strategic tech consultancy to enhance efficiency and navigate the industry",
    icon: personalTrainer,
    index: 4,
  },
];
