export type PortfolioData = {
  username: string;
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  resume: string;
  typewriter: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  about: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    name: string;
    desc: string;
    longDesc: string;
    repo?: string;
    live?: string;
    tech: string[];
    categories: string[];
    start: string;
    end: string;
    screenshot?: string;
  }[];
};
