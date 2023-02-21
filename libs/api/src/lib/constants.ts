export const SITE_URL = 'https://watheia.vercel.app';
export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'Watheia';
export const SITE_NAME_MULTILINE = ['Watheia', 'Labs'];
export const SITE_NAME = 'Watheia Labs';
export const META_DESCRIPTION =
  'This is an open source demo that Next.js developers can clone, deploy, and fully customize for events. Created through collaboration of marketers, designers, and developers at Vercel.';
export const SITE_DESCRIPTION =
  'Hands-on instructor-lead technology training for tomorrow';
export const DATE = '01 October 2023';
export const SHORT_DATE = 'Jan 1 - 9:00am PST';
export const FULL_DATE = 'Oct 1st 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';
export const REPO = 'https://github.com/drkstr101/watheia';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Live Course',
    route: '/course/a',
  },
  {
    name: 'Vercel Course',
    route: '/course/c',
  },
  {
    name: '100ms Course',
    route: '/course/m',
  },
  {
    name: 'Schedule',
    route: '/schedule',
  },
  {
    name: 'Instructors',
    route: '/instructors',
  },
  {
    name: 'Expo',
    route: '/expo',
  },
  {
    name: 'Jobs',
    route: '/jobs',
  },
];

export type TicketGenerationState = 'default' | 'loading';
