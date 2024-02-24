import {
  attesticoPortfolioImage,
  budgetApp,
  datingApp,
  logoIconGold
} from '../assets';

export const portfolioItems = [
  {
    id: 'i1',
    title: 'Attestico',
    description:
      'Attestico: A custom-built, React-based web application streamlining the asbestos certification process, designed with a user-friendly interface and optimized for search engines.',
    image: attesticoPortfolioImage,
    url: 'https://www.attestico.be'
  },
  {
    id: 'i2',
    title: 'Java Based Budget App',
    description:
      'This ongoing project is a Java-based budgeting tool that demonstrates my use of various design patterns for efficient problem-solving. Features include expense tracking and financial visualization. Source code is available on my GitHub.',
    image: budgetApp,
    url: 'https://github.com/MarlonDevio/BudgetApp'
  },
  {
    id: 'i3',
    title: 'Blend Together Dating App',
    description:
      'Early-stage React project focusing on connecting individuals. Work in progress, highlighting modern UI/UX principles',
    image: datingApp,
    url: 'https://main.de43yzimj1cob.amplifyapp.com/'
  }
];

export const sidebarLinks = [
  { sectionName: 'Home', id: 'home' },
  { sectionName: 'About', id: 'about' },
  { sectionName: 'Mission', id: 'mission' },
  { sectionName: 'Portfolio', id: 'portfolio' },
  { sectionName: 'Contact', id: 'contact' }
];
