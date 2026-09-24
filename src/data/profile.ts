export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  links?: ProjectLink[];
  highlights?: string[];
  tags?: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Certification {
  name: string;
  code: string;
  url?: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string[];
  interests: string[];
  email: string;
  skills: string[];
  projects: Project[];
  certifications: Certification[];
  socials: SocialLink[];
}

export const profile: Profile = {
  name: 'Dang Thi Minh Thu',
  title: 'Developer',
  tagline:
    'Development • Cloud • Generative AI • LLMs',
  about: [
    'I am a Full-Stack Developer who enjoys turning real-world problems into reliable, scalable software - from backend and frontend/Mini Apps to deployment and system operations. I care about more than just writing code; I enjoy understanding the whole product and taking ownership from development to production.',
    'Currently, I build and operate software products used across a restaurant chain with 240+ stores. Working on a system at this scale has taught me to think beyond features: reliability, maintainability, performance, user experience, and operational efficiency all matter. I work across the stack, connecting backend services, APIs, frontend/Mini Apps, infrastructure, and production operations to deliver practical solutions for real users and business needs.',
    'Alongside full-stack development, I am increasingly exploring Generative AI and LLM technologies with the goal of becoming a GenAI Engineer. I am particularly interested in building AI-powered applications, integrating LLMs into existing products, and combining software engineering with AI to solve practical business problems.',
    'I am always interested in connecting with engineers, developers, and builders who enjoy solving meaningful technical problems. If you are working on Full-Stack, Cloud, DevOps, or Generative AI projects, feel free to connect or send me a message - I would be happy to exchange ideas, learn from each other, and explore opportunities to collaborate.',
  ],
  interests: [
    'Full-Stack Development & Backend Engineering',
    'Frontend & Mini App Development',
    'Cloud, DevOps & Production Operations',
    'Generative AI, LLMs & AI-powered Applications',
    'System Design, Automation & Scalability',
  ],
  email: 'dtminhthu19022004@gmail.com',
  skills: [
    'TypeScript',
    'React',
    'Laravel',
    'Node.js',
    'AWS',
    'Vite',
    'Tailwind CSS',
    'REST API',
    'Git',
    'PostgreSQL',
  ],
  projects: [
    {
      name: 'SweetDream E-Commerce',
      description:
        'A cloud-native e-commerce platform on AWS with microservices architecture and automated CI/CD.',
      highlights: [
        '4 microservices with automated CI/CD (GitHub Actions)',
        'Infrastructure as Code with Terraform, multi-environment (dev/prod)',
        'Customer behavior analytics with S3 export',
        'Cost-optimized AWS setup (~$120-220/month), security & monitoring',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/typnthu/sweetdream' },
        { label: 'Demo (YouTube)', url: 'https://www.youtube.com/watch?v=vkkoSQcbSYI' },
      ],
      tags: ['AWS', 'Microservices', 'Terraform', 'CI/CD'],
    },
    {
      name: 'Mì Cay Seoul - Zalo Mini App & Backend Platform',
      description:
        'A full-stack ordering and booking platform for a restaurant chain: Zalo Mini App with a Laravel backend.',
      highlights: [
        'Backend: Laravel 10 with layered architecture (Controller → Service → Repository)',
        'Real-time chat & notifications via Laravel Reverb (WebSocket)',
        'Frontend: React 18 + TypeScript Mini App, SWR + Zustand',
        'Integrations: Zalo SDK/ZNS/Checkout, Firebase, Google Maps',
        'Features: ordering, table booking, support chat, vouchers, role-based admin',
      ],
      links: [{ label: 'Open Mini App', url: 'https://zalo.me/s/4598130150100706357/' }],
      tags: ['Zalo Mini App', 'Laravel', 'React', 'TypeScript', 'WebSocket'],
    },
  ],
  certifications: [
    {
      name: 'AWS Certified AI Practitioner',
      code: 'AIF-C01',
      url: 'https://www.credly.com/badges/ed9c1fb6-b54d-4b41-9d5d-e7773ce3bc6d/public_url',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C02',
      url: 'https://www.credly.com/badges/e076e816-8c73-447f-9b3c-e7966d2d933e/public_url',
    },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/typnthu' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/typnthu' },
    { label: 'Facebook', url: 'https://www.facebook.com/typnthu.1902' },
  ],
};
