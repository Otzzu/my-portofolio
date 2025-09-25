type Experience = {
  role: string;
  company: string;
  period: string;
  descriptionShort: string;
  descriptionLong: string;
  logo: string;
};

type Tool = {
  name: string;
  icon: string;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  context?: string;
};
