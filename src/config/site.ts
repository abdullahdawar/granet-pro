export const SITE = {
  name: 'GranetPro',
  title: 'GranetPro | The All-In-One Business Management System',
  description: 'A premium, offline-first system combining POS, real-time analytics, inventory, and HR to give you complete control over your operations.',
  url: (typeof process !== 'undefined' && process.env.SITE_URL) || 'https://granetpro.com',
  twitterHandle: '@granetpro',
  socials: {
    twitter: 'https://twitter.com/granetpro',
    instagram: 'https://instagram.com/granetpro',
    linkedin: 'https://www.linkedin.com/company/granetpro',
    dribbble: 'https://dribbble.com/granetpro',
  },
  image: {
    src: '/favicon.svg',
    alt: 'GranetPro logo',
  },
} as const;

export type SiteConfig = typeof SITE;
